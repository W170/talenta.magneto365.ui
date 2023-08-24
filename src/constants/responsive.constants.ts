import { DimType } from '../utils/eventDispatcher'

export const screenSize: Record<DimType, number> = {
  xxs: 375,
  xs: 480,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
  hd: 1366,
  xxl: 1600
}

export const isLessMD = window?.innerWidth <= screenSize.md
