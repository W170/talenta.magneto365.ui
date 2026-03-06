import React from 'react'
import { Meta, StoryObj } from '@storybook/react'
import { Checkbox } from './Checkbox.component'
import { withControlField } from '../../../../shared/utils/storybook/withControlField.hoc'

const meta: Meta<typeof Checkbox> = {
  title: 'Atoms/Checkbox',
  component: Checkbox,
  args: {
    children: 'Example'
  }
}

export default meta

type Story = StoryObj<typeof Checkbox>

const CheckboxWithControllerField = withControlField(Checkbox)

export const Default: Story = {
  args: {
    display: 'inline',
    type: 'box'
  },
  render: (props) => {
    return <CheckboxWithControllerField {...props} valueNameProp="checked" />
  }
}

export const CheckboxBackground: Story = {
  name: 'Checkbox with Background and display block',
  args: {
    display: 'block',
    type: 'background'
  },
  render: (props) => {
    return <CheckboxWithControllerField {...props} valueNameProp="checked" />
  }
}
