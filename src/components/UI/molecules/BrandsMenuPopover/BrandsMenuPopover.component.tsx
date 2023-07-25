import React, { useState } from 'react'
import { BrandsContainer } from '../BrandsContainer'
import { Popover } from '../../atoms'
import { BrandButton } from '../../organism/BrandMenu/children'
import { IBrandMenu } from '../../organism/BrandMenu/BrandMenu.interface'

const BrandsMenuPopover: React.FC<IBrandMenu> = ({ brandsProps, companyLogo, companySlug }) => {
  const [showPopover, setShowPopover] = useState(false)
  return (
    <Popover
      show={showPopover}
      widthBase={120}
      positionX="right"
      positionY="bottom"
      content={<BrandsContainer closeBrands={() => setShowPopover(!showPopover)} {...brandsProps} />}
    >
      <BrandButton
        rotate={showPopover}
        companyLogo={companyLogo}
        companySlug={companySlug}
        onClick={() => setShowPopover(!showPopover)}
      />
    </Popover>
  )
}

export default BrandsMenuPopover
