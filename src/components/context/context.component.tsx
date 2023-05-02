import React from 'react'
import { EventDispatcherContextProvider } from './EventDispatcherContext.component'
import { ResponsiveContextProvider } from './ResponsiveContext.component'

export const ContextAppProvider: React.FC = ({ children }) => {
  return (
    <EventDispatcherContextProvider>
      <ResponsiveContextProvider>{children}</ResponsiveContextProvider>
    </EventDispatcherContextProvider>
  )
}

export const withContextAppProvider = <T,>(Component: React.FC<T>): React.FC<T> => {
  const WithContextAppProvider: React.FC<T> = (props) => (
    <ContextAppProvider>
      <Component {...props} />
    </ContextAppProvider>
  )
  return WithContextAppProvider
}
