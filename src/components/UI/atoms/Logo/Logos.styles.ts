import { ILogoComponent } from './Logo.interface'
import styled, { css } from 'styled-components'

const logoSize = ({ isoView }: ILogoComponent) => {
  if (isoView) {
    return css<ILogoComponent>`
      ${(props) => props.isoSize}px
    `
  } else {
    return css<ILogoComponent>`
      ${(props) => props.logoSize}px
    `
  }
}

export const withStyles = (c: React.FC<ILogoComponent>): React.FC<ILogoComponent> => styled(c)`
  img {
    width: ${(props) => logoSize(props)};
  }
`
