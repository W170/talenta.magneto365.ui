import React, { useState } from 'react'

export const withControlField = (WrappedComponent: React.FC<Record<string, unknown>>) => {
  const WithControlField = ({ ...args }) => {
    const [value, setValue] = useState<unknown>()

    return <WrappedComponent {...args} value={value} onChange={setValue} />
  }

  return WithControlField
}
