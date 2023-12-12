import { Meta, StoryObj } from '@storybook/react'
import { MetadataCardImage } from './MetadataCardImage.component'
import { cardImageProps } from '@constants/stories/cardImage.constants'

const meta: Meta<typeof MetadataCardImage> = {
  title: 'Molecules/Metadata Card Image',
  component: MetadataCardImage,
  tags: ['autodocs'],
  args: {
    ...cardImageProps
  },
  argTypes: {}
}

export default meta

type Story = StoryObj<typeof MetadataCardImage>

export const Default: Story = {}
