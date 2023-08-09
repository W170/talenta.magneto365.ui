import React from 'react'
import { IBrandMenu } from './BrandMenu.interface'
import { useMediaQuery } from '../../../hooks'
import { BrandsMenuMobile, BrandsMenuPopover } from './../../molecules'

const BrandMenu: React.FC<IBrandMenu> = ({ brandsProps, companyLogo, companySlug }) => {
  const brandMenuprops = {
    brandsProps,
    companyLogo,
    companySlug
  }

  const menuResponsive = useMediaQuery(<BrandsMenuPopover {...brandMenuprops} />, {
    md: <BrandsMenuMobile {...brandMenuprops} />
  })

  return <>{menuResponsive}</>
}

export default BrandMenu
