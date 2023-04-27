import React from 'react'
import TabButton from './TabButton.component'
import { ComponentMeta, ComponentStory } from '@storybook/react'

export default {
  title: 'Molecules/Tab Button',
  component: TabButton,
  args: {
    buttonLink: '#',
    buttonText: 'Hello World',
    textSize: '11px'
  }
} as ComponentMeta<typeof TabButton>

const Template: ComponentStory<typeof TabButton> = (args) => <TabButton {...args} />

export const Default = Template.bind({})
