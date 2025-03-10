import React, { useEffect, useRef, useState } from 'react'
import ReactDOM from 'react-dom'
import { IModalPortal } from './Modal.interface'

export const ModalPortal: React.FC<IModalPortal> = ({ children }) => {
  const portalNode = useRef<Element | null>(null)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    if (!document) return
    portalNode.current = document.createElement('div')
    portalNode.current.classList.add('modal-ui-drawer')
    document.body.appendChild(portalNode.current)
    setMounted(true)
    return () => {
      if (portalNode.current) {
        document.body.removeChild(portalNode.current)
      }
    }
  }, [])
  return mounted && portalNode.current ? ReactDOM.createPortal(children, portalNode.current) : null
}
