import styled, { css } from 'styled-components'
import { IHeaderTabs } from './HeaderTabs.interface'

const addDivider = ({ addDivider = false }: IHeaderTabs) => {
  if (addDivider) {
    return css`
      border-right: 1px solid ${(props) => props.theme.colors.disabledColors.gray2};
      margin-right: 8px;
      padding-right: 8px;
    `
  }
}

export const withStyles = (Component: React.FC<IHeaderTabs>): React.FC<IHeaderTabs> => {
  return styled(Component)`
    display: flex;
    gap: 10px;

    ${(props) => addDivider(props)}
  `
}
