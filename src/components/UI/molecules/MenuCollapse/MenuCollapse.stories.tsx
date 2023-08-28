import { StoryObj, Meta } from '@storybook/react'
import { MenuCollapse } from './'
import { listMenuText } from '@constants/stories.constants'

const meta: Meta<typeof MenuCollapse> = {
  title: 'Molecules/Menu Colpase',
  component: MenuCollapse,
  args: {
    listMenu: listMenuText
  }
}

export default meta

type Story = StoryObj<typeof MenuCollapse>

export const Default: Story = {}
