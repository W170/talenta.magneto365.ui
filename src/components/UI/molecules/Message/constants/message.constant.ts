import { Success, Info, Warning, Error } from '@constants/icons.constants'
import { IMessage } from '../Message.interface'

export const initialState: IMessage = {
  text: '',
  type: 'info',
  duration: 3000
}

export const iconByType = {
  info: Info,
  success: Success,
  warning: Warning,
  error: Error
}
