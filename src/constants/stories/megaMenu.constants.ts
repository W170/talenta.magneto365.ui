import { IMegaMenuTab } from '@components/UI/atoms/MegaMenuTab/MegaMenuTab.interface'
import { IMegaMenuSocialHeader } from '@components/UI/organism/MegaMenuSocialHeader'
import { HeadsetBlackOutline, QuestionCircle } from '@constants/icons.constants'

export const megaMenuTabs: IMegaMenuTab[] = [
  { label: 'Personas', selected: false },
  { label: 'Negocios y pymes', selected: true },
  { label: 'Corporativos', selected: false }
]

export const megaMenuSocialHeader: IMegaMenuSocialHeader = {
  tabs: {
    tabs: megaMenuTabs
  },
  blog: {
    text: 'Blog',
    url: 'https://www.magneto365.com/es/blog'
  },
  helpOptions: [
    {
      icon: QuestionCircle,
      label: 'Preguntas frecuentes',
      url: 'https://www.magneto365.com/es/blog'
    },
    {
      icon: HeadsetBlackOutline,
      label: 'Soporte',
      url: 'https://www.magneto365.com/es/blog'
    }
  ]
}
