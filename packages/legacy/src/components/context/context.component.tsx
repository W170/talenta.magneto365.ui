import React from 'react'
import { EventDispatcherContextProvider } from './EventDispatcherContext.component'
import { ResponsiveContextProvider } from './ResponsiveContext.component'
import { ContainerContextProvider } from './container/container.context'
import { IContextAppProvider } from './context.interface'

export const ContextAppProvider: React.FC<IContextAppProvider> = ({ children, device, container }) => {
  return (
    <EventDispatcherContextProvider>
      <ContainerContextProvider container={container}>
        <ResponsiveContextProvider device={device}>{children}</ResponsiveContextProvider>
      </ContainerContextProvider>
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
