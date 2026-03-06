import { Events, EventType } from './eventDispatcher.interface'

export type Listener<TEventType extends EventType> = (event: Events[TEventType]) => void

export type ListenerMap = {
  [TEventType in EventType]?: Listener<TEventType>[]
}

export default class EventDispatcher {
  private listenersMap: ListenerMap = {}

  /**
   *
   * @param eventType Event Type to subscribe
   * @param listener Callback that execute each time that dispatch function
   * is called with event type subscribed
   * @returns unsubscribe function
   */
  subscribe<TEventType extends EventType>(eventType: TEventType, listener: Listener<TEventType>): () => void {
    const listeners: Listener<TEventType>[] = this.listenersMap[eventType] || []
    this.listenersMap = {
      ...this.listenersMap,
      [eventType]: [...listeners, listener]
    }
    // unsubscribe function
    return () => {
      this.listenersMap = {
        ...this.listenersMap,
        [eventType]: this.listenersMap[eventType]?.filter((l) => l !== listener)
      }
    }
  }

  /**
   *
   * @param eventType Event Type to dispatch data
   * @param payload Data
   */
  dispatch<TEventType extends EventType>(eventType: TEventType, payload: Events[TEventType]): void {
    const listeners: Listener<TEventType>[] = this.listenersMap[eventType] || []
    listeners.forEach((cb) => cb(payload))
  }
}
