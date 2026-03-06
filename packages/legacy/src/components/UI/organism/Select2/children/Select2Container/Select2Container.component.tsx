import React from 'react'
import { Select2Desktop, Select2Mobile } from '..'
import { ISelect2ContainerProps } from './Select2Container.interface'
import { useMediaQuery } from '@components/hooks'

const Component = <T,>({ ...props }: ISelect2ContainerProps<T>): JSX.Element => {
  const container = useMediaQuery(<Select2Desktop {...props} />, {
    sm: <Select2Mobile {...props} />
  })

  if (!props.isMobile) return <Select2Desktop {...props} />

  return container
}

/**
 * Molecule UI child component of select 2
 */
export const Select2Container = Component
