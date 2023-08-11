import { Meta, StoryObj } from '@storybook/react'
import { optionsFilterMenu } from '@constants/stories.constants'
import { appliedOptionsBySearchRenderType } from '@constants/stories.constants'
import {
  IGetOptionsOnSearchProps,
  ISearchRenderTypeOption,
  ISetIsApplied,
  IUnApplyWithChild
} from '@components/UI/template'
import { FilterCardOnSearch } from './FilterCardOnSearch.component'

const meta: Meta<typeof FilterCardOnSearch> = {
  title: 'Organism/Filter Card On Search',
  component: FilterCardOnSearch,
  args: {
    label: 'Sector Laboral',
    values: [optionsFilterMenu[1], optionsFilterMenu[2]],
    searchPlaceholder: 'Buscar por un sector laboral',
    switchText: 'remoto',

    setIsApplied: (filter: ISetIsApplied) => new Promise((resolve) => resolve(console.log({ filter }))),
    unApplyWithChild: (withChild: IUnApplyWithChild) => new Promise((resolve) => resolve(console.log({ withChild }))),
    getOptionsOnLoad: (field: string, values: (string | number)[]) => {
      console.log('getOptionsOnLoad: ', { field, values })
      return new Promise<ISearchRenderTypeOption[]>(() => appliedOptionsBySearchRenderType)
    },
    getOptionsOnSearch: (term: IGetOptionsOnSearchProps) =>
      new Promise((resolve) => {
        console.log('getOptionsOnSearch: ', { term })
        return resolve([])
      })
  }
}

export default meta

type Story = StoryObj<typeof FilterCardOnSearch>

export const Default: Story = {}
