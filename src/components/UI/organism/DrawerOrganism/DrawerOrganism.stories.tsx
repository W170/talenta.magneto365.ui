import { Meta, StoryObj } from '@storybook/react'
import { DrawerOrganims } from './DrawerOrganism.component'
import {
  ButtonsProps,
  ButtonsProps2,
  IsoLogoMagneto,
  ListButton,
  ListIcon,
  LogoMagneto,
  MenuList
} from '../../../../constants/stories.constants'

const listMenuProps = {
  menuList: MenuList,
  urlParam: 'empleos-por-empresa'
}

const headerProps = {
  alt: 'Logo Magneto',
  logoSize: 100,
  spacing: 20,
  isoTypeSize: 30,
  logo: LogoMagneto,
  isoType: IsoLogoMagneto,
  listButton: ListButton
}

const meta: Meta<typeof DrawerOrganims> = {
  title: 'Organism/Drawer',
  component: DrawerOrganims,
  tags: ['autodocs'],
  args: {
    listIcon: ListIcon,
    buttonsProps: ButtonsProps,
    buttonsProps2: ButtonsProps2,
    headerProps: headerProps,
    listMenuProps: listMenuProps
  },
  argTypes: {}
}

export default meta

type Story = StoryObj<typeof DrawerOrganims>

export const Default: Story = {}
