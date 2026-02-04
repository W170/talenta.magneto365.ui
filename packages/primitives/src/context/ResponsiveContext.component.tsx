import React, { useContext, useEffect, useState } from 'react'
import { createContext } from 'react'
import { screenSize, Dimension, ResponsiveManagement } from '@magneto365-ui/shared'
import { IResponsiveContext } from './context.interface'
import { EventDispatcherContext } from './EventDispatcherContext.component'

export const ResponsiveContext = createContext<{ dim: Dimension }>({ dim: { size: 1366, type: 'md' } })

const desktopDim: Dimension = { size: screenSize.hd, type: 'hd' }
const mobileDim: Dimension = { size: screenSize.xs, type: 'xs' }

export const ResponsiveContextProvider: React.FC<IResponsiveContext> = ({ children, device = 'desktop' }) => {
  const eventDispatcher = useContext(EventDispatcherContext)
  const [responsiveManagement, setResponsiveManagement] = useState<ResponsiveManagement>()
  const [dim, setDim] = useState<Dimension>(device === 'desktop' ? desktopDim : mobileDim)

  useEffect(() => {
    if (!responsiveManagement) return
    const unsubscribe = eventDispatcher.subscribe('UPDATE_DIMENSION', ({ dim: newDim }) => {
      setDim(newDim)
    })
    responsiveManagement.run(eventDispatcher)
    return () => {
      unsubscribe()
    }
  }, [eventDispatcher, responsiveManagement])

  useEffect(() => {
    setResponsiveManagement(() => new ResponsiveManagement())
  }, [])

  return <ResponsiveContext.Provider value={{ dim }}>{children}</ResponsiveContext.Provider>
}
