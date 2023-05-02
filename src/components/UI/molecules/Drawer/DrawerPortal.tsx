import React, { useEffect } from 'react'
import ReactDOM from 'react-dom'
import { IDrawerPortal } from './Drawer.interface'

export const DrawerPortal: React.FC<IDrawerPortal> = ({ children }) => {
  const portalNode = document.createElement('div')
  portalNode.classList.add('magneto-ui-drawer')
  useEffect(() => {
    document.body.appendChild(portalNode)
    return () => {
      portalNode.remove()
    }
  }, [portalNode])

  return ReactDOM.createPortal(children, portalNode)
}
