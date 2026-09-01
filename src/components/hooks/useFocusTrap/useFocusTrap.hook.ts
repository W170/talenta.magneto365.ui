import { useEffect, useRef } from 'react'
import { isServer } from '@constants/env.constants'
import { IFocusTrapEntry, IGuardedElementState, IUseFocusTrapOptions } from './useFocusTrap.interface'

const FOCUSABLE_SELECTOR = [
  'a[href]',
  'area[href]',
  'button:not([disabled])',
  'input:not([disabled]):not([type="hidden"])',
  'select:not([disabled])',
  'textarea:not([disabled])',
  'iframe',
  'audio[controls]',
  'video[controls]',
  '[contenteditable]:not([contenteditable="false"])',
  '[tabindex]:not([tabindex="-1"])'
].join(',')

const scheduleFrame = (callback: () => void): number =>
  typeof requestAnimationFrame === 'function'
    ? requestAnimationFrame(callback)
    : (setTimeout(callback, 0) as unknown as number)

const cancelFrame = (handle: number): void => {
  if (typeof cancelAnimationFrame === 'function') cancelAnimationFrame(handle)
  else clearTimeout(handle)
}

const trapStack: IFocusTrapEntry[] = []

const guardedElements = new Map<Element, IGuardedElementState>()

const isTopmost = (id: symbol): boolean => trapStack.length > 0 && trapStack[trapStack.length - 1].id === id

const isHidden = (element: HTMLElement, container: HTMLElement): boolean => {
  let node: HTMLElement | null = element
  while (node && node !== container.parentElement) {
    if (node.hasAttribute('hidden') || node.getAttribute('aria-hidden') === 'true') return true
    const style = getComputedStyle(node)
    if (style.display === 'none' || style.visibility === 'hidden') return true
    node = node.parentElement
  }
  return false
}

const getFocusable = (container: HTMLElement): HTMLElement[] =>
  Array.from(container.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR)).filter(
    (element) => !isHidden(element, container)
  )

const getPortalHost = (node: HTMLElement | null): HTMLElement | null => {
  let current: HTMLElement | null = node
  while (current && current.parentElement && current.parentElement !== document.body) {
    current = current.parentElement
  }
  return current && current.parentElement === document.body ? current : null
}

const releaseGuards = (): void => {
  guardedElements.forEach((snapshot, element) => {
    if (snapshot.ariaHidden === null) element.removeAttribute('aria-hidden')
    else element.setAttribute('aria-hidden', snapshot.ariaHidden)
    if (!snapshot.hadInert) element.removeAttribute('inert')
  })
  guardedElements.clear()
}

const applyGuards = (): void => {
  releaseGuards()

  const topmost = trapStack[trapStack.length - 1]
  if (!topmost) return

  const host = getPortalHost(topmost.containerRef.current)
  if (!host) return

  Array.from(document.body.children).forEach((child) => {
    if (child === host || child.tagName === 'SCRIPT' || child.tagName === 'STYLE') return
    guardedElements.set(child, {
      ariaHidden: child.getAttribute('aria-hidden'),
      hadInert: child.hasAttribute('inert')
    })
    child.setAttribute('aria-hidden', 'true')
    child.setAttribute('inert', '')
  })
}

export const useFocusTrap = ({
  active,
  containerRef,
  onEscape,
  initialFocusRef,
  returnFocusRef
}: IUseFocusTrapOptions): void => {
  const previouslyFocusedRef = useRef<HTMLElement | null>(null)

  const optionsRef = useRef({ onEscape, initialFocusRef, returnFocusRef })
  optionsRef.current = { onEscape, initialFocusRef, returnFocusRef }

  useEffect(() => {
    if (isServer || !active) return

    const id = Symbol('focus-trap')
    trapStack.push({ id, containerRef })

    previouslyFocusedRef.current = document.activeElement as HTMLElement | null
    applyGuards()

    const focusInitial = (): void => {
      const container = containerRef.current
      if (!container) return
      const target = optionsRef.current.initialFocusRef?.current || getFocusable(container)[0] || container
      target.focus()
    }

    let frame = scheduleFrame(() => {
      focusInitial()
      frame = scheduleFrame(focusInitial)
    })

    const handleKeyDown = (event: KeyboardEvent): void => {
      if (!isTopmost(id)) return

      const container = containerRef.current
      if (!container) return

      if (event.key === 'Escape') {
        optionsRef.current.onEscape?.()
        return
      }

      if (event.key !== 'Tab') return

      const focusable = getFocusable(container)
      if (focusable.length === 0) {
        event.preventDefault()
        container.focus()
        return
      }

      const first = focusable[0]
      const last = focusable[focusable.length - 1]
      const activeElement = document.activeElement

      if (!event.shiftKey && activeElement === last) {
        event.preventDefault()
        first.focus()
      } else if (event.shiftKey && (activeElement === first || activeElement === container)) {
        event.preventDefault()
        last.focus()
      } else if (activeElement && !container.contains(activeElement)) {
        event.preventDefault()
        const fallback = event.shiftKey ? last : first
        fallback.focus()
      }
    }

    const handleFocusIn = (event: FocusEvent): void => {
      if (!isTopmost(id)) return

      const container = containerRef.current
      if (!container) return

      const target = event.target as Node | null
      if (target && !container.contains(target)) {
        const fallback = getFocusable(container)[0] || container
        fallback.focus()
      }
    }

    document.addEventListener('keydown', handleKeyDown, true)
    document.addEventListener('focusin', handleFocusIn, true)

    return () => {
      cancelFrame(frame)
      document.removeEventListener('keydown', handleKeyDown, true)
      document.removeEventListener('focusin', handleFocusIn, true)

      const index = trapStack.findIndex((entry) => entry.id === id)
      if (index !== -1) trapStack.splice(index, 1)

      if (trapStack.length === 0) releaseGuards()
      else applyGuards()

      const previouslyFocused = previouslyFocusedRef.current
      const returnTarget =
        optionsRef.current.returnFocusRef?.current ||
        (previouslyFocused && document.contains(previouslyFocused) ? previouslyFocused : null)
      returnTarget?.focus?.()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active])
}
