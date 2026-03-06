import { IconProps } from '@components/UI/atoms'

export interface IModalAnalystHeaderProps {
  header?: IModalAnalystHeader
}

export interface IModalAnalystHeader {
  prefixIcon?: IconProps
  title: string
  suffixIcon?: IconProps
}
