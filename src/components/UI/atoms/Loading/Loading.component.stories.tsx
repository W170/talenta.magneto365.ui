import { StoryObj, Meta } from '@storybook/react'
import { Loading } from './Loading.component'
import { IconProps } from '../Icon'
import { Refresh } from 'iconsax-react'

const Icon: IconProps = {
  Icon: Refresh,
  hover: false
}

const meta: Meta<typeof Loading> = {
  title: 'Atoms/Loading',
  component: Loading,
  args: {
    loadingIcon: Icon
  }
}

export default meta

type Story = StoryObj<typeof Loading>

export const Default: Story = {}
