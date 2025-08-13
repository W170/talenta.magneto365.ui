import { AnswerType } from './children/GlobalQuestion/GlobalQuestion.interface'
import { ReactNode } from 'react'

export interface IFormHandler {
  /**
   * Determines if the form should be displayed as multiple steps
   */
  multiStep?: boolean
  /**
   * Function to customize the submit action
   */
  onSubmit: (answers: { [key: string]: AnswerType }) => void
  /**
   * Custom classname for the form container
   */
  className?: string
  /**
   * Enable resend the test
   */
  isDisabled?: boolean
  /**
   * Children components to render (questions)
   */
  children: ReactNode
  /**
   * Total number of steps for multi-step forms
   */
  totalSteps?: number
  /**
   * Current step for multi-step forms
   */
  currentStep?: number
  /**
   * Callback for step changes
   */
  onStepChange?: (step: number) => void
}
