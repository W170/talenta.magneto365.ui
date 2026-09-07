import React, { useCallback, useEffect, useRef } from 'react'
import { generateID } from '@utils/generateID/generateID.util'

type OpenIntent = 'first' | 'last' | null

interface IUseSortMenuNavigationParams {
  isOpen: boolean
  setIsOpen: (value: boolean) => void
}

interface IUseSortMenuNavigationReturn {
  menuId: string
  triggerRef: React.RefObject<HTMLButtonElement>
  listRef: React.RefObject<HTMLDivElement>
  onTriggerClick: (event: React.MouseEvent<HTMLButtonElement>) => void
  onTriggerKeyDown: (event: React.KeyboardEvent<HTMLButtonElement>) => void
  onMenuKeyDown: (event: React.KeyboardEvent<HTMLDivElement>) => void
  returnFocusToTrigger: () => void
}

const MENU_ITEM_SELECTOR = '[role="menuitem"]'
const FOCUS_MAX_ATTEMPTS = 10

const useSortMenuNavigation = ({ isOpen, setIsOpen }: IUseSortMenuNavigationParams): IUseSortMenuNavigationReturn => {
  const triggerRef = useRef<HTMLButtonElement>(null)
  const listRef = useRef<HTMLDivElement>(null)
  const openIntentRef = useRef<OpenIntent>(null)

  const menuIdRef = useRef<string>('')
  if (!menuIdRef.current) menuIdRef.current = `magneto-sort-menu-${generateID()}`

  const getItems = useCallback(
    () => Array.from(listRef.current?.querySelectorAll<HTMLButtonElement>(MENU_ITEM_SELECTOR) ?? []),
    []
  )

  const focusItemAt = useCallback(
    (index: number) => {
      const items = getItems()
      if (!items.length) return
      const nextIndex = (index + items.length) % items.length
      items.forEach((item, i) => {
        item.tabIndex = i === nextIndex ? 0 : -1
      })
      items[nextIndex].focus()
    },
    [getItems]
  )

  const focusByIntent = useCallback(() => {
    const items = getItems()
    if (!items.length) return false
    if (openIntentRef.current === 'last') {
      focusItemAt(items.length - 1)
    } else {
      const activeIndex = items.findIndex((item) => item.tabIndex === 0)
      focusItemAt(activeIndex >= 0 ? activeIndex : 0)
    }
    return true
  }, [getItems, focusItemAt])

  const returnFocusToTrigger = useCallback(() => {
    triggerRef.current?.focus()
  }, [])

  const closeMenu = useCallback(
    (restoreFocus = true) => {
      setIsOpen(false)
      if (restoreFocus) returnFocusToTrigger()
    },
    [setIsOpen, returnFocusToTrigger]
  )

  useEffect(() => {
    if (!isOpen || !openIntentRef.current) return

    let frame = 0
    let attempts = 0
    const tryFocus = () => {
      if (focusByIntent() || attempts >= FOCUS_MAX_ATTEMPTS) {
        openIntentRef.current = null
        return
      }
      attempts += 1
      frame = requestAnimationFrame(tryFocus)
    }
    frame = requestAnimationFrame(tryFocus)

    return () => cancelAnimationFrame(frame)
  }, [isOpen, focusByIntent])

  const onTriggerClick = useCallback(
    (event: React.MouseEvent<HTMLButtonElement>) => {
      // A keyboard-activated click reports detail === 0.
      openIntentRef.current = event.detail === 0 ? 'first' : null
      setIsOpen(!isOpen)
    },
    [isOpen, setIsOpen]
  )

  const onTriggerKeyDown = useCallback(
    (event: React.KeyboardEvent<HTMLButtonElement>) => {
      switch (event.key) {
        case 'ArrowDown':
        case 'ArrowUp': {
          event.preventDefault()
          openIntentRef.current = event.key === 'ArrowDown' ? 'first' : 'last'
          if (!isOpen) {
            setIsOpen(true)
            return
          }
          focusByIntent()
          break
        }
        case 'Escape':
          if (isOpen) closeMenu()
          break
      }
    },
    [isOpen, setIsOpen, focusByIntent, closeMenu]
  )

  const onMenuKeyDown = useCallback(
    (event: React.KeyboardEvent<HTMLDivElement>) => {
      const items = getItems()
      if (!items.length) return
      const currentIndex = items.findIndex((item) => item === document.activeElement)

      switch (event.key) {
        case 'ArrowDown':
          event.preventDefault()
          focusItemAt(currentIndex + 1)
          break
        case 'ArrowUp':
          event.preventDefault()
          focusItemAt(currentIndex - 1)
          break
        case 'Home':
          event.preventDefault()
          focusItemAt(0)
          break
        case 'End':
          event.preventDefault()
          focusItemAt(items.length - 1)
          break
        case 'Escape':
          event.preventDefault()
          closeMenu()
          break
        case 'Tab':
          event.preventDefault()
          closeMenu()
          break
      }
    },
    [getItems, focusItemAt, closeMenu]
  )

  return {
    menuId: menuIdRef.current,
    triggerRef,
    listRef,
    onTriggerClick,
    onTriggerKeyDown,
    onMenuKeyDown,
    returnFocusToTrigger
  }
}

export default useSortMenuNavigation
