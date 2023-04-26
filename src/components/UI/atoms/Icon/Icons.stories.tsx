import React from 'react'
import Icon from './Icon.component'
import { Facebook } from 'iconsax-react'
import { ComponentMeta, ComponentStory } from '@storybook/react'

export default {
  title: 'Atoms/Icon',
  component: Icon,
  args: {
    Icon: Facebook,
    size: 20,
    color: '#2c2c2c',
    variant: 'Linear'
  },
  argTypes: {
    color: { control: 'color' }
  }
} as ComponentMeta<typeof Icon>

const Template: ComponentStory<typeof Icon> = (args) => <Icon {...args} />

export const Default = Template.bind({})

export const IconBold = Template.bind({})
IconBold.args = {
  variant: 'Bold'
}

export const IconBulk = Template.bind({})
IconBulk.args = {
  variant: 'Bulk'
}

export const IconBroken = Template.bind({})
IconBroken.args = {
  variant: 'Broken'
}

export const IconTwoTone = Template.bind({})
IconTwoTone.args = {
  variant: 'TwoTone'
}
