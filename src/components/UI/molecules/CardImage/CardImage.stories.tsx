import { Meta, StoryObj } from '@storybook/react'
import { CardImage } from './CardImage.component'
import { cardImageProps } from '@constants/stories/cardImage.constants'

const meta: Meta<typeof CardImage> = {
  title: 'Molecules/Card Image',
  component: CardImage,
  tags: ['autodocs'],
  args: {
    ...cardImageProps
  },
  argTypes: {}
}

export default meta

type Story = StoryObj<typeof CardImage>

export const Default: Story = {}
