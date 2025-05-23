export interface TimelineEventProps {
  /**
   * The title of the event in the timeline. It should be a short string that describes the event.
   */
  title: string
  /**
   * The subtitle of the event in the timeline. It can be a more detailed description of the event.
   */
  subtitle: string
  /**
   * The status of the event in the timeline. It can be 'checked', 'current', or 'blocked'.
   */
  status: TimeLineItemStatus
  /**
   * this property have the position of the list
   */
  index?: number
  /**
   * this property sets the position of the list and status
   */
  onClick?: (status: TimeLineItemStatus, value: number) => void
}

export enum TimeLineItemStatus {
  CHECKED = 'checked',
  CURRENT = 'current',
  BLOCKED = 'blocked',
  UNLOCKED = 'unlocked'
}
