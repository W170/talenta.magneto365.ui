import { IMegaMenuTab } from '@components/UI/atoms/MegaMenuTab/MegaMenuTab.interface'
import { IMegaMenuCard } from '@components/UI/molecules'
import { IMegaMenuCards } from '@components/UI/organism'

import {
  IMegaMenuJobs,
  IMegaMenuMainHeader,
  IMegaMenuSocialHeader
} from '@components/UI/template/MegaMenu/MegaMenuContext.interface'
import {
  AllJobs,
  ArchiveTick,
  ArrowDown2,
  ArrowLeft2,
  Bell,
  DocumentText,
  HeadsetBlackOutline,
  MessageQuestion,
  QuestionCircle,
  Setting2,
  SuggestedJobs,
  TaskSquare
} from '@constants/icons.constants'
import { Book, BriefcaseBlue, BuildingBlue, CourthouseBlue, LocationBlue } from '@constants/megaMenu.constants'
import { MobileSearchbarProps, SearchbarProps } from './headers.constants'
import { NoData, Waiting } from '@constants/gifs.constants'

export const staticMessages: { [key: string]: string } = {
  noData: NoData,
  waiting: Waiting
}

export const megaMenuSocialTabs: IMegaMenuTab[] = [
  { label: 'Personas', selected: true, url: 'https://www.magneto365.com/es/' },
  { label: 'Negocios y pymes', selected: false, url: 'https://www.magneto365.com/es/' },
  { label: 'Corporativos', selected: false, url: 'https://www.magneto365.com/es/' }
]

export const alphabet = 'ABCDEFGHIJKLMNÑOPQRSTUVWXYZ'

export const megaMenuJobImage: IMegaMenuCard = {
  title: 'Cajero cafeteria en la esquina del barrio de por mi casa',
  quotas: 30,
  onClick: () => {
    console.log()
  }
}

export const megaMenuJobIcon: IMegaMenuCard = {
  title: 'Cajero cafeteria',
  quotas: 30,
  onClick: () => {
    console.log()
  }
}

export const megaMenuJobsIcon = Array(36).fill(megaMenuJobIcon)
export const megaMenuJobsImage = Array(36).fill(megaMenuJobImage)

export const megaMenuMainHeader: IMegaMenuMainHeader = {
  homeUrl: 'http://localhost:6006/iframe.html?args=&id=template-megamenu--default&viewMode=story',
  searchBarProps: SearchbarProps,
  mobileSearchBarProps: MobileSearchbarProps,
  loginProps: {
    signUpText: 'Crear cuenta',
    loginUrl: 'https://www.magneto365.com/es/',
    onClickSignUp: async () => {
      console.log('prueba')
    },
    loginText: 'Iniciar sesion'
  },
  selectCountry: {
    onChange: (cvalue) => {
      console.log('country changed to: ', cvalue)
    },
    placeholder: 'Selecciona tu pais',
    selectList: [
      { id: 1, name: 'Colombia', img: 'https://flagcdn.com/w40/co.png' },
      { id: 2, name: 'Mexico', img: 'https://flagcdn.com/w40/mx.png' },
      { id: 3, name: 'Argentina', img: 'https://flagcdn.com/w40/ar.png' },
      { id: 4, name: 'Chile', img: 'https://flagcdn.com/w40/cl.png' },
      { id: 5, name: 'Peru', img: 'https://flagcdn.com/w40/pe.png' }
    ],
    currentFields: [{ id: 1, name: 'Colombia', img: 'https://flagcdn.com/w40/co.png' }]
  }
}

export const megaMenuSocialHeader: IMegaMenuSocialHeader = {
  tabs: megaMenuSocialTabs,
  helpAction: { label: 'Ayuda', icon: ArrowDown2 },
  blog: {
    label: 'Blog',
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
export const megaMenuHelpIcons = [QuestionCircle, HeadsetBlackOutline]
export const filterProps = {
  allActionText: 'Todas',
  onClickAction: () => {
    console.log('')
  },
  title: 'Filtrar por letra inicial:'
}

export const megaMenuCards: IMegaMenuCards = {
  jobs: megaMenuJobsImage,
  action: {
    label: 'Ver todos',
    url: 'https://www.magneto365.com/es'
  },
  title: 'Empleos por cargo',
  actionTitle: {
    label: 'Ver empleos por cargo',
    url: 'https://www.magneto365.com/es'
  },
  filterProps
}
export const megaMenuJobsIcons = [LocationBlue, CourthouseBlue, BriefcaseBlue, BuildingBlue]
export const megaMenuUserLoggedIcons = {
  allJobs: AllJobs,
  suggestedJobs: SuggestedJobs,
  savedJobs: ArchiveTick,
  inProcess: TaskSquare,
  resume: DocumentText,
  settings: Setting2,
  help: MessageQuestion,
  alerts: Bell
}
export const mobileSocialIcons = [Book, HeadsetBlackOutline, QuestionCircle]

export const megaMenuJobs: IMegaMenuJobs = {
  allJobsAction: { label: 'Ver todos los empleos', url: 'https://www.magneto365.com/co/empleos', icon: ArrowLeft2 },
  jobAction: { label: 'Empleo', icon: ArrowDown2 },
  tabs: [
    {
      label: 'Empleos por ubicacion',
      url: 'https://www.magneto365.com/es/blog'
    },
    {
      label: 'Empleos por sector laboral',
      url: 'https://www.magneto365.com/es/blog'
    },
    {
      label: 'Empleos por cargo',
      url: 'https://www.magneto365.com/es/blog'
    },
    {
      label: 'Empleos por empresa',
      url: 'https://www.magneto365.com/es/blog'
    }
  ]
}

export const megaMenuBreadcrumbs = {
  breadcrumbProps: {
    breadcrumbText: '/empleos/validador-de-negocios-de-vivienda-9a322b78-249e-4932-970e-7853eea97bc6',
    baseUrl: 'http://localhost:8080',
    queryParams: '?utm=google&utm_source=facebook&utm_medium=cueros',
    haveRedirect: true,
    breadCrumbFromServer: ['empleos', 'validador de negocios de vivienda 9a322b78 249e 4932 970e 7853eea97bc6'],
    urlFromServer: [
      'http://localhost:8060/co/empleos',
      'http://localhost:8060/co/validador-de-negocios-de-vivienda-9a322b78-249e-4932-970e-7853eea97bc6'
    ]
  },
  homeUrl: 'www.magneto365.com'
}
