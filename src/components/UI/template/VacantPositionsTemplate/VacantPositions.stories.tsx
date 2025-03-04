import { StoryObj, Meta } from '@storybook/react'
import VacantPositions from './VacantPositions.component'
import CategoryGrid from '../../organism/CategoryGrid/CategoryGrid.component'
import { categoriesData, vacantPositionsData } from '@constants/stories'
import { CategoryMenuCard } from '../../organism/CategoryMenuCard'

const meta: Meta<typeof VacantPositions> = {
  title: 'Template/VacantPositions',
  component: VacantPositions,
  args: vacantPositionsData
}

export default meta

type Story = StoryObj<typeof VacantPositions>

export const Default: Story = {}

export const CustomTemplate: Story = {
  name: 'Template with grid',
  args: {
    ...vacantPositionsData,
    children: CategoryGrid({
      elements: categoriesData,
      render: CategoryMenuCard
    })
  }
}
