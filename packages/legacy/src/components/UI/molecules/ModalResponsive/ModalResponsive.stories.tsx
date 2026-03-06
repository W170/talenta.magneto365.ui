import React from 'react'
import { Meta, StoryObj } from '@storybook/react'
import { ModalResponsive } from './ModalResponsive.component'

const meta: Meta<typeof ModalResponsive> = {
  title: 'Molecules/Modal Responsive',
  component: ModalResponsive,
  args: {
    open: true,
    children: (
      <div>
        <p>HELLO MAGNETO!</p>
      </div>
    )
  }
}

export default meta

type Story = StoryObj<typeof ModalResponsive>

export const Default: Story = {}
