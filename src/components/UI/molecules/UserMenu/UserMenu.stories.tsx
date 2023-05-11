import { StoryObj, Meta } from '@storybook/react'
import { MenuItems } from '../../../../constants/stories.constants'
import { UserMenu } from './UserMenu.component'

const listProps = {
  urlParam: 'guardados',
  menuItems: MenuItems
}

const meta: Meta<typeof UserMenu> = {
  title: 'Molecules/User Menu',
  component: UserMenu,
  args: {
    listProps: listProps
  }
}

export default meta

type Story = StoryObj<typeof UserMenu>

export const Default: Story = {}
