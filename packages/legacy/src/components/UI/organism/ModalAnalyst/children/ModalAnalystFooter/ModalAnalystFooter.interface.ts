import { IconProps } from '@components/UI/atoms'

export interface IModalAnalystFooterProps {
  name: string
  data: unknown
  footer?: IModalAnalystFooter
  setStep: React.Dispatch<React.SetStateAction<number>>
  handleClose: (name: string, visible: boolean, data: unknown) => void
}

export interface IModalAnalystFooter {
  hasTopDivider?: boolean
  actions: IModalAnalystAction[]
}

export interface IModalAnalystAction {
  key: string
  prefixIcon?: IconProps
  suffixIcon?: IconProps
  title?: string
  loading?: boolean
  type: EModalAnalystActionType
  action: (data: unknown) => Promise<{ step?: number; closeModal?: boolean }>
}

export interface IModalAnalystLoading {
  title?: string
  loading?: boolean
}

export enum EModalAnalystActionType {
  GREEN = 'green',
  BLUE = 'blue',
  WHITE = 'white',
  GRAY = 'gray',
  RED = 'red'
}
