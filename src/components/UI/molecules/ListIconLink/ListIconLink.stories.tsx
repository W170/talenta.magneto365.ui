import React from 'react'
import ListIconLink from './ListIconLink.component'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Facebook, Instagram, Link21 } from 'iconsax-react'

const ListIcon = [
  { Icon: Facebook, url: '' },
  { Icon: Instagram, url: '' },
  { Icon: Link21, url: '' }
]

export default {
  title: 'Molecules/ListIconLink',
  component: ListIconLink,
  args: {
    listIcon: ListIcon,
    direction: 'row',
    spacing: 5,
    variant: 'Linear',
    size: 20
  },
  argTypes: {
    color: { control: 'color' }
  }
} as ComponentMeta<typeof ListIconLink>

const Template: ComponentStory<typeof ListIconLink> = (args) => <ListIconLink {...args} />

export const Default = Template.bind({})

export const Vertical = Template.bind({})
Vertical.args = {
  direction: 'column'
}

export const Spacing = Template.bind({})
Spacing.args = {
  spacing: 20
}

export const SetColors = Template.bind({})
SetColors.args = {
  color: 'red'
}

export const ChangeStyle = Template.bind({})
ChangeStyle.args = {
  variant: 'TwoTone'
}
