import React from 'react'
import { ERadioType, ComponentProps } from './Radio.interface'
import { getRadioComponent } from './Radio.constants'

const Component = <T extends keyof typeof ERadioType>({ type, ...props }: { type: T } & ComponentProps<T>) => {
  const RadioType = getRadioComponent(ERadioType[type ?? 'radio'])

  if (!RadioType) return null

  return <RadioType {...props} />
}

/**
 * Atom UI component of radio
 */
export const Radio = Component
