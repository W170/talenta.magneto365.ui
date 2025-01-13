import { IVacancyProcessCardSection } from '../../molecules/VacancyProcessCard/VacancyProcessCard.interface'
import { IconProps } from '@components/UI/atoms'

export interface ICandidateActivity {
  candidateDetail: {
    vacancyOrigin: ICandidateActivityText
    date: ICandidateActivityText
    currentProcess: ICandidateActivityText
    otherProcesses: ICandidateActivityText
    process: Array<{
      title: ICandidateActivityText
      vacancyDetail: IVacancyProcessCardSection[]
    }>
  }
}

export interface ICandidateActivityText {
  size?: TCandidateActivitySectionTypes
  weight?: TCandidateActivityTextFontWeight
  color?: TCandidateActiviyTextFontColor
  value: string
  data?: string | ((text: ICandidateActivityText) => void)
  prefixIcon?: IconProps
  suffixIcon?: IconProps
}

export enum ECandidateActivitySectionTypes {
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

export type TCandidateActivitySectionTypes = `${ECandidateActivitySectionTypes}`

export enum ECandidateActivityTextFontWeight {
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

export type TCandidateActivityTextFontWeight = `${ECandidateActivityTextFontWeight}`

export enum ECandidateActivityTextFontColor {
  /*   GRAY = '#667688',
    BLACK = '#292F37' */
  GRAY = 'gray',
  BLACK = 'black',
  WHITE = 'white',
  GREEN = 'green',
  BLUE = 'blue',
  LIGHT_GRAY = 'lightGray',
  RED = 'red'
}

export type TCandidateActiviyTextFontColor = `${ECandidateActivityTextFontColor}`
