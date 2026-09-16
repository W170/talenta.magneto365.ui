import React, { useCallback, useContext, useEffect, useRef, useState } from 'react'
import { ContainerContext } from '@components/context/container/container.context'

const withClickOut = <T,>(
  WrappedComponent: React.FC<T>,
  containerProps: React.HTMLAttributes<HTMLDivElement> = {}
): React.FC<T> => {
  const Component: React.FC<T> = (props) => {
    const { container } = useContext(ContainerContext)
    const [clickOut, setClickOut] = useState(false)

    const ref = useRef<HTMLDivElement>(null)

    const handleClick = useCallback(
      (e: Event) => {
        if (clickOut) {
          if (ref.current && !ref.current.contains(e.target as Node)) {
            setClickOut(!clickOut)
          }
        }
      },
      [clickOut]
    )

    useEffect(() => {
      container?.addEventListener('click', handleClick)
      return () => {
        container?.removeEventListener('click', handleClick)
      }
    }, [handleClick, container])

    return (
      <div ref={ref} {...containerProps}>
        <WrappedComponent clickOut={clickOut} setClickOut={setClickOut} {...props} />
      </div>
    )
  }

  return Component
}

export default withClickOut
