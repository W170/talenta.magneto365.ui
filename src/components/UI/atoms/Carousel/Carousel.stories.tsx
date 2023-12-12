import React from 'react'
import { Meta, StoryObj } from '@storybook/react'
import { Carousel } from './Carousel.component'

const meta: Meta<typeof Carousel> = {
  title: 'Atoms/Carousel',
  component: Carousel,
  tags: ['autodocs'],
  args: {},
  argTypes: {
    children: [<div key={1}>image</div>, <div key={2}>image 2</div>]
  }
}

export default meta

type Story = StoryObj<typeof Carousel>

export const Default: Story = {}
