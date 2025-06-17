import React from 'react'
import { Meta, StoryObj } from '@storybook/react'
import { ArrowDownWhite } from '../../../../constants/icons.constants'
import { Collapse } from './Collapse.component'
import { Typography, IconItem } from '../index'

const meta: Meta<typeof Collapse> = {
  title: 'Atoms/Collapse',
  component: Collapse,
  render: () => (
    <Collapse
      style={{ backgroundColor: '#1a324c', padding: '10px', borderRadius: '5px' }}
      onChangeOpen={(open) => console.log(open)}
      defaultOpen
    >
      <Collapse.Header style={{ justifyContent: 'space-between' }}>
        <Typography.Text color="grey-50">Header</Typography.Text>
        <Collapse.Toggler>
          <IconItem icon={ArrowDownWhite} />
        </Collapse.Toggler>
      </Collapse.Header>
      <Collapse.Body>
        <div style={{ padding: '10px' }}>
          <Typography.Text color="grey-50">Body</Typography.Text>
        </div>
      </Collapse.Body>
    </Collapse>
  )
}

export default meta

type Story = StoryObj<typeof Collapse>

export const Default: Story = {}
