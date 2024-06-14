import React from 'react'
import { Meta, StoryObj } from '@storybook/react'
import { Text } from '.'

const meta: Meta<typeof Text> = {
  title: 'Atoms/Text',
  component: Text
}

export default meta

type Story = StoryObj<typeof Text>

export const Default: Story = {
  args: {
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce dolor diam, commodo ac laoreet et, pellentesque ac lacus. Vestibulum placerat placerat purus at imperdiet. Mauris iaculis urna sit amet nulla scelerisque mattis.'
  },
  render: (args) => <Text {...args} />
}

export const CustomText: Story = {
  args: {
    customText: [
      { value: 'Loremp Ipsum', fontWeight: 'bold', lineBreak: false },
      { value: ', this is two Loremp Ipsum', fontWeight: 'lighter', lineBreak: true },
      { value: 'this is the second text', fontWeight: 'normal', lineBreak: false }
    ]
  },
  render: (args) => <Text {...args} />
}
