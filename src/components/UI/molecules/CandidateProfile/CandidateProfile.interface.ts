import { IconProps } from '@components/UI/atoms'
export interface ICandidateProfile {
    /**
     * The value of the option.
     */
    details: ICandidateProfileSection[]
}

export interface ICandidateProfileSection {
    title?: ICandidateProfileText
    type?: TCandidateProfileSectionTypes
    children: ICandidateProfileTextContainer[]
}

export enum ECandidateProfileSectionTypes {
    BASIC = "basic",
    QUICK_ACCESS = "quick_access"
}
export type TCandidateProfileSectionTypes = `${ECandidateProfileSectionTypes}`

export interface ICandidateProfileText {
    size?: TCandidateProfileTextFontSize
    weight?: TCandidateProfileTextFontWeight
    color?: TCandidateProfileTextFontColor
    value: string
    data?: string | ((text: ICandidateProfileText) => void)
    prefixIcon?: IconProps
    suffixIcon?: IconProps
    separation?: TCandidateProfileTextSeparation
}

export interface ICandidateProfileTextContainer {
    direction?: TCandidateProfileTextDirection
    separation?: TCandidateProfileTextSeparation
    children?: ICandidateProfileText[]
}

export enum ECandidateProfileTextSeparation {
    /*   NONE = 0,
      SM = 5,
      MD = 10,
      LG = 15,
      XL = 20,
      XXL = 25,
      XXXL = 30 */
    NONE = 'none',
    SM = 'sm',
    MD = 'md',
    LG = 'lg',
    XL = 'xl',
    XXL = 'xxl',
    XXXL = 'xxxl'
}

export type TCandidateProfileTextSeparation = `${ECandidateProfileTextSeparation}`

export enum ECandidateProfileTextDirection {
    ROW = 'row',
    COLUMN = 'column'
}

export type TCandidateProfileTextDirection = `${ECandidateProfileTextDirection}`


export enum ECandidateProfileFontSize {
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

export type TCandidateProfileTextFontSize = `${ECandidateProfileFontSize}`

export enum ECandidateProfileTextFontWeight {
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

export type TCandidateProfileTextFontWeight = `${ECandidateProfileTextFontWeight}`

export enum ECandidateProfileFontColor {
    /*   GRAY = '#667688',
      BLACK = '#292F37' */
    GRAY = 'gray',
    BLACK = 'black'
}

export type TCandidateProfileTextFontColor = `${ECandidateProfileFontColor}`

