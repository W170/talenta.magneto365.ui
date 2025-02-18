import { IBarChart } from '@components/UI/atoms/BarChart/BarChart.interface'

export interface IBarsChart {
  /**
   * Array of bar chart data objects
   */
  data: IBarChart[]

  /**
   * Represents the mean value to be displayed
   */
  mean: number

  /**
   * Text labels used in the chart
   */
  texts: IBarsChartText
}

export interface IBarsChartText {
  /**
   * Label for jobs description
   */
  jobs: string

  /**
   * Label for mean value
   */
  mean: string

  /**
   * Label for month value
   */
  month: string
}
