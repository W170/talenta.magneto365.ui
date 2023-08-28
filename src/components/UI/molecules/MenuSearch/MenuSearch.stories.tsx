import React from 'react'
import { Meta, StoryObj } from '@storybook/react'
import { optionsFilterMenu } from '@constants/stories.constants'
import { MenuSearch } from '../MenuSearch'
import { FilterMenuItem } from '../FilterMenuItem'
import { FilterSearchItem } from '../FilterSearchItem'
import { ISetIsApplied } from '@components/UI/template'

const meta: Meta<typeof MenuSearch> = {
  title: 'Molecules/Menu Search',
  component: MenuSearch,
  args: {
    children: (
      <FilterSearchItem
        placeholder="Buscar pais"
        disabled={false}
        loading={false}
        handleSearch={() => console.log('handleSearch')}
      />
    ),
    content: optionsFilterMenu.map((opt, key) => {
      const optProps = {
        ...opt,
        field: '',
        multiple: true,
        loading: false,
        isSearched: true,
        isApplied: false,
        setIsApplied: (filter: ISetIsApplied) => console.log({ filter }),
        handleApply: () => console.log('handleApply')
      }
      return <FilterMenuItem key={`${key}-${opt.label}`} {...optProps} />
    }),
    show: true,
    handleOnBlur: () => console.log('handleOnBlur')
  }
}

export default meta

type Story = StoryObj<typeof MenuSearch>

export const Default: Story = {}
