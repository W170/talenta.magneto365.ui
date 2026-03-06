import { IAvatar } from '../../atoms'
import { IlistMenuUserProps } from '../../organism'

export interface IMenuUser {
  /**
   * menu items props
   */
  profileImage: IAvatar
  listMenuUserProps: IlistMenuUserProps
  clickOut?: boolean
  setClickOut?: React.Dispatch<React.SetStateAction<boolean>>
}
