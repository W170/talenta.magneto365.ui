import { Meta, StoryObj } from '@storybook/react'
import LogoutJobsHeader from './LogoutJobsHeader.component'
import {
  MobileSearchbarProps,
  SearchbarProps,
  SignInProps,
  SignUpProps,
  brands,
  breadcrumbProps,
  ourBrandsText
} from '@constants/stories'

const meta: Meta<typeof LogoutJobsHeader> = {
  title: 'Organism/Logout Jobs Header',
  component: LogoutJobsHeader,
  args: {
    allJobsText: 'Todos los empleos',
    allJobsLink: '#',
    searchbar: SearchbarProps,
    mobileSearchbar: MobileSearchbarProps,
    signInLink: SignInProps,
    signUpButton: SignUpProps,
    breadcrumbProps: breadcrumbProps,
    homeUrl: '/home',
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
}

export default meta

type Story = StoryObj<typeof LogoutJobsHeader>

export const Default: Story = {}
