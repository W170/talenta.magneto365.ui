import { Meta, StoryObj } from '@storybook/react'
import { Tag } from '.'
import { ArrowLeft2 } from '@constants/icons.constants'

const meta: Meta<typeof Tag> = {
  title: 'Atoms/Tag',
  component: Tag,
  args: {
    text: 'Tag Componet',
    icon: ArrowLeft2,
    onClick: () => alert('holi'),
    bgColor: '#6bdcff',
    textColor: 'black'
  }
}

export default meta

type Story = StoryObj<typeof Tag>

export const Default: Story = {}
