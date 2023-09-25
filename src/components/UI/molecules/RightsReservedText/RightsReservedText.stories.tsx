import { Meta, StoryObj } from '@storybook/react'
import { RightsReservedText } from './'
import { RightsReservedProps } from '@constants/stories'

const meta: Meta<typeof RightsReservedText> = {
  title: 'Molecules/Rights Reserved Text',
  component: RightsReservedText,
  args: {
    ...RightsReservedProps
  }
}

export default meta

type Story = StoryObj<typeof RightsReservedText>

export const Default: Story = {}
