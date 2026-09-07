import React, { useCallback, useEffect, useRef } from 'react'
import { generateID } from '@utils/generateID/generateID.util'
import { IUseUserMenuNavigationParams, IUseUserMenuNavigationReturn } from '../UserMenu.interface'

const FOCUSABLE_SELECTOR = 'a[href], button:not([disabled])'
const FOCUS_MAX_ATTEMPTS = 10

const useUserMenuNavigation = ({ isOpen, setIsOpen }: IUseUserMenuNavigationParams): IUseUserMenuNavigationReturn => {
  const triggerRef = useRef<HTMLDivElement>(null)
  const menuRef = useRef<HTMLDivElement>(null)

  const menuIdRef = useRef<string>('')
  if (!menuIdRef.current) menuIdRef.current = `magneto-user-menu-${generateID()}`

  const getItems = useCallback(
    () => Array.from(menuRef.current?.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR) ?? []),
    []
  )

  const focusItemAt = useCallback(
    (index: number) => {
      const items = getItems()
      if (!items.length) return
      const nextIndex = (index + items.length) % items.length
      items[nextIndex].focus()
    },
    [getItems]
  )

  const closeMenu = useCallback(() => {
    setIsOpen(false)
    triggerRef.current?.focus()
  }, [setIsOpen])

  // Once the panel opens, hand focus to its first item so Tab/Arrow keys keep it inside.
  useEffect(() => {
    if (!isOpen) return

    let frame = 0
    let attempts = 0
    const tryFocus = () => {
      const items = getItems()
      if (items.length) {
        items[0].focus()
        return
      }
      if (attempts >= FOCUS_MAX_ATTEMPTS) return
      attempts += 1
      frame = requestAnimationFrame(tryFocus)
    }
    frame = requestAnimationFrame(tryFocus)

    return () => cancelAnimationFrame(frame)
  }, [isOpen, getItems])

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
          // Keep focus looping inside the panel instead of leaving it while open.
          event.preventDefault()
          focusItemAt(event.shiftKey ? currentIndex - 1 : currentIndex + 1)
          break
      }
    },
    [getItems, focusItemAt, closeMenu]
  )

  return { menuId: menuIdRef.current, triggerRef, menuRef, onMenuKeyDown }
}

export default useUserMenuNavigation
