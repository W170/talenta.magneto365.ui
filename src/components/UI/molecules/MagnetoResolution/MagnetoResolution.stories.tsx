import { StoryObj, Meta } from '@storybook/react'
import { MagnetoResolution } from './'
import { MagnetoResolutionProps } from '@constants/stories'

const meta: Meta<typeof MagnetoResolution> = {
  title: 'Molecules/Magneto Resolution',
  component: MagnetoResolution,
  args: {
    ...MagnetoResolutionProps
  }
}

export default meta

type Story = StoryObj<typeof MagnetoResolution>

export const Default: Story = {}
