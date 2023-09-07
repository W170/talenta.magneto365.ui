import { Meta, StoryObj } from '@storybook/react'

import { SearchItem } from './SearchItem.component'

const meta: Meta<typeof SearchItem> = {
  title: 'Atoms/Search Item',
  component: SearchItem,
  args: {}
}

export default meta

type Story = StoryObj<typeof SearchItem>

export const Default: Story = {
  args: {
    tag: 'Bolsa de empleo México',
    url: 'https://example.com'
  }
}
