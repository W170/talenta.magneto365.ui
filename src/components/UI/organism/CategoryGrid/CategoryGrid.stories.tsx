import { StoryObj, Meta } from '@storybook/react'
import CategoryGrid from './CategoryGrid.component'
import { categoriesData, vacantPositionsSearchList } from '@constants/stories'
import { CategoryMenuCard } from '../../organism/CategoryMenuCard'
import { PositionLink } from '../../molecules/PositionLink'

const meta: Meta<typeof CategoryGrid> = {
  title: 'Organism/Category Grid',
  component: CategoryGrid,
  args: {
    elements: categoriesData,
    render: CategoryMenuCard,
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
    render: PositionLink,
    columnsNumber: 3
  }
}
