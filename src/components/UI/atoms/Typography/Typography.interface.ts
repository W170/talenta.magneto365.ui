export interface ITypographyBase extends Pick<React.HTMLAttributes<HTMLElement>, 'className' | 'style'> {
  /** If `true`, the text is rendered in a monospaced font like code. */
  code?: boolean
  /**
   * Text color. This is in beta and might change in the future.
   *
   * @beta
   * @default "black"
   * @example "gray" | "black" | "white" | "green" | "blue"
   */
  color?: TTypographyFontColor
  /** If `true`, the text is displayed with a strikethrough. */
  delete?: boolean
  /** If `true`, the text is displayed in italics. */
  italic?: boolean
  /** If `true`, the text is displayed as a keyboard key. */
  keyboard?: boolean
  /** If `true`, the text is highlighted like a marked selection. */
  mark?: boolean
  /**
   * Font size. When a number is provided, the unit is `px` and line height is calculated automatically adding 4px.
   *
   * @default "md"
   * @example
   * - `"xs"` → `10px`
   * - `"sm"` → `12px`
   * - `"md"` → `14px`
   * - `"lg"` → `16px`
   * - `"xl"` → `18px`
   * - `"xl-2"` → `20px`
   * - `"xl-3"` → `22px`
   * - `"xl-4"` → `24px`
   * - `"xl-5"` → `26px`
   * - `"xl-6"` → `28px`
   * - `"xl-7"` → `30px`
   */
  size?: ITypographyFontSize | number
  /** If `true`, the text is displayed in bold. */
  strong?: boolean
  /** If `true`, the text is underlined. */
  underline?: boolean
  /**
   * Font weight. A number can be provided to set the weight directly.
   *
   * @default "normal"
   * @example
   * - `"thin"` → `100`
   * - `"extra-light"` → `200`
   * - `"light"` → `300`
   * - `"normal"` → `400`
   * - `"medium"` → `500`
   * - `"semi-bold"` → `600`
   * - `"bold"` → `700`
   * - `"extra-bold"` → `800`
   * - `"black"` → `900`
   */
  weight?: TTypographyFontWeight | number
  /** If `true`, the text will use ellipsis (`...`) when overflowing. */
  ellipsis?: boolean | ITypographyEllipsis
}

export interface ITypographyEllipsis {
  /** Number of lines before applying ellipsis. */
  rows?: number
}

export enum ETypographyFontSize {
  XS = 'xs',
  SM = 'sm',
  MD = 'md',
  LG = 'lg',
  XL = 'xl',
  XL2 = 'xl-2',
  XL3 = 'xl-3',
  XL4 = 'xl-4',
  XL5 = 'xl-5',
  XL6 = 'xl-6',
  XL7 = 'xl-7'
}

export type ITypographyFontSize = `${ETypographyFontSize}`

export enum ETypographyFontWeight {
  THIN = 'thin',
  EXTRA_LIGHT = 'extra-light',
  LIGHT = 'light',
  NORMAL = 'normal',
  MEDIUM = 'medium',
  SEMI_BOLD = 'semi-bold',
  BOLD = 'bold',
  EXTRA_BOLD = 'extra-bold',
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
