import { Meta, StoryObj } from '@storybook/react'
import { ListMenuIcons } from './ListMenuIcons.component'
import { MenuItems } from '../../../../constants/stories.constants'

const urlParams = 'guardados'

const meta: Meta<typeof ListMenuIcons> = {
  title: 'Molecules/List Menu Icons',
  component: ListMenuIcons,
  tags: ['autodocs'],
  args: {
    urlParam: urlParams,
    menuItems: MenuItems
  }
}

export default meta

type Story = StoryObj<typeof ListMenuIcons>

export const Default: Story = {}
