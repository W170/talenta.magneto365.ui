/* eslint-disable @typescript-eslint/no-explicit-any */
import { generateYearArray } from '@components/UI/molecules/DatePicker/utils'

export const monthOptionsValue = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
const { yearsArray, yearsArrayToString } = generateYearArray()

//Story const

export const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
]
export const years = [
  { optionValue: 2024, optionLabel: '2024' },
  { optionValue: 2025, optionLabel: '2025' },
  { optionValue: 2026, optionLabel: '2026' },
  { optionValue: 2027, optionLabel: '2027' },
  { optionValue: 2028, optionLabel: '2028' },
  { optionValue: 2029, optionLabel: '2029' },
  { optionValue: 2030, optionLabel: '2030' },
  { optionValue: 2031, optionLabel: '2031' },
  { optionValue: 2032, optionLabel: '2032' },
  { optionValue: 2033, optionLabel: '2033' },
  { optionValue: 2034, optionLabel: '2034' },
  { optionValue: 2035, optionLabel: '2035' }
]

export const storyMonths: any = []
export const storyYears: any = []

for (let i = 0; i < Math.min(monthOptionsValue.length, months.length); i++) {
  storyMonths.push({ optionValue: monthOptionsValue[i], optionLabel: months[i] })
}

for (let i = 0; i < Math.min(yearsArray.length, yearsArrayToString.length); i++) {
  storyYears.push({ optionValue: yearsArray[i], optionLabel: yearsArrayToString[i] })
}

export const DatePickerProps = {
  monthPlaceholder: 'Month',
  monthOptionsLabels: months,
  yearPlaceholder: 'Year',
  value: new Date(),
  onChange: () => {
    //
  }
}

export const MobileDatePickerProps = {
  applyLabel: 'Seleccionar',
  cancelLabel: 'Cerrar',
  monthsLabels: months,
  monthDateOptions: storyMonths,
  yearDateOptions: storyYears,
  monthPlaceholder: 'Month',
  yearPlaceholder: 'Year',
  selectionMonthHeader: 'Selecciona un mes',
  selectionYearHeader: 'Selecciona un año',
  value: new Date(),
  onChange: () => {
    //
  }
}
