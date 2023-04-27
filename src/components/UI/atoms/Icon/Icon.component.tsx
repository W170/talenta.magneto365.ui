import React from 'react'
import { Link21 } from 'iconsax-react'
import { IconProps } from './Icon.interface'

const IconItem: React.FC<IconProps> = ({ Icon = Link21, size = 20, color = '#2c2c2c', variant = 'Linear' }) => {
  return <Icon variant={variant} size={size} color={color} />
}

export default IconItem
