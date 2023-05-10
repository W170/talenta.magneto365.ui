import React from 'react'
import { IDivider } from './Divider.interface'
import { withStyles } from './Divider.styles'

const Component: React.FC<IDivider> = ({ className }) => <div className={className} />

/**
 * Atom UI Divider Component
 */
export const Divider = withStyles(Component)
