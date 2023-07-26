import { IActions } from '@components/UI/molecules/Actions'

export interface IMobileJobDetailsActionsBar {
  /**
   * The text to be displayed on the main action button (e.g., "Apply Now").
   */
  mobileActionButtonText: string
  /**
   * Callback function to be executed when the main action button is clicked (e.g., "Apply Now" button).
   */
  onApplyClick: () => void
  /**
   * Props for the actions component.
   * This component represents a set of actions or buttons that can be displayed in the actions bar.
   */
  actionsProps: IActions
}
