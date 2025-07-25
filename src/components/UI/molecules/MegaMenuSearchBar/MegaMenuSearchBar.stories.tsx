import { StoryObj, Meta } from '@storybook/react'
import MegaMenuSearchBar from './MegaMenuSearchBar.component'
import { SearchbarProps } from '@constants/stories'

const meta: Meta<typeof MegaMenuSearchBar> = {
  title: 'Molecules/Mega Menu Search Bar',
  component: MegaMenuSearchBar,
  args: SearchbarProps
}

export default meta

type Story = StoryObj<typeof MegaMenuSearchBar>

export const Default: Story = {}

export const Icons: Story = {
  args: {}
}
