import React from 'react'
import { IContainerOptions } from './ContainerOptions.interface'
import { useMediaQuery } from '@components/hooks'
import { ContainerDesktop, ContainerMobile } from './'

const ContainerOptions: React.FC<IContainerOptions> = (containerProps) => {
  const responsiveContainer = useMediaQuery(<ContainerDesktop {...containerProps} />, {
    md: <ContainerMobile {...containerProps} />
  })

  return responsiveContainer
}

export default ContainerOptions
