import React from 'react'
import { ISelectOptions } from './Select2.interface'
import { Select2Container } from './children'
import useSelect2 from './Select2.hook'
import { withClickOut } from '@components/hoc'

const Component = <T,>({ ...props }: ISelectOptions<T>): JSX.Element => {
  const { ...hookProps } = useSelect2<T>({ ...props })

  return <Select2Container {...props} {...hookProps} />
}

/**
 * Molecule UI component of select 2
 */
export const Select2 = withClickOut(Component)
