import { Meta, StoryObj } from '@storybook/react'
import DescriptionBook from './DescriptionBook.component'
import { descriptionBookProps } from '@constants/stories/descriptionBook.constants'

const meta: Meta<typeof DescriptionBook> = {
  title: 'Organism/Description Book',
  component: DescriptionBook,
  args: {
    ...descriptionBookProps
  }
}
export default meta

type Story = StoryObj<typeof DescriptionBook>

export const Default: Story = {}
