import { Ref } from 'react'

export interface IFilterActions {
  allAction: string
  onClickAction: (index: number, value: string) => void
  filtersRef?: Ref<unknown>
}
