import { Meta, StoryObj } from '@storybook/react'
import MegaMenuCard from './MegaMenuCard.component'
import { Location } from '@constants/icons.constants'

const meta: Meta<typeof MegaMenuCard> = {
  title: 'Molecules/Mega Menu Card',
  component: MegaMenuCard
}

export default meta

type Story = StoryObj<typeof MegaMenuCard>

export const Default: Story = {
  args: {
    title: 'Cajero cafeteria',
    logo: 'https://www.magneto365.com/co/_next/image?url=https%3A%2F%2Fmedia.magneto365.com%2Fimage_assets%2Ffiles%2F7438%2Foriginal-team-video-marca-e-.jpg%3FExpires%3D1725321599%26Key-Pair-Id%3DK3F66W3VXZUW7N%26Signature%3DVTCFDCqrVCwRrD1lcsRbNvOqrqSjui7usPIKABquWvX5XmtovOETlZHET1wbYlLU-X9Xoj3jg06eFgheWALhQ17iAe2yISeyB5pOH2KaHY9jJ6DDSOamRmE1J5PmvzGK0syIrpdHaINzVlJsbSMM7pSppj4W~2n~DnMp7agcmk-ebpUEG4uz17bElccJREVIk9vLGRrVCO2togPRFzkdMfpt7GnpxIrDPD07lAmxoyTpgz~CesIv0ZaWfYlntOz5hXWK9o5gEVEP4boFjjjTAw4Z~lLQgwUTyvwlJ2YMxf~h-MrkgQ7YfkFHthUZDCk~KKveySxUvmxTUiE9-jfvfg__&w=256&q=75',
    quotas: 30
  }
}

export const NoImage: Story = {
  args: {
    title: 'Escritor de codigo',
    icon: Location,
    quotas: 70
  }
}
