import React from 'react'
import { DatePicker } from '@components/UI/molecules'
import { MobileDatePicker } from '@components/UI/organism'
import { useMediaQuery } from '@components/hooks'

import { IDatePickerComponent } from '@components/UI/organism'
import style from './DatePickerResponsive.module.scss'
import { classMUI } from '@constants/stories'

const Component: React.FC<IDatePickerComponent> = ({ datePickerProps, mobileDatePickerProps, onChange, value }) => {
  const handleChange = onChange ?? (() => null)
  const DatePickerComponent = useMediaQuery(<DatePicker {...datePickerProps} onChange={handleChange} value={value} />, {
    lg: <MobileDatePicker {...mobileDatePickerProps} onChange={handleChange} value={value} />
  })

  return <div className={style[`${classMUI}`]}>{DatePickerComponent}</div>
}

export const DatePickerResponsiveComponent = Component
