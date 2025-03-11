import React from 'react'
import { IName } from './name.interface'
import { Typography } from '@components/UI/atoms'

const Component: React.FC<IName> = ({ name, ...props }) => {
  const componentName = (value: string) => (
    <Typography.Text {...props} size="md" color="black" strong>
      {value}{' '}
    </Typography.Text>
  )

  if (name) {
    return componentName(name)
  }

  return null
}
/**
 *  Molecule UI component of Candidate Comments
 */
export const Name = Component
