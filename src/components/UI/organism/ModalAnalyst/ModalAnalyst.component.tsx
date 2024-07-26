import React, { useState } from 'react'
import { ModalAnalystContainer } from './children'
import { IModalAnalystProps } from './ModalAnalyst.interface'

const Component: React.FC<IModalAnalystProps> = ({ ...props }) => {
  const [step, setStep] = useState<number>(0)

  return <ModalAnalystContainer step={step} setStep={setStep} {...props} />
}

/**
 * Organism UI component of analyst template
 */
export const ModalAnalyst = Component
