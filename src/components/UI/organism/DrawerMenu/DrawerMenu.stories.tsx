import { Meta, StoryObj } from '@storybook/react'
import { DrawerMenu } from './DrawerMenu.component'
import {
  ButtonsProps,
  ButtonsProps2,
  ListIcon,
  listMenuProps,
  headerProps
} from '../../../../constants/stories.constants'

const meta: Meta<typeof DrawerMenu> = {
  title: 'Organism/Drawer Menu',
  component: DrawerMenu,
  tags: ['autodocs'],
  args: {
    listIcon: ListIcon,
    buttonsProps: ButtonsProps,
    buttonsProps2: ButtonsProps2,
    headerProps: headerProps,
    listMenuProps: listMenuProps
  },
  argTypes: {}
}

export default meta

type Story = StoryObj<typeof DrawerMenu>

export const Default: Story = {}
