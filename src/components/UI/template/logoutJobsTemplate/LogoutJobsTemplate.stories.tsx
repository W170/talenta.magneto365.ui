import { Meta, StoryObj } from '@storybook/react'
import LogoutJobsTemplate from './LogoutJobsTemplate.component'
import {
  MobileSearchbarProps,
  SearchbarProps,
  SignInProps,
  SignUpProps,
  ListIcon
} from '../../../../constants/stories.constants'
import { IListMenuItems, MenuItemInfo } from '../../molecules'

const LogoutJobsHeaderProps = {
  companyUrl: '/empleos/company',
  searchbar: SearchbarProps,
  mobileSearchbar: MobileSearchbarProps,
  signInLink: SignInProps,
  signUpButton: SignUpProps,
  breadcrumbsText: '/empleos',
  homeUrl: '/home',
  companyLogo:
    'https://www.magneto365.com/co/_next/image?url=https%3A%2F%2Fmedia.magneto365.com%2Fimage_assets%2Ffiles%2F16757%2Foriginal-Logo-cueros-velez-.png%3FExpires%3D1689811199%26Key-Pair-Id%3DK3F66W3VXZUW7N%26Signature%3DV44PescBCWesSBP6mbKQnR-etQJ6dNV~MABjGEybuywOZA9j~eH84IYdIpTPeJVek7sI1zqFoDYbUm8fuMqoFWlOBv3DplZHNQitvDKmsujOQiPYriTnw3842nvhd~CGd2XizcRqcISTWHEnrQwY37eq5sTWrg7uVSUibb3GhS1QHVAcTS3DIW3ux6n5JZ75YiS3FVcOGl8qh7sdq0kbflyLIPBeUNr9c0c01ncAP-XLJ1ggOv-0hMKE0tDetqiEATUcfMJX3eXZZXJ85FylD5bzTsilIRB~cuXLo8JZQjLDxKIwNWYVyWMsVgO6RKujfJoTKAxwQM6RKNb-h~OjpA__&w=128&q=75',
  companySlug: 'grupo-exito',
  gif: 'https://www.magneto365.com/co/_next/image?url=https%3A%2F%2Fmedia.magneto365.com%2Fimage_assets%2Ffiles%2F3876%2Foriginal-animacion_header_1-.gif%3FExpires%3D1689724799%26Key-Pair-Id%3DK3F66W3VXZUW7N%26Signature%3DLSWrAiRiE97D8g9OwZsFSYn9tK9T-neI-jVVbQVzHfKwSoAkXVJpd42p1bJmEDSZDO3UG-ma~6kHjpfG7KatCQ7dynkGGzfE2b-ZzQ0DnSCy0sd-bpGxIX35zWKdTXJoqpysU0UM827paIQoCCyc0uFc30wUQuGEdWILuC523w2U7Bui7Ku2hccVcHEvVb~sVn4uqX6UsBzeVndnlwpJx9NffWxsa2vwt3Ci9ZS1hzDvOBR2G5BY8~adm7Qxhw-0FNkGvlsmcUx4JCNdZpKFRCrsP1ClYw3QqnvKY1YlqWg86~d-3YBTd1BLEy4l4gAXFDThBPlHwf9dKF9qvibnag__&w=128&q=75'
}

const MenuList: MenuItemInfo[] = [
  { text: 'Ver todos los empleos', url: '#', slug: '/todos-los-empleos' },
  { text: 'Empleos', url: '#', slug: '/empleos' }
]

const listMenuProps: IListMenuItems = {
  menuList: MenuList,
  urlParam: '/empleos'
}

const meta: Meta<typeof LogoutJobsTemplate> = {
  title: 'Template/Logout Jobs',
  component: LogoutJobsTemplate,
  tags: ['autodocs'],
  args: {
    homeUrl: '/home',
    logoutJobsHeaderProps: LogoutJobsHeaderProps,
    listMenuProps,
    ListIcon
  }
}

export default meta

type Story = StoryObj<typeof LogoutJobsTemplate>

export const Default: Story = {}
