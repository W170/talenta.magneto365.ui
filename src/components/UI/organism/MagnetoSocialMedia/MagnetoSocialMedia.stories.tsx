import { Meta, StoryObj } from '@storybook/react'
import { MagnetoSocialMedia } from './'

const meta: Meta<typeof MagnetoSocialMedia> = {
  title: 'Organism/Magneto Social Media',
  component: MagnetoSocialMedia,
  args: {
    followText: 'Siguenos'
  }
}

export default meta

type Story = StoryObj<typeof MagnetoSocialMedia>

export const Default: Story = {}
