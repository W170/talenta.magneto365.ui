import { IconProps } from '@components/UI/atoms'

export interface IVacancyStageCard {
  stageDetail: {
    title: IVacancyStageCardText
    date: IVacancyStageCardText
    email: IVacancyStageCardText
    children: IVacancyStageCardTextContainer
  }
}

export interface IVacancyStageCardTextContainer {
  children: IVacancyStageCardText[]
}

export interface IVacancyStageCardText {
  size: TVacancyStageCardSectionTypes
  weight: TVacancyStageCardTextFontWeight
  color: TVacancyStageCardTextFontColor
  value: string
  data?: string | ((text: IVacancyStageCardText) => void)
  prefixIcon?: IconProps
  suffixIcon?: IconProps
}

export enum EVacancyStageCardTextFontWeight {
  /*   
      TINY = 5px,
      XXS = '8px',
      XS = '10px',
      SM = '12px',
      MD = '14px',
      LG = '16px',
      XL = '18px',
      XXL = '20px' */

  XS = 'xs',
  SM = 'sm',
  MD = 'md',
  LG = 'lg',
  XL = 'xl',
  XXL = 'xxl'
}

export type TVacancyStageCardSectionTypes = `${EVacancyStageCardTextFontWeight}`

export enum EVacancyStageCardTextFontWeight {
  /*   THIN = '100',
      EXTRA_LIGHT = '200',
      LIGHT = '300',
      NORMAL = '400',
      MEDIUM = '500',
      SEMI_BOLD = '600',
      BOLD = '700',
      EXTRA_BOLD = '800',
      BLACK = '900' */
  THIN = 'thin',
  EXTRA_LIGHT = 'extraLight',
  LIGHT = 'light',
  NORMAL = 'normal',
  MEDIUM = 'medium',
  SEMI_BOLD = 'semiBold',
  BOLD = 'bold',
  EXTRA_BOLD = 'extraBold',
  BLACK = 'black'
}

export type TVacancyStageCardTextFontWeight = `${EVacancyStageCardTextFontWeight}`

export enum EVacancyStageCardTextFontColor {
  /*   GRAY = '#667688',
      BLACK = '#292F37' */
  GRAY = 'gray',
  BLACK = 'black',
  WHITE = 'white',
  GREEN = 'green',
  BLUE = 'blue',
  RED = 'red',
  LIGHT_GRAY = 'lightGray'
}

export type TVacancyStageCardTextFontColor = `${EVacancyStageCardTextFontColor}`
