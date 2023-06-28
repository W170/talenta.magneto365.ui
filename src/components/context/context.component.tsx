import React from 'react'
import { EventDispatcherContextProvider } from './EventDispatcherContext.component'
import { ResponsiveContextProvider } from './ResponsiveContext.component'
import { IContextAppProvider } from './context.interface'

export const ContextAppProvider: React.FC<IContextAppProvider> = ({ children, device }) => {
  return (
    <EventDispatcherContextProvider>
      <ResponsiveContextProvider device={device}>{children}</ResponsiveContextProvider>
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
