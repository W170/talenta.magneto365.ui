import { Meta, StoryObj } from '@storybook/react'
import { ToggleSearch } from './ToggleSearch.component'
import { toggleSearchProps } from '@constants/stories/overdrivePage.constants'

const meta: Meta<typeof ToggleSearch> = {
  title: 'Molecules/Toggle Search',
  component: ToggleSearch,
  args: toggleSearchProps
}

export default meta

type Story = StoryObj<typeof ToggleSearch>

export const Default: Story = {}
