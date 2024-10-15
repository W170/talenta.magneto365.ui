import {
  DollarCircleWhiteOutline,
  CoinBlackOutline,
  ShoppingCartBlueOutline,
  AnimatedSpinnerBlack,
  AnimatedSpinnerBlue,
  AnimatedSpinnerWhite
} from '@constants/icons.constants'
import { EExpandableInfoActionVariant } from './ExpandableInfoAction.interface'

export const EXPANDABLE_INFO_ACTION_ICONS: { [key: string]: Record<string, string> } = {
  shoppingCart: {
    [EExpandableInfoActionVariant.LIGHT_BLUE]: ShoppingCartBlueOutline
  },
  coin: {
    [EExpandableInfoActionVariant.DARK_BLUE]: DollarCircleWhiteOutline,
    [EExpandableInfoActionVariant.WHITE]: CoinBlackOutline
  },
  loading: {
    [EExpandableInfoActionVariant.DARK_BLUE]: AnimatedSpinnerWhite,
    [EExpandableInfoActionVariant.GREEN]: AnimatedSpinnerBlue,
    [EExpandableInfoActionVariant.LIGHT_BLUE]: AnimatedSpinnerBlue,
    [EExpandableInfoActionVariant.WHITE]: AnimatedSpinnerBlack
  }
}
