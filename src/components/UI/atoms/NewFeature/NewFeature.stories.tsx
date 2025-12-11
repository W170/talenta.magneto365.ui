import React from 'react'
import { Meta, StoryObj } from '@storybook/react'
import { NewFeature } from './NewFeature.component'

const meta: Meta<typeof NewFeature> = {
  title: 'Atoms/New Feature',
  component: NewFeature,
  args: {
    feature: 'test',
    children: 'NUEVO'
  },
  argTypes: {
    onFail: { action: 'onFail triggered' }
  }
}

export default meta

type Story = StoryObj<typeof NewFeature>

export const Default: Story = {
  decorators: [
    (Story, context) => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      //@ts-ignore
      window.__magneto_features = {
        test: {
          expires: {
            year: 2077,
            month: 1, //january
            day: 1
          }
        }
      }
      return <Story {...context} />
    }
  ]
}

export const Expired: Story = {
  decorators: [
    (Story, context) => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      //@ts-ignore
      window.__magneto_features = {
        test: {
          expires: {
            year: 2000,
            month: 1, //january
            day: 1
          }
        }
      }
      return <Story {...context} />
    }
  ]
}
