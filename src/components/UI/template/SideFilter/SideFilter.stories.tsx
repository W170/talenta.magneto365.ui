import { Meta, StoryObj } from '@storybook/react'
import { SideFilter } from './SideFilter.component'
import { optionsFilterMenu } from '@constants/stories.constants'

const meta: Meta<typeof SideFilter> = {
  title: 'Template/Side Filter',
  component: SideFilter,
  args: {
    totalFilters: [...optionsFilterMenu, ...optionsFilterMenu]
  }
}

export default meta
type Story = StoryObj<typeof SideFilter>

export const Default: Story = {}
