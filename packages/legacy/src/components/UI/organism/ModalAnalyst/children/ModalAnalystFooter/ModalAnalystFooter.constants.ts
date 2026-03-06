import { AnimatedSpinnerBlack, AnimatedSpinnerBlue, AnimatedSpinnerWhite } from '@constants/icons.constants'
import { EModalAnalystActionType } from './ModalAnalystFooter.interface'

export const LOADING_ICONS = {
  [EModalAnalystActionType.GREEN]: AnimatedSpinnerBlue,
  [EModalAnalystActionType.BLUE]: AnimatedSpinnerWhite,
  [EModalAnalystActionType.WHITE]: AnimatedSpinnerBlack,
  [EModalAnalystActionType.GRAY]: AnimatedSpinnerBlack,
  [EModalAnalystActionType.RED]: AnimatedSpinnerWhite
}
