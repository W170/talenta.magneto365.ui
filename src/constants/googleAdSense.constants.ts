import { TAdSize } from '@components/UI/atoms/GoogleAdSense'

export const sizeMap: Record<TAdSize, { width: number; height: number }> = {
  '300x100': { width: 300, height: 100 },
  '728x90': { width: 728, height: 90 },
  '468x60': { width: 468, height: 60 },
  '300x600': { width: 300, height: 600 },
  '300x50': { width: 300, height: 50 }
}
