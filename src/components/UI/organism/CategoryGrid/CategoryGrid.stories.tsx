import { StoryObj, Meta } from '@storybook/react'
import CategoryGrid from './CategoryGrid.component'
import { categoriesData, vacantPositionsSearchList } from '@constants/stories'
import { CategoryMenuCard } from '../../organism/CategoryMenuCard'
import { ButtonLink } from '../../atoms/ButtonLink'

const meta: Meta<typeof CategoryGrid> = {
  title: 'Organism/Category Grid',
  component: CategoryGrid,
  args: {
    elements: categoriesData,
    render: CategoryMenuCard,
    columnsNumber: 2,
    fullWidth: false
  }
}

export default meta

type Story = StoryObj<typeof CategoryGrid>

export const Default: Story = {}

export const CustomComponentList: Story = {
  name: 'ButtonLink',
  args: {
    elements: vacantPositionsSearchList,
    render: ButtonLink,
    columnsNumber: 3
  }
}
