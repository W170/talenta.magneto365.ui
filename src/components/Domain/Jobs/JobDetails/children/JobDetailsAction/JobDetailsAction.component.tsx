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
  <button {...rest} className={cx('action', `action--${variant}`, { 'action--rounded': rounded }, rest.className)}>
    {icon && <IconItem icon={iconJobDetailsAction[icon]} size={iconSize ?? 18} alt={iconAlt ?? 'icon'} />}
    {children}
  </button>
)

const Link: React.FC<IJobDetailsAction.Link> = ({ children, icon, iconSize, iconAlt, variant, rounded, ...rest }) => (
  <a {...rest} className={cx('action', `action--${variant}`, { 'action--rounded': rounded })}>
    {icon && <IconItem icon={iconJobDetailsAction[icon]} size={iconSize ?? 18} alt={iconAlt ?? 'icon'} />}
    {children}
  </a>
)

const SharePopover: React.FC<IJobDetailsAction.SharePopover> = ({
  icon,
  iconPopoverSize,
  variant,
  rounded,
  ...rest
}) => (
  <SharePopoverMolecule
    {...rest}
    classNameButton={cx('action', `action--${variant}`, { 'action--rounded': rounded })}
    iconPopoverSize={iconPopoverSize ?? 18}
    iconPopover={icon && iconJobDetailsAction[icon]}
  />
)

export const JobDetailsAction = { Button, Link, SharePopover }
