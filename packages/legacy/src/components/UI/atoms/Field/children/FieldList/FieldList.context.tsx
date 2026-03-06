import { createContext, useContext } from 'react'
import { IFieldListContext } from './FieldList.interface'

const initialValue: IFieldListContext = {
  isInsideList: false,
  toggleValue: () => undefined,
  value: undefined
}

export const ListContext = createContext<IFieldListContext>(initialValue)

export const useFieldListContext = () => {
  return useContext(ListContext)
}
