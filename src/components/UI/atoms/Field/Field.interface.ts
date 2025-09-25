export interface IField extends React.HTMLAttributes<HTMLDivElement> {
  error?: boolean
}

export interface IFieldProvider {
  children?: React.ReactNode
  className?: string
  fieldRef?: React.ForwardedRef<HTMLDivElement>
}

export interface IFieldContext {
  breakpoint: string | null
  hasError?: boolean
  hasList: boolean
  id: string
  isFocused: boolean
  isMobile: boolean
  wrapperRef: React.RefObject<HTMLDivElement>
  onBlur: <T>(evt?: React.FocusEvent<T>, ref?: React.RefObject<T> | React.ForwardedRef<T>) => void
  onFocus: <T>(evt: React.FocusEvent<T>) => void
  setBreakpoint: React.Dispatch<React.SetStateAction<string | null>>
  setHasError: React.Dispatch<React.SetStateAction<boolean | undefined>>
  setHasList: React.Dispatch<React.SetStateAction<boolean>>
  setId: React.Dispatch<React.SetStateAction<string>>
  setIsFocused: React.Dispatch<React.SetStateAction<boolean>>
}

export interface IUseFieldFocus<T> {
  disabled?: boolean
  readOnly?: boolean
  ref?: React.RefObject<T>
  onBlur?: (evt: React.FocusEvent<T>) => void
  onFocus?: (evt: React.FocusEvent<T>) => void
}
