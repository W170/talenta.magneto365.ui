import React from 'react'
import { ERadioType, IRadioCommonProps } from './Radio.interface'
import { RadioButton, RadioDefault } from './children'

type TRadio = {
  [key in ERadioType]: React.FC<IRadioCommonProps>
}

const radioTypes: TRadio = {
  [ERadioType.radio]: RadioDefault,
  [ERadioType.button]: RadioButton
}

export const getRadioComponent = (type: ERadioType) => radioTypes[type]
