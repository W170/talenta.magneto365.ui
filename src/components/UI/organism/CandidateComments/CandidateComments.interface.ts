import { IInput } from '@components/UI/molecules/Input/Input.interface'
import { IComment } from '@components/UI/molecules'

export interface ICandidateComments {
  /**
   * Description of of the screen
   */
  description: string
  /**
   * Properties of the input
   */
  inputProps: ICandidateCommentsInputProps
  /**
   * Function to be called when a new comment is added
   */
  onAdd: (comment: string) => void
  /**
   * Title of the screen
   */
  title: string
  /**
   * Value of array of comments
   */
  value: ICandidateCommentsSection[]
}

export interface ICandidateCommentsInputProps extends Omit<IInput, 'value' | 'onChange' | 'type'> {
  /**
   * Text of the button
   */
  buttonText: string
}

export interface ICandidateCommentsSection {
  /**
   * Array of sub sections of comments
   */
  children?: ICandidateCommentsSubSection[]
  /**
   * Title of the section
   */
  title?: string
}

export interface ICandidateCommentsSubSection {
  /**
   * Array of comments
   */
  children?: IComment[]
  /**
   * Title of the sub section
   */
  title?: string
}
