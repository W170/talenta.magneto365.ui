import React, { useContext, useEffect, useRef, useState } from 'react'
import ReactDOM from 'react-dom'
import { isServer } from '@constants/env.constants'
import { ContainerContext } from '@components/context/container/container.context'
import { IDrawerPortal } from './Drawer.interface'

export const DrawerPortal: React.FC<IDrawerPortal> = ({ children, customContainer }) => {
  const portalNode = useRef<Element | null>(null)
  const { container } = useContext(ContainerContext)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    if (isServer || !container) return
    portalNode.current = document.createElement('div')
    portalNode.current.classList.add('magneto-ui-drawer')
    customContainer?.appendChild(portalNode.current) || container.appendChild(portalNode.current)

    setMounted(true)
    return () => {
      if (portalNode.current) (customContainer || container).removeChild(portalNode.current)
    }
  }, [container, customContainer])

  return mounted && portalNode.current ? ReactDOM.createPortal(children, portalNode.current) : null
}
