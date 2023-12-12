import React from 'react'
import { Meta, StoryObj } from '@storybook/react'
import { Tabs } from './Tabs.component'
import { tabsProps } from '@constants/stories/descriptionBook.constants'

const meta: Meta<typeof Tabs> = {
  title: 'Atoms/Tabs',
  component: Tabs,
  args: {
    options: tabsProps,
    children: [<div key={1}>Hola soy un test</div>, <div key={2}>Hola soy un test 2</div>]
  }
}
export default meta

type Story = StoryObj<typeof Tabs>

export const Default: Story = {}
