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
    variant: 'Linear',
    hover: true
  },
  argTypes: {
    variant: {
      name: 'variant',
      description: 'Change icon style',
      control: 'select',
      options: ['Linear', 'Outline', 'Broken', 'Bold', 'Bulk', 'TwoTone']
    },
    size: {
      name: 'size',
      description: 'Change icon style',
      type: { name: 'number', required: false }
    },
    color: {
      description: 'Change icon color',
      control: 'color'
    },
    hover: {
      description: 'You can disable the hover animation'
    }
  }
} as ComponentMeta<typeof Icon>

const Template: ComponentStory<typeof Icon> = (args) => <Icon {...args} />

export const Default = Template.bind({})

export const DisabledHover = Template.bind({})
DisabledHover.args = {
  hover: false
}

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
