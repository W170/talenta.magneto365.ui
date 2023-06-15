import { IAvatar } from '../../atoms'
import { IlistMenuUserProps } from '../../organism'

export interface IMenuUser {
  /**
   * menu items props
   */
  profileImage: IAvatar
  className?: string
  listMenuUserProps: IlistMenuUserProps
}
