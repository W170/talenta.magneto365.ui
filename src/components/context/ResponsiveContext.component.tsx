import React, { useContext, useEffect, useLayoutEffect, useRef, useState } from 'react'
import { createContext } from 'react'
import { Dimension } from '../../utils/eventDispatcher'
import { ResponsiveManagement } from '../../utils/responsive/responsive.util'
import { EventDispatcherContext } from './EventDispatcherContext.component'

export const ResponsiveContext = createContext<{ dim: Dimension }>({ dim: { size: 1366, type: 'md' } })

export const ResponsiveContextProvider: React.FC = ({ children }) => {
  const eventDispatcher = useContext(EventDispatcherContext)

  const responsiveManagementRef = useRef<ResponsiveManagement>()
  const [dim, setDim] = useState<Dimension>({ size: 1366, type: 'md' })

  useEffect(() => {
    if (!responsiveManagementRef.current) return
    const unsubscribe = eventDispatcher.subscribe('UPDATE_DIMENSION', ({ dim }) => {
      setDim(dim)
    })
    responsiveManagementRef.current.run(eventDispatcher)
    return () => {
      unsubscribe()
    }
  }, [eventDispatcher])

  useLayoutEffect(() => {
    if (!responsiveManagementRef.current) return
    responsiveManagementRef.current = new ResponsiveManagement()
  }, [])

  return <ResponsiveContext.Provider value={{ dim }}>{children}</ResponsiveContext.Provider>
}
