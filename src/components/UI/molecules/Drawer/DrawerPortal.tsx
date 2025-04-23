import React, { useContext, useEffect, useRef, useState } from 'react'
import ReactDOM from 'react-dom'
import { ContainerContext } from '@components/context/container/container.context'
import { IDrawerPortal } from './Drawer.interface'

export const DrawerPortal: React.FC<IDrawerPortal> = ({ children }) => {
  const portalNode = useRef<Element | null>(null)
  const { isServer, container } = useContext(ContainerContext)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    if (isServer || !container) return
    portalNode.current = document.createElement('div')
    portalNode.current.classList.add('magneto-ui-drawer')
    container.appendChild(portalNode.current)
    setMounted(true)
    return () => {
      if (portalNode.current) {
        container.removeChild(portalNode.current)
      }
    }
  }, [container, isServer])

  return mounted && portalNode.current ? ReactDOM.createPortal(children, portalNode.current) : null
}
