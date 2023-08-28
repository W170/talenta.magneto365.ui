import React from 'react'
import { Meta, StoryObj } from '@storybook/react'
import { appliedOptionsBySearchRenderType } from '@constants/stories.constants'
import SideFilter from './SideFilter.component'
import data from './filtersNormalized.json'
import {
  IFilter,
  IGetOptionsOnSearchProps,
  ISearchRenderTypeOption,
  ISetIsApplied,
  IUnApplyWithChild
} from './SideFilter.interface'

const meta: Meta<typeof SideFilter> = {
  title: 'Template/Side Filter',
  component: SideFilter,
  args: {
    title: 'Filtrar empleos',
    filters: data as unknown as IFilter[],
    totalAppliedFilters: 1,
    filterSummary: '3169 empleos',
    buttonText: 'Limpiar',
    loading: false,
    isFiltersOpen: false,
    switchText: 'Apto para personas con discapacidad',

    setIsFiltersOpen: () => console.log('setIsFiltersOpen'),
    setIsApplied: (filter: ISetIsApplied) => new Promise((resolve) => resolve(console.log({ filter }))),
    clearFilters: () => new Promise((resolve) => resolve(console.log('clearFilters'))),
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
  },
  decorators: [
    (Story) => (
      <div style={{ margin: '-16px' }}>
        <Story />
      </div>
    )
  ]
}

export default meta
type Story = StoryObj<typeof SideFilter>

export const Default: Story = {}
