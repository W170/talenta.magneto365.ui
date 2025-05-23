import { MagnetoUIColor, MagnetoUIText } from 'magneto-ui'

export interface ITypographyBase extends Pick<React.HTMLAttributes<HTMLElement>, 'className' | 'style'> {
  /** If `true`, the text is rendered in a monospaced font like code. */
  code?: boolean
  /**
   * Text color.
   *
   * @default "black"
   * @example "transparent" | "green-50" | "grey-200" | "red-100"
   * @see MagnetoUIColor
   * @inheritdoc
   */
  color?: MagnetoUIColor
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
   * @default "lg"
   * @example
   * - `"sm"` → `0.5rem`
   * - `"md"` → `0.75rem`
   * - `"lg"` → `1rem`
   * - `"xl"` → `1.25rem`
   * - `"2xl"` → `1.5rem`
   * - `"3xl"` → `1.75rem`
   * - `"4xl"` → `2rem`
   * @see MagnetoUIText
   * @inheritdoc
   */
  size?: MagnetoUIText | number
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
