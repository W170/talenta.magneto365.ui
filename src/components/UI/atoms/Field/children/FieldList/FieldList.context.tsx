import { createContext, useContext, useEffect, useLayoutEffect, useRef } from 'react'
import { IFieldListContext } from './FieldList.interface'
import {
  clearListPlacement,
  isCoveredByOverlay,
  placeListSide,
  supportsPopover,
  watchListLayout
} from './FieldList.constant'
import { useFieldContext } from '../../Field.context'

const initialValue: IFieldListContext = {
  isInsideList: false,
  isMaxReached: false,
  toggleValue: () => undefined,
  value: undefined
}

export const ListContext = createContext<IFieldListContext>(initialValue)

export const useFieldListContext = () => {
  return useContext(ListContext)
}

const LIST_FADE_MS = 300

export const useFieldListLayer = () => {
  const listRef = useRef<HTMLDivElement>(null)
  const hideTimerRef = useRef(0)
  const { isFocused, isMobile, setIsFocused } = useFieldContext()

  useLayoutEffect(() => {
    const listNode = listRef.current
    if (!listNode) return

    if (isMobile || !supportsPopover(listNode)) {
      if (supportsPopover(listNode) && listNode.matches(':popover-open')) listNode.hidePopover()
      listNode.removeAttribute('popover')
      clearListPlacement(listNode)
      return () => window.clearTimeout(hideTimerRef.current)
    }

    listNode.setAttribute('popover', 'manual')

    const isOpen = listNode.matches(':popover-open')
    if (isFocused && !isOpen) listNode.showPopover()
    else if (!isFocused && isOpen) {
      hideTimerRef.current = window.setTimeout(() => {
        if (listNode.matches(':popover-open')) listNode.hidePopover()
      }, LIST_FADE_MS)
    }

    if (listNode.matches(':popover-open')) placeListSide(listNode)

    return () => window.clearTimeout(hideTimerRef.current)
  }, [isFocused, isMobile])

  useEffect(() => {
    const listNode = listRef.current
    if (!listNode || !isFocused || isMobile) return

    return watchListLayout(listNode, () => placeListSide(listNode))
  }, [isFocused, isMobile])

  useEffect(() => {
    const listNode = listRef.current
    if (!listNode || !isFocused || isMobile) return

    let frame = 0
    const observer = new MutationObserver((mutations) => {
      for (const mutation of mutations) {
        mutation.addedNodes.forEach((node) => {
          if (node instanceof HTMLElement) observer.observe(node, { childList: true, subtree: true })
        })
      }

      if (frame) cancelAnimationFrame(frame)
      frame = requestAnimationFrame(() => {
        frame = 0
        if (isCoveredByOverlay(listNode)) setIsFocused(false)
      })
    })

    const closeOnOutsidePointer = (event: Event) => {
      const field = listNode.closest('[data-slot="field"]')
      if (event.target instanceof Node && field?.contains(event.target)) return

      setIsFocused(false)
    }

    observer.observe(document.body, { childList: true })
    document.addEventListener('pointerdown', closeOnOutsidePointer, true)

    return () => {
      if (frame) cancelAnimationFrame(frame)
      observer.disconnect()
      document.removeEventListener('pointerdown', closeOnOutsidePointer, true)
    }
  }, [isFocused, isMobile, setIsFocused])

  return listRef
}
