import { IAvatar } from '@components/UI/atoms/Avatar'

export interface IComment {
  /**
   * Avatar props
   */
  avatar?: IAvatar
  /**
   * Date of the comment
   */
  date: string
  /**
   * Description of the comment
   */
  description: string
  /**
   * Detail of the comment
   */
  detail?: string
  /**
   * Name of person who made the comment
   */
  name: string
}
