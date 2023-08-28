import React from 'react'
import { LogoComponent } from '@components/UI/atoms'
import { LogoMagneto } from '@constants/icons.constants'
import { classMUI } from '@constants/stories.constants'
import { MagnetoSocialMedia } from '@components/UI/organism'
import { RightsReservedText } from '@components/UI/molecules'
import style from './Footer.module.scss'
import { FooterMenuLinks } from '@components/UI/organism/FooterMenuLinks'
import { IFooter } from './Footer.interface'
import { MagnetoResolution } from '@components/UI/molecules/MagnetoResolution'

const Footer: React.FC<IFooter> = ({ followText, magnetoResolutionProps, rightsReservedProps, menuFooterLink }) => {
  return (
    <footer className={`${style[`${classMUI}-footer`]}`}>
      <div className={`${style[`${classMUI}-footer__row1`]}`}>
        <div className={`${style[`${classMUI}-footer__row1--column1`]}`}>
          <LogoComponent alt="magneto logo" logo={LogoMagneto} />
          <MagnetoSocialMedia followText={followText} />
          <RightsReservedText {...rightsReservedProps} />
        </div>
        <div className={`${style[`${classMUI}-footer__row1--column2`]}`}>
          <FooterMenuLinks menuList={menuFooterLink} />
        </div>
      </div>
      <div className={`${style[`${classMUI}-footer__resolution`]}`}>
        <MagnetoResolution {...magnetoResolutionProps} />
      </div>
    </footer>
  )
}

export default Footer
