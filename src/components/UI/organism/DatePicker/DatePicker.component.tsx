import React from 'react'
import { DatePicker } from '@components/UI/molecules'
import { MobileDatePicker } from '@components/UI/organism'
import { useMediaQuery } from '@components/hooks'

import { IDatePickerComponent } from './DatePicker.interface'
import style from './DatePicker.module.scss'
import { classMUI } from '@constants/stories'

const Component: React.FC<IDatePickerComponent> = ({ datePickerProps, mobileDatePickerProps }) => {
  const DatePickerComponent = useMediaQuery(<DatePicker {...datePickerProps} />, {
    lg: <MobileDatePicker {...mobileDatePickerProps} />
  })

  return <div className={style[`${classMUI}`]}>{DatePickerComponent}</div>
}

export const DatePickerComponent = Component
