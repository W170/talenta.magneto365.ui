import { generateYearArray } from '@components/UI/molecules/DatePicker/utils'

export const monthOptionsValue = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
export const yearOptionsValue = generateYearArray().yearsArray
export const yearOptionsLabel = generateYearArray().yearsArraytoString

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
