import React, { useCallback, useEffect, useRef, useState } from 'react'

const withClickOut = <T,>(WrappedComponent: React.FC<T>): React.FC<T> => {
  const Component: React.FC<T> = (props) => {
    const [clickOut, setClickOut] = useState(false)

    const ref = useRef<HTMLDivElement>(null)

    const handleClick = useCallback(
      (e: MouseEvent) => {
        if (clickOut) {
          if (ref.current && !ref.current.contains(e.target as Node)) {
            setClickOut(!clickOut)
          }
        }
      },
      [clickOut]
    )

    useEffect(() => {
      document.addEventListener('click', handleClick)
      return () => {
        document.removeEventListener('click', handleClick)
      }
    }, [handleClick])

    return (
      <div ref={ref}>
        <WrappedComponent clickOut={clickOut} setClickOut={setClickOut} {...props} />
      </div>
    )
  }

  return Component
}

export default withClickOut
