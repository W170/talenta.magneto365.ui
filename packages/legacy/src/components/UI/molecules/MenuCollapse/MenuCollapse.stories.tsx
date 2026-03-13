import { StoryObj, Meta } from '@storybook/react'
import { MenuCollapse } from './'
import { listMenuText } from '@constants/stories'

const meta: Meta<typeof MenuCollapse> = {
  title: 'Legacy/Molecules/Menu Colpase',
  component: MenuCollapse,
  args: {
    listMenu: listMenuText
  }
}

export default meta

type Story = StoryObj<typeof MenuCollapse>

export const Default: Story = {}
