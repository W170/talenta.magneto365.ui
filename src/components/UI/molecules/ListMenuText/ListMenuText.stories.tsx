import { StoryObj, Meta } from '@storybook/react'
import ListMenuText from './ListMenuText.component'

const meta: Meta<typeof ListMenuText> = {
  title: 'Molecules/List Menu ext',
  component: ListMenuText,
  args: {}
}

export default meta

type Story = StoryObj<typeof ListMenuText>

export const Default: Story = {}
