import React, { createContext, FC, useMemo } from 'react'
import { IContainerContext, IContainerContextProvider } from './container.interface'
import { isClient, isServer } from '@constants/env.constants'

export const ContainerContext = createContext<IContainerContext>({
  container: isClient ? window.document.body : null,
  isClient,
  isServer
})

export const ContainerContextProvider: FC<IContainerContextProvider> = ({ children, container = null }) => {
  const ctx = useMemo(() => {
    let element = container

    if (!element && isClient) {
      element = document.body
    }

    return {
      isClient,
      isServer,
      container: element
    }
  }, [container])

  return <ContainerContext.Provider value={ctx}>{children}</ContainerContext.Provider>
}
