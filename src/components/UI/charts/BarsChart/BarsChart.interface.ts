import { IBarChart } from '@components/UI/atoms/BarChart/BarChart.interface'

export interface IBarsChart {
  data: IBarChart[]
  mean: number
  texts: IBarsChartText
}

export interface IBarsChartText {
  jobs: string
  mean: string
  month: string
}
