export interface IDateInput {
  className?: string
  onChange?: (value?: Date | null | typeof NaN) => void
  value?: Date | null | typeof NaN
  fit?: boolean
  hasError?: boolean
}
