import { Meta, StoryObj } from '@storybook/react'
import { FooterMenuLinks } from './'
import { listMenuText } from '@constants/stories.constants'

const meta: Meta<typeof FooterMenuLinks> = {
  title: 'Organism/Footer Menu Links',
  component: FooterMenuLinks,
  args: {
    menuList: listMenuText
  }
}
export default meta

type Story = StoryObj<typeof FooterMenuLinks>

export const Default: Story = {}
