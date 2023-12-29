import React from 'react'
import { IContainerOptions } from './ContainerOptions.interface'
import { useMediaQuery } from '@components/hooks'
import { ContainerDesktop, ContainerMobile } from './'

const ContainerOptions: React.FC<IContainerOptions> = ({ responsiveMenu, ...containerProps }) => {
  const responsiveContainer = useMediaQuery(<ContainerDesktop {...containerProps} />, {
    md: responsiveMenu ? <ContainerMobile {...containerProps} /> : <ContainerDesktop {...containerProps} />
  })

  return responsiveContainer
}

export default ContainerOptions
