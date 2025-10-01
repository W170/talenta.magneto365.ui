import { createContext, useContext } from 'react'
import { IFieldListContext } from './FieldList.interface'

export const ListContext = createContext<IFieldListContext | null>(null)

export const useFieldListContext = () => {
  const context = useContext(ListContext)
  if (!context) {
    throw new Error('useFieldListContext must be used within Field.List')
  }
  return context
}
