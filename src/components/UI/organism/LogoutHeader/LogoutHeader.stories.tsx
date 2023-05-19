import { Meta, StoryObj } from '@storybook/react'
import { LogoutHeader } from './LogoutHeader.component'
import {
  BreadcrumbProps,
  LinkProps,
  LogoProps,
  MainButtonProps,
  OpenButtonProps,
  MobileSearchbarProps,
  SearchbarProps,
  MenuButtonProps,
  TabProps
} from '../../../../constants/stories.constants'

const meta: Meta<typeof LogoutHeader> = {
  title: 'Organism/LogoutHeader',
  component: LogoutHeader,
  args: {
    openProps: OpenButtonProps,
    tabProps: TabProps,
    menuProps: MenuButtonProps,
    logoProps: LogoProps,
    mobileProps: MobileSearchbarProps,
    searchbarProps: SearchbarProps,
    mainButtonProps: MainButtonProps,
    linkProps: LinkProps,
    breadcrumbsProps: BreadcrumbProps
  }
}

export default meta

type Story = StoryObj<typeof LogoutHeader>

export const Default: Story = {}
