import { StoryObj, Meta } from '@storybook/react'
import type { FC } from 'react'
import CategoryGrid from './CategoryGrid.component'
import { categoriesData, vacantPositionsSearchList } from '@constants/stories'
import { CategoryMenuCard } from '../../organism/CategoryMenuCard'
import { ButtonLink } from '../../atoms/ButtonLink'

const meta: Meta<typeof CategoryGrid> = {
  title: 'Organism/Category Grid',
  component: CategoryGrid,
  args: {
    elements: categoriesData,
    render: CategoryMenuCard as FC<any>,
    columnsNumber: 2
  }
}

export default meta

type Story = StoryObj<typeof CategoryGrid>

export const Default: Story = {}

export const CustomComponentList: Story = {
  name: 'ButtonLink',
  args: {
    elements: vacantPositionsSearchList,
    render: ButtonLink as FC<any>,
    columnsNumber: 3
  }
}
