import React from 'react'
import { Meta, StoryObj } from '@storybook/react'
import { Alert } from './'

const meta: Meta<typeof Alert> = {
  title: 'Molecules/Alert',
  component: Alert
}

export default meta

type Story = StoryObj<typeof Alert>

export const Default: Story = {
  args: {
    type: 'warning',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam faucibus orci vitae leo viverra tempor. Integer nec ligula ut nunc auctor finibus. Donec laoreet turpis enim, non ultrices velit tristique non. Aliquam a sodales ligula.',
    border: true,
    size: 800
  },
  render: (args) => <Alert {...args} />
}

export const CustomTextAlert: Story = {
  args: {
    type: 'error',
    customText: [
      { value: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', fontWeight: 'bold', lineBreak: true },
      { value: 'This text is in the second line', fontWeight: 'normal', lineBreak: false },
      { value: ', This text is next to the second line', fontWeight: 'lighter', lineBreak: false }
    ],
    border: true,
    size: 500
  },
  render: (args) => <Alert {...args} />
}
