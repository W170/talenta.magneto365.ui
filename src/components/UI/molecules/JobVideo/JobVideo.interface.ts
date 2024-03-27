import { IImage } from '@components/UI/atoms'

export interface IJobVideo {
  /**
   * Props for the image
   */
  imageProps: IImage
  /**
   * This property is the id of the current job selected
   */
  jobId: number
  /**
   * This property is the className to video component
   */
  videoClassName: string
  /**
   * This property is the options object for the video component
   */
  vjsOptions: object
  /**
   * This property is the video component
   */
  VideoComponent: React.FC<{ vjsOptions: object; className?: string }>
  /**
   * This property is the one displayed when the video is mounted
   */
  loadVideo: boolean | undefined
  /**
   * This property changes when the video is displayed
   */
  setLoadVideo?: (load: boolean) => void
}
