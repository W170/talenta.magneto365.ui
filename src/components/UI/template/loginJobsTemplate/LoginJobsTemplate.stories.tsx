import { Meta, StoryObj } from '@storybook/react'
import LoginJobsTemplate from './LoginJobsTemplate.component'

import {
  MobileSearchbarProps,
  SearchbarProps,
  ListIcon,
  AvatarProps,
  listMenuUserPropsNot1440
} from '../../../../constants/stories.constants'
import { IListMenuItems, MenuItemInfo } from '../../molecules'
import { brands, ourBrandsText, breadcrumbProps } from '../../../../constants/stories.constants'

const LoginJobsHeaderProps = {
  profileImage: AvatarProps,
  listMenuUserProps: listMenuUserPropsNot1440,
  searchbar: SearchbarProps,
  mobileSearchbar: MobileSearchbarProps,
  breadcrumbProps: breadcrumbProps,
  companyUrl: '/empleos/company',
  homeUrl: '/home',
  companyLogo: 'https://www.magneto365.com/wp-content/uploads/2022/07/grupo-exito.png',
  companySlug: 'grupo-exito',
  gif: 'https://www.magneto365.com/co/_next/image?url=https%3A%2F%2Fmedia.magneto365.com%2Fimage_assets%2Ffiles%2F3876%2Foriginal-animacion_header_1-.gif%3FExpires%3D1689724799%26Key-Pair-Id%3DK3F66W3VXZUW7N%26Signature%3DLSWrAiRiE97D8g9OwZsFSYn9tK9T-neI-jVVbQVzHfKwSoAkXVJpd42p1bJmEDSZDO3UG-ma~6kHjpfG7KatCQ7dynkGGzfE2b-ZzQ0DnSCy0sd-bpGxIX35zWKdTXJoqpysU0UM827paIQoCCyc0uFc30wUQuGEdWILuC523w2U7Bui7Ku2hccVcHEvVb~sVn4uqX6UsBzeVndnlwpJx9NffWxsa2vwt3Ci9ZS1hzDvOBR2G5BY8~adm7Qxhw-0FNkGvlsmcUx4JCNdZpKFRCrsP1ClYw3QqnvKY1YlqWg86~d-3YBTd1BLEy4l4gAXFDThBPlHwf9dKF9qvibnag__&w=128&q=75',
  brandMenuProps: {
    brandsProps: {
      brands,
      ourBrandsText
    },
    companyLogo: 'https://www.magneto365.com/wp-content/uploads/2022/07/grupo-exito.png',
    companySlug: 'grupo-exito',
    companyUrl: '#'
  }
}

const MenuList: MenuItemInfo[] = [
  { text: 'Ver todos los empleos', url: '#', slug: '/todos-los-empleos' },
  { text: 'Empleos', url: '#', slug: '/empleos' }
]

const listMenuProps: IListMenuItems = {
  menuList: MenuList,
  urlParam: '/empleos'
}

const meta: Meta<typeof LoginJobsTemplate> = {
  title: 'Template/Login Jobs',
  component: LoginJobsTemplate,
  tags: ['autodocs'],
  args: {
    homeUrl: '/home',
    LoginJobsHeaderProps,
    listMenuProps,
    ListIcon
  }
}

export default meta

type Story = StoryObj<typeof LoginJobsTemplate>

export const Default: Story = {}
