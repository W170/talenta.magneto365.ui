import { IMegaMenuCard } from '@components/UI/atoms'
import { IMegaMenuTab } from '@components/UI/atoms/MegaMenuTab/MegaMenuTab.interface'
import { IMegaMenuCards } from '@components/UI/molecules/MegaMenuCards/MegaMenuCards.interface'
import { IMegaMenuJobs, IMegaMenuSocialHeader } from '@components/UI/template/MegaMenu/MegaMenuContext.interface'
import { ArrowDown2, ArrowLeft2, HeadsetBlackOutline, QuestionCircle } from '@constants/icons.constants'
import {
  BriefcaseBlue,
  BriefcaseGrey,
  BuildingBlue,
  BuildingGrey,
  CourthouseBlue,
  CourthouseGrey,
  LocationBlue,
  LocationGrey
} from '@constants/megaMenu.constants'

export const megaMenuSocialTabs: IMegaMenuTab[] = [
  { label: 'Personas', selected: true, url: 'https://www.magneto365.com/es/' },
  { label: 'Negocios y pymes', selected: false, url: 'https://www.magneto365.com/es/' },
  { label: 'Corporativos', selected: false, url: 'https://www.magneto365.com/es/' }
]

export const megaMenuJobImage: IMegaMenuCard = {
  title: 'Cajero cafeteria',
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

export const megaMenuJobsIcon = Array(40).fill(megaMenuJobIcon)
export const megaMenuJobsImage = Array(40).fill(megaMenuJobImage)

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
  }
}
export const megaMenuJobsIcons = [
  [LocationBlue, LocationGrey],
  [CourthouseBlue, CourthouseGrey],
  [BriefcaseBlue, BriefcaseGrey],
  [BuildingBlue, BuildingGrey]
]

export const megaMenuJobs: IMegaMenuJobs = {
  allJobsAction: { label: 'Ver todos los empleos', url: 'https://www.magneto365.com/co/empleos', icon: ArrowLeft2 },
  jobAction: { label: 'Empleo', icon: ArrowDown2 },
  tabs: [
    {
      label: 'Empleos por ubicacion'
    },
    {
      label: 'Empleos por sector laboral'
    },
    {
      label: 'Empleos por cargo'
    },
    {
      label: 'Empleos por empresa'
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
