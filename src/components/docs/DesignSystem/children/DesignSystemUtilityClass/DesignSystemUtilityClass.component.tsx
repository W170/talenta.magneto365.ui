import React from 'react'
import { classNames } from '@shared/utils/common'
import pStyles from '../../DesignSystem.module.scss'
import { DesignSystemUtilityClassRenderer } from './children'

import border from '@shared/tokens/data/border.json'
import color from '@shared/tokens/data/color.json'
import gap from '@shared/tokens/data/gap.json'
import margin from '@shared/tokens/data/margin.json'
import opacity from '@shared/tokens/data/opacity.json'
import padding from '@shared/tokens/data/padding.json'
import radius from '@shared/tokens/data/radius.json'
import scale from '@shared/tokens/data/scale.json'
import screen from '@shared/tokens/data/screen.json'
import shadow from '@shared/tokens/data/shadow.json'
import text from '@shared/tokens/data/text.json'

const pCx = classNames.bind(pStyles)
const tokens = [border, color, gap, margin, opacity, padding, radius, scale, screen, shadow, text]

const Component: React.FC = () => {
  return (
    <div className={pCx('magneto-ui-design-system__container')}>
      {tokens.map((token, index) => (
        <DesignSystemUtilityClassRenderer key={index} token={token} />
      ))}
    </div>
  )
}

export const DesignSystemUtilityClass = Component
