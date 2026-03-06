import { Meta, StoryObj } from '@storybook/react'

import { MobileJobDetailsHeader } from './MobileJobDetailsHeader.component'

const meta: Meta<typeof MobileJobDetailsHeader> = {
  title: 'Molecules/Mobile Job Details Header',
  component: MobileJobDetailsHeader,
  args: {}
}

export default meta

type Story = StoryObj<typeof MobileJobDetailsHeader>

export const Default: Story = {
  args: {
    returnText: 'Volver'
  }
}

export const WithTranslation: Story = {
  args: {
    returnText: 'Return'
  }
}
