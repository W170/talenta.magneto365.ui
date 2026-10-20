import ReactDOM from 'react-dom'
import { useContext, useMemo } from 'react'
import { IPortal } from './Portal.interface'
import { ContextApp } from '@components/context/context.component'
import { isRef } from '@utils/react'

export const Portal: React.FC<IPortal> = ({ key, container: containerProp, children }) => {
  const { container } = useContext(ContextApp)
  const finalContainer = useMemo(() => {
    if (!containerProp) return container
    if (!isRef(containerProp)) return containerProp
    return containerProp.current
  }, [containerProp, container])

  return finalContainer ? ReactDOM.createPortal(children, finalContainer, key) : null
}
