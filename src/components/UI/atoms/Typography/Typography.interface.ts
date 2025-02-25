export interface ITypographyBase {
  code?: boolean
  color?: TTypographyFontColor
  delete?: boolean
  italic?: boolean
  keyboard?: boolean
  mark?: boolean
  size?: ITypographyFontSize
  strong?: boolean
  underline?: boolean
  weight?: TTypographyFontWeight
  ellipsis?: boolean | ITypographyEllipsis
}

export interface ITypographyEllipsis {
  rows?: number
}

export enum ETypographyFontSize {
  XS = 'xs',
  SM = 'sm',
  MD = 'md',
  LG = 'lg',
  XL = 'xl',
  XXL = 'xxl'
}

export type ITypographyFontSize = `${ETypographyFontSize}`

export enum ETypographyFontWeight {
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

export type TTypographyFontWeight = `${ETypographyFontWeight}`

export enum ETypographyFontColor {
  GRAY = 'gray',
  BLACK = 'black',
  WHITE = 'white',
  GREEN = 'green',
  BLUE = 'blue'
}

export type TTypographyFontColor = `${ETypographyFontColor}`
