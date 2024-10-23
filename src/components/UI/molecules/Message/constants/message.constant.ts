import {
  InfoCircleBlueBold,
  TickCircleGreenBold,
  WarningYellowBold,
  CloseCircleRedBold
} from '@constants/icons.constants'
import { IMessageProps } from '../Message.interface'

export const initialState: IMessageProps = {
  text: '',
  type: 'info',
  duration: 3000
}

export const iconByType = {
  info: InfoCircleBlueBold,
  success: TickCircleGreenBold,
  warning: WarningYellowBold,
  error: CloseCircleRedBold
}

export const transitionDuration = 300
