import { Meta, StoryObj } from '@storybook/react'
import { RightsReservedText } from './'

const meta: Meta<typeof RightsReservedText> = {
  title: 'Molecules/Rights Reserved Text',
  component: RightsReservedText,
  args: {}
}

export default meta

type Story = StoryObj<typeof RightsReservedText>

export const Default: Story = {}
