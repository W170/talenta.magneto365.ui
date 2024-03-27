import { Meta, StoryObj } from '@storybook/react'
import Image from './Image.component'
import { imageProps } from '@constants/stories/Image.constants'

const meta: Meta<typeof Image> = {
  title: 'Atoms/Image',
  component: Image,
  args: {}
}

export default meta

type Story = StoryObj<typeof Image>

export const Default: Story = {
  args: imageProps
}
