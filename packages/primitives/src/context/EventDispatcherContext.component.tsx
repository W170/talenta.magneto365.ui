import React, { createContext } from 'react'
import { EventDispatcher } from '@magneto365-ui/shared'

const eventDispatcher = new EventDispatcher()

export const EventDispatcherContext = createContext<EventDispatcher>(eventDispatcher)

export const EventDispatcherContextProvider: React.FC = ({ children }) => {
  return <EventDispatcherContext.Provider value={eventDispatcher}>{children}</EventDispatcherContext.Provider>
}
