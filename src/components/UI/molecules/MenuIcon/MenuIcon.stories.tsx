import { Meta, StoryObj } from '@storybook/react'
import { MenuIcon } from './MenuIcon.component'
import { ArchiveTick } from 'iconsax-react'

const meta: Meta<typeof MenuIcon> = {
  title: 'Molecules/Menu Icon',
  component: MenuIcon,
  tags: ['autodocs'],
  args: {
    text: 'Text Here',
    isActive: false
  }
}

export default meta

type Story = StoryObj<typeof MenuIcon>

export const Default: Story = {}
export const IsActive: Story = {
  args: {
    isActive: true,
    Icon: ArchiveTick,
    text: 'Is Menu Active'
  }
}
