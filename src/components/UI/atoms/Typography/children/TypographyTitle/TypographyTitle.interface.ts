import { ITypographyBase } from '../../Typography.interface'

export interface ITypographyTitle extends ITypographyBase, Omit<React.HTMLAttributes<HTMLHeadingElement>, 'color'> {
  /**
   * Level of the html tag title.
   *
   * @default 2
   * @example "1" | "2" | "3" | "4" | "5" | "6"
   */
  level?: number
}
