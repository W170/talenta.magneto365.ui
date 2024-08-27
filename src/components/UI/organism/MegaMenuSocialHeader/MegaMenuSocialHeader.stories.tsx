import { Meta, StoryObj } from '@storybook/react'
import { MegaMenuSocialHeader } from './MegaMenuSocialHeader.component'
import { megaMenuSocialHeader } from '@constants/stories'

const meta: Meta<typeof MegaMenuSocialHeader> = {
  title: 'Organism/Mega Menu Social Header',
  component: MegaMenuSocialHeader,
  args: megaMenuSocialHeader
}

export default meta

type Story = StoryObj<typeof MegaMenuSocialHeader>

export const Default: Story = {}
