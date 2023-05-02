import React from 'react'
import { Link } from '../../atoms/Link'
import { TabButton } from '../TabButton'
import { ITab } from './Tab.interface'
import { StyledInsideTab, StyledTabContainer } from './Tab.styles'

const Component: React.FC<ITab> = ({ href, label, childrenProps }) => {
  return (
    <StyledTabContainer>
      <TabButton link={childrenProps.link} text={childrenProps.text} size={childrenProps.size} />
      <StyledInsideTab>
        <Link type="link" href={href} label={label} />
      </StyledInsideTab>
    </StyledTabContainer>
  )
}

/**
 * Molecule UI for Tab
 */

export const Tab = Component
