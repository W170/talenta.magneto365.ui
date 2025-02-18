import { Meta, StoryObj } from '@storybook/react'
import { BarsChart } from './BarsChart.component'

const meta: Meta<typeof BarsChart> = {
  title: 'Charts/Bars chart',
  component: BarsChart,
  tags: ['autodocs'],
  args: {
    data: [
      { bin: [1000000, 1500000], y: 1 },
      { bin: [1500000, 2000000], y: 0.5 },
      { bin: [2000000, 2500000], y: 0.75 },
      { bin: [2500000, 3000000], y: 0.25 },
      { bin: [3000000, 3500000], y: 0.04 },
      { bin: [4000000, 4500000], y: 0.15 },
      { bin: [5000000, 5500000], y: 0.1 },
      { bin: [6000000, 6500000], y: 0.25 },
      { bin: [7000000, 7500000], y: 0.1 },
      { bin: [8000000, 8500000], y: 0.5 }
    ],
    mean: 1400000,
    texts: {
      jobs: 'empleos',
      mean: 'Promedio',
      month: 'mes'
    }
  }
}

export default meta

type Story = StoryObj<typeof BarsChart>

export const Default: Story = {}
