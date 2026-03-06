import { Meta, StoryObj } from '@storybook/react'
import { BarsChart } from './BarsChart.component'
import { BarsChartData } from '../../../../constants/stories/vacantPositionsCategory.constants'

const meta: Meta<typeof BarsChart> = {
  title: 'Molecules/Bars chart',
  component: BarsChart,
  tags: ['autodocs'],
  args: BarsChartData
}

export default meta

type Story = StoryObj<typeof BarsChart>

export const Default: Story = {}
