import { StoryObj, Meta } from '@storybook/react'
import { Loading } from './Loading.component'
import { IconProps } from '../Icon'
import { Refresh } from '../../../../constants/icons.constants'

const icon: IconProps = {
  icon: Refresh,
  hover: false
}

const meta: Meta<typeof Loading> = {
  title: 'Atoms/Loading',
  component: Loading,
  args: {
    loadingIcon: icon
  }
}

export default meta

type Story = StoryObj<typeof Loading>

export const Default: Story = {}
