import { IInput } from '@components/UI/molecules/Input/Input.interface'

export interface ICandidateTags {
  /**
   * Description of of the screen
   */
  description: string
  /**
   * Properties of the input
   */
  inputProps: ICandidateTagsInputProps
  /**
   * Function to be called when a new tag is added
   */
  onAdd: (tag: string) => void
  /**
   * Function to be called when a tag is removed
   */
  onRemove: (tag: string) => void
  /**
   * Title of the screen
   */
  title: string
  /**
   * Value of array of tags
   */
  value: string[]
}

export interface ICandidateTagsInputProps extends Omit<IInput, 'value' | 'onChange' | 'type'> {
  /**
   * Text of the button
   */
  buttonText: string
}
