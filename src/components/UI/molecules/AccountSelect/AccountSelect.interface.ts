import { IAvatar } from '@components/UI/atoms'

type account = {
  id: string
  email: string
  isCurrent: boolean
}
export interface IAccountSelect {
  /**
   * Avatar props of the authenticated user.
   */
  profileImage: IAvatar
  /**
   * Authenticated user data displayed in the selector header.
   */
  user: {
    /**
     * name of the user.
     */
    name: string
    /**
     * Last name of the user.
     */
    lastName: string
  }
  /**
   * List of accounts linked to the user.
   */
  emails: account[]
  /**
   * Localized UI strings for titles and tooltips (from your i18n layer or parent).
   */
  labels: {
    /** Collapse header, e.g. "Linked accounts" */
    sectionTitle: string
    tooltips: {
      /** Shown on the current account row */
      currentAccount: string
      /** Shown on the action to switch to another account */
      changeAccount: string
    }
  }
  /**
   * Callback to handle account selection.
   */
  onSelectAccount: (account: account) => void

  className?: string
}
