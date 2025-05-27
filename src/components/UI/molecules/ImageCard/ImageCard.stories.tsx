import { Meta, StoryObj } from '@storybook/react'
import { ImageCard } from './ImageCard.component'
import { imageCardData } from '@constants/stories'

const meta: Meta<typeof ImageCard> = {
  title: 'Molecules/Image Card',
  component: ImageCard,
  args: imageCardData
}

export default meta

type Story = StoryObj<typeof ImageCard>

export const Default: Story = {}
