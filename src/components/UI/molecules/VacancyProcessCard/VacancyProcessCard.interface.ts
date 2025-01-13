import { IconProps } from '@components/UI/atoms'
import { IVacancyStageCard } from '../VacancyStageCard/VacancyStageCard.interface'

export interface IVacancyProcessCard {
  vacancyDetail: IVacancyProcessCardSection
}

export interface IVacancyProcessCardSection {
  title?: IVacancyProcessCardText
  status?: IVacancyProcessCardText
  date?: IVacancyProcessCardText
  origin?: IVacancyProcessCardText
  stage?: IVacancyProcessCardText
  children: IVacancyStageCard[]
}

export interface IVacancyProcessCardText {
  size?: TVacancyProcessCardSectionTypes
  weight?: TVacancyProcessCardTextFontWeight
  color?: TVacancyProcessCardTextFontColor
  value: string
  data?: string | ((text: IVacancyProcessCardText) => void)
  prefixIcon?: IconProps
  suffixIcon?: IconProps
  separation?: TVacancyProcessCardTextSeparation
}

export enum EVacancyProcessCardSectionTypes {
  XS = 'xs',
  SM = 'sm',
  MD = 'md',
  LG = 'lg',
  XL = 'xl',
  XXL = 'xxl'
}

export type TVacancyProcessCardSectionTypes = `${EVacancyProcessCardSectionTypes}`

export enum EVacancyProcessCardTextFontWeight {
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

export type TVacancyProcessCardTextFontWeight = `${EVacancyProcessCardTextFontWeight}`

export enum EVacancyProcessCardTextFontColor {
  GRAY = 'gray',
  BLACK = 'black',
  WHITE = 'white',
  GREEN = 'green',
  BLUE = 'blue',
  LIGTH_GRAY = 'lightGray',
  RED = 'red'
}

export type TVacancyProcessCardTextFontColor = `${EVacancyProcessCardTextFontColor}`

export enum EVacancyProcessCardTextSeparation {
  NONE = 'none',
  SM = 'sm',
  MD = 'md',
  LG = 'lg',
  XL = 'xl',
  XXL = 'xxl',
  XXXL = 'xxxl'
}

export type TVacancyProcessCardTextSeparation = `${EVacancyProcessCardTextSeparation}`
