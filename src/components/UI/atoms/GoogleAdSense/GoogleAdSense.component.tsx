import React, { useEffect } from 'react'
import { IAd } from './AdSense.interface'
import { sizeMap } from '@constants/googleAdSense.constants'

/**
 * Google AdSense component
 */
const Component: React.FC<IAd> = ({ size, style, className, ...props }) => {
  const sizeStyles = size ? sizeMap[size] : {}

  useEffect(() => {
    const adsbygoogle = (window as unknown as Record<string, unknown>).adsbygoogle || []
    ;(adsbygoogle as unknown[]).push({})
  }, [])

  return <ins className={`adsbygoogle ${className ?? ''}`} style={{ ...sizeStyles, ...style }} {...props} />
}

export const GoogleAdSense = Component
