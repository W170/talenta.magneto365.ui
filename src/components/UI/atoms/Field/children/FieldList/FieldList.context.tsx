import { createContext, useContext, useLayoutEffect, useRef } from 'react'
import { IFieldListContext } from './FieldList.interface'
import { supportsPopover } from './FieldList.constant'
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

export const useFieldListLayer = () => {
  const listRef = useRef<HTMLDivElement>(null)
  const { isFocused, isMobile } = useFieldContext()

  useLayoutEffect(() => {
    const listNode = listRef.current
    if (!listNode) return

    if (isMobile || !supportsPopover(listNode)) {
      if (supportsPopover(listNode) && listNode.matches(':popover-open')) listNode.hidePopover()
      listNode.removeAttribute('popover')
      return
    }

    listNode.setAttribute('popover', 'manual')
    if (isFocused && !listNode.matches(':popover-open')) listNode.showPopover()
  }, [isFocused, isMobile])

  return listRef
}
