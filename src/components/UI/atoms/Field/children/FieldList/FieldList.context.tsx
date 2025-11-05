import { createContext, useContext } from 'react'
import { IFieldListContext } from './FieldList.interface'

export const ListContext = createContext<IFieldListContext | null>(null)

export const useFieldListContext = () => {
  return useContext(ListContext)
}
