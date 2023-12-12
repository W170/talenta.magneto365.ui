import { Meta, StoryObj } from '@storybook/react'
import { ButtonCard } from './ButtonCard.component'
import { buttonCardDescriptionProps } from '@constants/stories/descriptionBook.constants'

const meta: Meta<typeof ButtonCard> = {
  title: 'Molecules/Button Card',
  component: ButtonCard,
  tags: ['autodocs'],
  args: {
    config: { ...buttonCardDescriptionProps }
  },
  argTypes: {}
}

export default meta

type Story = StoryObj<typeof ButtonCard>

export const Default: Story = {}
