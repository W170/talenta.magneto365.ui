import {
  InfoCircleBlueBold,
  TickCircleGreenBold,
  WarningYellowBold,
  CloseCircleRedBold
} from '@constants/icons.constants'
import { IMessageProps } from '../Message.interface'
import { SpinnerBarsGray } from '@constants/gifs.constants'

export const initialState: IMessageProps = {
  text: '',
  type: 'info',
  duration: 3000
}

export const iconByType = {
  info: InfoCircleBlueBold,
  success: TickCircleGreenBold,
  warning: WarningYellowBold,
  error: CloseCircleRedBold,
  loading: SpinnerBarsGray
}

export const transitionDuration = 300
