import { Meta, StoryObj } from '@storybook/react'
import { BarChart } from './BarChart.component'

const meta: Meta<typeof BarChart> = {
  title: 'Atoms/Bar chart',
  component: BarChart,
  tags: ['autodocs'],
  args: {
    bin: [1000000, 5000000],
    heightPercentage: 0.5,
    jobText: 'empleos'
  }
}

export default meta

type Story = StoryObj<typeof BarChart>

export const Default: Story = {}
