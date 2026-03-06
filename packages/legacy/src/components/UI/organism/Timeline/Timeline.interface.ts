import { TimeLineItemStatus } from '@components/UI/molecules'

export interface ITimelineProps {
  /**
   * Represents the steps in the timeline. Each step is an object that contains a title and a subtitle.
   */
  steps: StepDetails[]
  /**
   * Represents the current step in the timeline. It's a number indicating the index of the current step in the steps array.
   * It is suggested that this number be greater than 0.
   */
  currentStep: number
  /**
   * this property sets the position of the list and status
   */
  onClick?: (status: TimeLineItemStatus, value: number) => void

  /**
   * this property sets the icon as clock
   */
  isNotBlocked?: boolean
}

type StepDetails = {
  title: string
  subtitle: string
}
