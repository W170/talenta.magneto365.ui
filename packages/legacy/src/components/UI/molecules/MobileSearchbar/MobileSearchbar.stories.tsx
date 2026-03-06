import { MobileSearchbar } from './MobileSearchbar.component'
import { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof MobileSearchbar> = {
  title: 'Molecules/Mobile Searchbar',
  component: MobileSearchbar,
  args: {}
}

export default meta

type Story = StoryObj<typeof MobileSearchbar>

export const Default: Story = {}
