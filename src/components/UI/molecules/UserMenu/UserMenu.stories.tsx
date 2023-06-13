import { StoryObj, Meta } from '@storybook/react'
import { AvatarProps, listMenuUserProps } from '../../../../constants/stories.constants'
import { UserMenu } from './UserMenu.component'

const meta: Meta<typeof UserMenu> = {
  title: 'Molecules/User Menu',
  component: UserMenu,
  args: {
    profileImage: AvatarProps,
    listMenuUserProps
  }
}

export default meta

type Story = StoryObj<typeof UserMenu>

export const Default: Story = {}
