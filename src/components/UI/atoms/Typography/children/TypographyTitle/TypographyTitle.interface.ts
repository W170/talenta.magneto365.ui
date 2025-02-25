import { ITypographyBase } from '../../Typography.interface'

export interface ITypographyTitle extends ITypographyBase, Omit<React.HTMLAttributes<HTMLHeadingElement>, 'color'> {
  level?: number
}
