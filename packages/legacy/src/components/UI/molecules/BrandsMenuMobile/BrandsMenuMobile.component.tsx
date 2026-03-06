import React, { useState } from 'react'
import { MobileDrawer } from '../MobileDrawer'
import { BrandsContainer } from '../BrandsContainer'
import { IBrandMenu } from '../../organism/BrandMenu/BrandMenu.interface'
import { BrandButton } from '../../organism/BrandMenu/children'

const BrandsMenuMobile: React.FC<IBrandMenu> = ({ brandsProps, companyLogo, companySlug = '' }) => {
  const [openDrawer, setOpenDrawer] = useState(false)

  return (
    <>
      <BrandButton
        rotate={openDrawer}
        onClick={() => setOpenDrawer(!openDrawer)}
        companyLogo={companyLogo}
        companySlug={companySlug ? companySlug : ''}
      />
      <MobileDrawer isOpen={openDrawer} onClose={() => setOpenDrawer(false)}>
        <BrandsContainer {...brandsProps} />
      </MobileDrawer>
    </>
  )
}

export default BrandsMenuMobile
