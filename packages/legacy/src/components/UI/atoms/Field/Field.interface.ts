import { screenSize } from '@constants/responsive.constants'

export interface IField extends React.HTMLAttributes<HTMLDivElement> {
  error?: boolean
}

export interface IFieldProvider {
  children?: React.ReactNode
  className?: string
  fieldRef?: React.ForwardedRef<HTMLDivElement>
}

export interface IFieldContext {
  breakpoint: TFieldScreenSizes | null
  hasError?: boolean
  hasList: boolean
  isDesktop: boolean
  isFocused: boolean
  isMobile: boolean
  wrapperRef: React.RefObject<HTMLDivElement>
  onBlur: <T>(evt?: React.FocusEvent<T>, ref?: React.RefObject<T> | React.ForwardedRef<T>) => void
  onFocus: <T>(evt: React.FocusEvent<T>) => void
  setBreakpoint: React.Dispatch<React.SetStateAction<TFieldScreenSizes | null>>
  setHasError: React.Dispatch<React.SetStateAction<boolean | undefined>>
  setHasList: React.Dispatch<React.SetStateAction<boolean>>
  setIsFocused: React.Dispatch<React.SetStateAction<boolean>>
}

export interface IUseFieldFocus<T> {
  disabled?: boolean
  readOnly?: boolean
  ref?: React.RefObject<T>
  onBlur?: (evt: React.FocusEvent<T>) => void
  onFocus?: (evt: React.FocusEvent<T>) => void
}

export type TFieldScreenSizes = keyof typeof screenSize
