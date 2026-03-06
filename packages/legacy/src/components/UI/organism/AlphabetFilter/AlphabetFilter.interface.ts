import { IFiltersRef } from '@components/UI/molecules'
import { Ref } from 'react'

export interface IAlphabetFilter {
  title: string
  allActionText: string
  className?: string
  onClickAction: (index: number, value: string) => void
  filtersRef?: Ref<IFiltersRef>
}
