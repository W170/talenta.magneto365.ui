import React, { createContext, useCallback, useContext, useState, useEffect } from 'react'
import { ICollapseContext } from './Collapse.interface'

const CollapseContext = createContext<ICollapseContext | undefined>(undefined)

export const Provider: React.FC<Partial<ICollapseContext>> = ({
  children,
  defaultOpen = false,
  onChangeOpen,
  open
}) => {
  const [localIsOpen, setLocalIsOpen] = useState<boolean>(defaultOpen)

  const handleOnchangeOpen = useCallback(
    (isOpen: boolean) => {
      onChangeOpen?.(isOpen)
      if (open === undefined) {
        setLocalIsOpen(isOpen)
      }
    },
    [onChangeOpen, open]
  )

  useEffect(() => {
    if (open !== undefined) {
      setLocalIsOpen(open)
    }
  }, [open])

  return (
    <CollapseContext.Provider value={{ open: localIsOpen, onChangeOpen: handleOnchangeOpen }}>
      {children}
    </CollapseContext.Provider>
  )
}

export const useCollapse = () => {
  const context = useContext(CollapseContext)
  if (!context) throw new Error('useCollapse must be used within a CollapseProvider')
  return context
}
