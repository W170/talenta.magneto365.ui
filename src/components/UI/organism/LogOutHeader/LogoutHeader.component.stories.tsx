import { Meta, StoryObj } from '@storybook/react'
import { LogoutHeader } from './LogoutHeader.component'
import {
  BreadcrumbProps,
  LinkProps,
  LogoProps,
  MainButtonProps,
  SearchbarProps,
  TabProps,
  iconProps
} from '../../../../constants/stories.constants'

const meta: Meta<typeof LogoutHeader> = {
  title: 'Organism/LogoutHeader',
  component: LogoutHeader,
  args: {
    tabProps: TabProps,
    iconProps: iconProps,
    logoProps: LogoProps,
    searchbarProps: SearchbarProps,
    mainButtonProps: MainButtonProps,
    linkProps: LinkProps,
    breadcrumbsProps: BreadcrumbProps
  }
}

export default meta

type Story = StoryObj<typeof LogoutHeader>

export const Default: Story = {}
