import React from 'react'
import { BrandsContainer } from '../BrandsContainer'
import { Popover } from '../../atoms'
import { BrandButton } from '../../organism/BrandMenu/children'
import { IBrandMenu } from '../../organism/BrandMenu/BrandMenu.interface'
import withClickOut from '../../../hoc/withClickOut'

const BrandsMenuPopover: React.FC<IBrandMenu> = ({
  brandsProps,
  companyLogo,
  companySlug,
  clickOut = false,
  setClickOut = () => ({})
}) => {
  return (
    <Popover
      show={clickOut}
      widthBase={120}
      positionX="right"
      positionY="bottom"
      content={<BrandsContainer closeBrands={() => setClickOut(!clickOut)} {...brandsProps} />}
    >
      <BrandButton
        rotate={clickOut}
        companyLogo={companyLogo}
        companySlug={companySlug ? companySlug : ''}
        onClick={() => setClickOut(!clickOut)}
      />
    </Popover>
  )
}

export default withClickOut(BrandsMenuPopover)
