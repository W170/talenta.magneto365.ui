import { Meta, StoryObj } from '@storybook/react'
import { ListMenuItems } from './ListMenuItems.component'
import { MenuList } from '../../../../constants/stories.constants'

const urlParams = 'empleos-por-empresas'

const meta: Meta<typeof ListMenuItems> = {
  title: 'Molecules/List Menu Items',
  component: ListMenuItems,
  args: { menuList: MenuList, urlParam: urlParams },
  argTypes: {
    menuList: {
      name: 'menuList',
      description: 'You have to put an array with the menu list'
    },
    urlParam: {
      name: 'urlParam',
      description: 'You must set the url parameter to validate the active status of the menu item.'
    }
  }
}

export default meta

type Story = StoryObj<typeof ListMenuItems>

export const Default: Story = {}
