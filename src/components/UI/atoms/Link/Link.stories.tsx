import React from 'react'
import Link from './Link.component'
import { ComponentMeta, ComponentStory } from '@storybook/react'

export default {
  title: 'Atoms/Link',
  component: Link,
  args: {
    type: 'link',
    label: 'Hello world'
  },
  argTypes: {
    color: { control: 'color' }
  }
} as ComponentMeta<typeof Link>

const Template: ComponentStory<typeof Link> = (args) => <Link {...args} />

export const Anchor = Template.bind({})

export const Button = Template.bind({})
Button.args = {
  type: 'button'
}
