import React from 'react'
import { Meta, StoryObj } from '@storybook/react'
import { accountSelectDefaultProps } from '@constants/stories/accountSelect.constants'
import AccountSelect from './AccountSelect.component'

const meta: Meta<typeof AccountSelect> = {
  title: 'Molecules/Account Select',
  component: AccountSelect,
  args: { ...accountSelectDefaultProps },
  argTypes: {
    onSelectAccount: {
      description: 'Se ejecuta al elegir una cuenta de la lista (recibe el objeto de cuenta).',
      action: 'onSelectAccount'
    }
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: 360, padding: '24px', backgroundColor: '#F0F1F3' }}>
        <Story />
      </div>
    )
  ]
}

export default meta

type Story = StoryObj<typeof AccountSelect>

export const Default: Story = {}
