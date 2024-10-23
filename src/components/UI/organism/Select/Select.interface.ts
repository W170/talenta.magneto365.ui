import React from 'react'
import { ISelectInput } from './children/SelectInput/SelectInput.interface'

export interface ISelect<T> {
  value: IValueSelect<T>[]
  onChange?: (value: IValueSelect<T>[]) => void

  options: IOption<T>[]
  placeholder?: string

  renderSelect?: <T>(props: ISelectInput<T>) => React.ReactNode

  inputReadonly?: boolean

  children?: React.ReactNode
}

export interface IValueSelect<T> {
  id: number | string
  value: T
}

export interface IOption<T> extends IValueSelect<T> {
  label?: string
}
