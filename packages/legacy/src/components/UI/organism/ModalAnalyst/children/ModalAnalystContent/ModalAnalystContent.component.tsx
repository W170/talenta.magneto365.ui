import React from 'react'
import { IModalAnalystContentProps } from './ModalAnalystContent.interface'

const Component: React.FC<IModalAnalystContentProps> = ({ content }) => {
  return <div>{content}</div>
}

/**
 * Molecule UI child component of modal analyst
 */
export const ModalAnalystContent = Component
