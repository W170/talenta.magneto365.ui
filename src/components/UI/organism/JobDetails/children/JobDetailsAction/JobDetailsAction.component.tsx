import React from 'react'
import { classNames } from '@shared/utils/common'
import { SharePopover as SharePopoverMolecule } from '@components/UI/molecules'
import { IJobDetailsAction } from './JobDetailsAction.interface'
import styles from './JobDetailsAction.module.scss'
import { iconJobDetailsAction } from '@constants/jobDetails.constants'
import { IconItem } from '@components/UI/atoms'

const cx = classNames.bind(styles)

const Button: React.FC<IJobDetailsAction.Button> = ({
  icon,
  children,
  variant = 'transparent',
  rounded = false,
  iconSize,
  iconAlt,
  ...rest
}) => (
  <button className={cx('action', `action--${variant}`, { 'action--rounded': rounded })} {...rest}>
    {icon && <IconItem icon={iconJobDetailsAction[icon]} size={iconSize ?? 18} alt={iconAlt ?? 'icon'} />}
    {children}
  </button>
)

const Link: React.FC<IJobDetailsAction.Link> = ({ children, icon, iconSize, iconAlt, ...rest }) => (
  <a className={cx('action')} {...rest}>
    {icon && <IconItem icon={iconJobDetailsAction[icon]} size={iconSize ?? 18} alt={iconAlt ?? 'icon'} />}
    {children}
  </a>
)

const SharePopover: React.FC<IJobDetailsAction.SharePopover> = ({ iconPopover, iconSize, ...rest }) => (
  <SharePopoverMolecule
    {...rest}
    classNameButton={cx('action')}
    iconPopoverSize={iconSize ?? 18}
    iconPopover={iconPopover && iconJobDetailsAction[iconPopover]}
  />
)

export const JobDetailsAction = { Button, Link, SharePopover }
