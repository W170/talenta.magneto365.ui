import React, { createContext, useMemo } from 'react'
import { isClient } from '@constants/env.constants'
import { IContextApp, IContextAppProvider } from './context.interface'

export const ContextApp = createContext<IContextApp>({
  container: isClient ? window.document.body : null,
  device: null
})

export const ContextAppProvider: React.FC<IContextAppProvider> = ({ children, device = null, container = null }) => {
  const value = useMemo<IContextApp>(() => {
    let element = container

    if (!element && isClient) {
      element = document.body
    }

    return {
      container: element,
      device
    }
  }, [container, device])

  return <ContextApp.Provider value={value}>{children}</ContextApp.Provider>
}

export const withContextAppProvider = <T,>(Component: React.FC<T>): React.FC<T> => {
  const WithContextAppProvider: React.FC<T> = (props) => (
    <ContextAppProvider>
      <Component {...props} />
    </ContextAppProvider>
  )
  return WithContextAppProvider
}
