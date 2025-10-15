/* eslint-disable @typescript-eslint/no-namespace */

export interface INewFeature extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement> {
  classNames?: {
    icon?: string
    typography?: string
  }
  feature: string
  onFail?: (message: string) => void
}

export namespace INewFeature {
  interface CustomDate {
    day: number
    month: number
    year: number
  }

  interface FeaturePayload {
    expires: CustomDate
  }

  export type Features = Record<string, FeaturePayload>
}
