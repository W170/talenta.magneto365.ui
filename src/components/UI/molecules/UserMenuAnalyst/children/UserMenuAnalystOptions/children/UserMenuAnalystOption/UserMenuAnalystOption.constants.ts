import React from 'react'
import { Default, Hover, Text } from './children'
import { EUserMenuAnalystOptionType, IUserMenuAnalystOptionCommonProps } from './UserMenuAnalystOption.interface'

type TOptionStyles = {
  [key in EUserMenuAnalystOptionType]: string[]
}

const optionTypesStyles: TOptionStyles = {
  [EUserMenuAnalystOptionType.BUTTON]: ['user-menu-analyst-option-default--button'],
  [EUserMenuAnalystOptionType.HOVER]: ['user-menu-analyst-option__object--hover'],
  [EUserMenuAnalystOptionType.UNDERLINE]: ['user-menu-analyst-option-default--underline'],
  [EUserMenuAnalystOptionType.TEXT]: ['user-menu-analyst-option__object--text']
}

export const getOptionTypeStyles = (type?: EUserMenuAnalystOptionType) => (type ? optionTypesStyles[type] : [])

type TOption = {
  [key in EUserMenuAnalystOptionType]: React.FC<IUserMenuAnalystOptionCommonProps>
}

const optionTypes: TOption = {
  [EUserMenuAnalystOptionType.BUTTON]: Default,
  [EUserMenuAnalystOptionType.HOVER]: Hover,
  [EUserMenuAnalystOptionType.UNDERLINE]: Default,
  [EUserMenuAnalystOptionType.TEXT]: Text
}

export const getOptionType = (type?: EUserMenuAnalystOptionType) => (type ? optionTypes[type] : Default)
