import { ListIconLink } from './ListIconLink.component'
import { StoryObj, Meta } from '@storybook/react'
import { ListIcon } from '@constants/stories'

const meta: Meta<typeof ListIconLink> = {
  title: 'Molecules/List Icon Link',
  component: ListIconLink,
  args: {
    listIcon: ListIcon,
    direction: 'row',
    spacing: 5,
    size: 20
  }
}

export default meta

type Story = StoryObj<typeof ListIconLink>

export const Default: Story = {}
