import { INewFeature } from '@components/UI/atoms/NewFeature/NewFeature.interface'

declare global {
  interface Window {
    __magneto_features?: Record<string, INewFeature.Features[string]>
  }
}
