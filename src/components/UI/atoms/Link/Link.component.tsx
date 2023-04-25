import React from 'react'
import { ILinkProps } from './Link.interface'
import { Styledlink } from './Link.styles'

const Link: React.FC<ILinkProps> = ({ href, label, type = 'link', color, colorHover, colorVisited }) => (
  <Styledlink type={type} href={href} label={label} color={color} colorHover={colorHover} colorVisited={colorVisited}>
    {label}
  </Styledlink>
)

export default Link
