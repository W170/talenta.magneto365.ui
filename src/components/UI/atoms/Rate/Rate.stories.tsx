import { Meta, StoryObj } from '@storybook/react'
import { Rate } from './Rate.component'

const meta: Meta<typeof Rate> = {
  title: 'Atoms/Rate',
  component: Rate,
  args: {
    numberRates: 5,
    setScore: (index: number) => console.log('value: ', index)
  }
}
export default meta

type Story = StoryObj<typeof Rate>

export const Default: Story = {}
