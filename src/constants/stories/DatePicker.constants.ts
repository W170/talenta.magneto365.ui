import { generateYearArray } from '@components/UI/molecules/DatePicker/utils'

export const monthOptionsValue = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]

export const yearOptionsValue = generateYearArray().yearsArray
export const yearOptionsLabel = generateYearArray().yearsArraytoString
