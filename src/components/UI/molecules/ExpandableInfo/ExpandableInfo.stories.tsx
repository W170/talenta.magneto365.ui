import React from 'react'
import { Meta, StoryObj } from '@storybook/react'
import { ExpandableInfo } from './index'
import {
  expandableInfoProps,
  expandableInfoPropsVariantBlue,
  expandableInfoPropsWithMessage,
  expandableInfoPropsSizeSmall
} from '@constants/stories'

const meta: Meta<typeof ExpandableInfo> = {
  title: 'Molecules/Expandable Info',
  component: ExpandableInfo,
  args: { ...expandableInfoProps },
  decorators: [
    (Story) => (
      <div style={{ height: '300px', display: 'flex' }}>
        <div style={{ marginTop: 'auto', width: '100%' }}>
          <Story />
        </div>
      </div>
    )
  ]
}

export default meta

type Story = StoryObj<typeof ExpandableInfo>

export const Default: Story = {}

export const VariantBlue: Story = {
  args: { ...expandableInfoPropsVariantBlue }
}

export const WithMessage: Story = {
  args: { ...expandableInfoPropsWithMessage }
}

export const SizeSmall: Story = {
  args: { ...expandableInfoPropsSizeSmall },
  decorators: [
    (Story) => (
      <div style={{ height: '300px', display: 'flex' }}>
        <div style={{ width: '100%' }}>
          <Story />
        </div>
      </div>
    )
  ]
}
