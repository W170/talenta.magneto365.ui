import React, { useContext, useEffect, useState } from 'react'
import { createContext } from 'react'
import { Dimension } from '../../utils/eventDispatcher'
import { ResponsiveManagement } from '../../utils/responsive/responsive.util'
import { EventDispatcherContext } from './EventDispatcherContext.component'

const responsiveManagement = new ResponsiveManagement()
export const ResponsiveContext = createContext<{ dim: Dimension }>({ dim: responsiveManagement.getDim() })

export const ResponsiveContextProvider: React.FC = ({ children }) => {
  const eventDispatcher = useContext(EventDispatcherContext)

  const [dim, setDim] = useState<Dimension>(responsiveManagement.getDim())

  useEffect(() => {
    const unsubscribe = eventDispatcher.subscribe('UPDATE_DIMENSION', ({ dim }) => {
      setDim(dim)
    })
    responsiveManagement.run(eventDispatcher)
    return () => {
      unsubscribe()
    }
  }, [eventDispatcher])

  return <ResponsiveContext.Provider value={{ dim }}>{children}</ResponsiveContext.Provider>
}
