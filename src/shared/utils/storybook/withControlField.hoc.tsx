import React, { useState } from 'react'

type ControllerField = {
  valueNameProp?: string
  onChangeNameProp?: string
}

export const withControlField = (WrappedComponent: React.FC<Record<string, unknown>>) => {
  const WithControlField = ({
    onChangeNameProp = 'onChange',
    valueNameProp = 'value',
    ...args
  }: Record<string, unknown> & ControllerField) => {
    const [value, setValue] = useState<unknown>()

    return <WrappedComponent {...args} {...{ [valueNameProp]: value, [onChangeNameProp]: setValue }} />
  }

  return WithControlField
}
