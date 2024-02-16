import { Meta, StoryObj } from '@storybook/react'
import { MultiRangeSlider } from './multiRangeSlider.component'

const meta: Meta<typeof MultiRangeSlider> = {
  title: 'Atoms/Multi Range Slider',
  component: MultiRangeSlider,
  args: {
    min: 0,
    max: 1000,
    showValues: true,
    onChange: (v) => console.log('MultiRangeSlider', v)
  }
}

export default meta

type Story = StoryObj<typeof MultiRangeSlider>

export const Default: Story = {}
