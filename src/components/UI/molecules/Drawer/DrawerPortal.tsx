import React, { useLayoutEffect, useRef, useState } from 'react'
import ReactDOM from 'react-dom'
import { IDrawerPortal } from './Drawer.interface'

export const DrawerPortal: React.FC<IDrawerPortal> = ({ children }) => {
  const portalNode = useRef<Element | null>(null)
  const [mounted, setMounted] = useState(false)
  useLayoutEffect(() => {
    portalNode.current = document.createElement('div')
    portalNode.current.classList.add('magneto-ui-drawer')
    document.body.appendChild(portalNode.current)
    setMounted(true)
  }, [])
  return mounted && portalNode.current ? ReactDOM.createPortal(children, portalNode.current) : null
}
