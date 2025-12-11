/* eslint-disable @typescript-eslint/no-namespace */

export interface INewFeature extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement> {
  classNames?: {
    icon?: string
    typography?: string
  }
  /**
   * name of the feature
   */
  feature: string
  /**
   * This event it triggered if no feature is found or if "__magneto_features" object is not available in window
   *   @param {string} message - Error message. Could be one of the following:
   *   - "window.notAvailable": The component was executed in server side or the window is just not available.
   *   - "window.__magneto_features.notAvailable": The object "window.__magneto_features" was not found when component was rendering.
   *   - "feature.[feature].notFound": The feature [feature] pass by props was not found.
   *   - "feature.[feature].invalidDate": the feature [feature] pass by prop has an invalid date.
   * */
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
