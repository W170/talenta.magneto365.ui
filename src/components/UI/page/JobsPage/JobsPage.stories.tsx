import { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import { SearchItem } from '@components/UI/atoms'
import JobsPage from './JobsPage.component'

import { FacebookBlue, LinkedInBlue, SMSBlue, ShareBlue, TwitterBlue, WhatsAppColor } from '@constants/icons.constants'

import {
  CompanyLogo,
  MagnetoResolutionProps,
  RightsReservedProps,
  appliedOptionsBySearchRenderType,
  listMenuText,
  optionsFilterOrderBy,
  searchList,
  vacants
} from '@constants/stories.constants'

import { storiesFilters } from '@constants'

import {
  IFilter,
  IGetOptionsOnSearchProps,
  ISearchRenderTypeOption,
  ISetIsApplied,
  ISideFilter,
  IUnApplyWithChild
} from '@components/UI/template'

const onClickOne = () => {
  console.log('1')
}

const onClickTwo = () => {
  console.log(2)
}

const onClick = () => {
  //
}

const jobDetailsDrawer = {
  jobCompanyLogoProps: {
    jobCompanyLogoProps: {
      companyLogoImg: CompanyLogo,
      alt: 'Grupo Exito Logo'
    },
    jobHeaderProps: {
      jobTitle: 'Comunicador Audiovisual',
      jobSubtitle: 'Grupo Exito'
    }
  },
  jobActionsProps: {
    actionButtonText: 'Aplicar',
    actionsButtonEvents: [onClickOne, onClickTwo],
    actionsAnchorLinks: ['link1', 'link2'],
    onHandleClick: () => {
      //
    }
  },
  jobDetailsProps: [
    'Hace 10 días',
    '4 cupos, 256 aplicaron',
    '2 años de experiencia, profesional',
    '$ 2.000.000 a $ 3.000.000',
    'Bello - Copacabana - Itagui - La Estrella'
  ],
  jobDetailCardProps: {
    jobDetailCardText:
      '<h1>¡Trabaja con el Grupo Éxito!</h1><br /><p>Importante no estar en ningun otro proceso con el Grupo Éxito. Buscamos personas como tú,  que deseen trabajar en el cargo auxiliar polivalente.</p> <h1>¿Qué necesitas?</h1><br /><p>Mínimo 2 años de experiencia, ser profesional.<br /><br />Disponibilidad de tiempo para laborar del  21 de Enero 2022  al 17 de Julio de 2023 turnos de 6  horas diarias, con posibilidad  de continuar en otras temporadas o seguir en cargos fijos.<br /><br />Estar cursando los últimos grados de la carrera o haberla finalizado.</p><h1>¿Qué te ofrecemos?</h1><br /><p>Salario entre $2’000.000 a $3’000.000 aproximadamente.</p> <h1>¡Aplica y no te pierdas esta oportunidad!</h1><br /><p>Si está interesado(a) y cumple con los requisitos debe estar pendiente de su correo electrónico y número de celular personal para envío de pruebas psicotécnicas y citación a video entrevista. FAVOR actualice esta información en la plataforma si cambió de número o el correo no es suyo o no puede ingresar.</p>'
  },
  jobSkillsCardProps: {
    jobSkillCardHeader: 'Habilidades',
    jobSkills: [
      { skillText: 'Habilidades comerciales', skillLevel: 'Intermediate' as const },
      { skillText: 'Capacidad de negociación', skillLevel: 'Advanced' as const },
      { skillText: 'Conocimiento de microfinanzas', skillLevel: 'Basic' as const }
    ]
  },
  jobApplyCardProps: {
    jobApplyCardHeader: 'Requisitos para aplicar a la vacante:',
    jobApplyCardReqs: [
      { jobRequirementTitle: 'Experiencia:', jobRequirementInfo: ' 1 año de experiencia' },
      { jobRequirementTitle: 'Nivel de estudios:', jobRequirementInfo: ' Especialización / Maestría' },
      { jobRequirementTitle: 'Ciudad de residencia:', jobRequirementInfo: ' Planadas' },
      { jobRequirementTitle: 'Salario:', jobRequirementInfo: ` $2’100.000` }
    ],
    jobApplyButtonText: 'Aplicar',
    onHandlerClick: () => {
      //
    }
  },
  jobFooterCardProps: {
    jobFooterCompanyImg: CompanyLogo,
    jobFooterHeader: 'Compartir vacante en:',
    jobFooterLinks: [
      { icon: FacebookBlue, url: '' },
      { icon: WhatsAppColor, url: '' },
      { icon: LinkedInBlue, url: '' },
      { icon: TwitterBlue, url: '' },
      { icon: SMSBlue, url: '' },
      { icon: ShareBlue, url: '' }
    ]
  }
}

const mobileJobDetailsDrawer = {
  jobCompanyLogoProps: {
    jobCompanyLogoProps: {
      companyLogoImg: CompanyLogo,
      alt: 'Grupo Exito Logo'
    },
    jobHeaderProps: {
      jobTitle: 'Comunicador Audiovisual',
      jobSubtitle: 'Grupo Exito'
    }
  },
  jobDetailsHeaderText: 'Volver',
  jobDetailsProps: [
    'Hace 10 días',
    '4 cupos, 256 aplicaron',
    '2 años de experiencia, profesional',
    '$ 2.000.000 a $ 3.000.000',
    'Bello - Copacabana - Itagui - La Estrella'
  ],
  jobDetailCard: [
    {
      jobDetailCardText:
        '<h1>¡Trabaja con el Grupo Éxito!</h1><br /><p>Importante no estar en ningun otro proceso con el Grupo Éxito. Buscamos personas como tú,  que deseen trabajar en el cargo auxiliar polivalente.</p>'
    },
    {
      jobDetailCardText:
        '<h1>¿Qué necesitas?</h1><br /><p>Mínimo 2 años de experiencia, ser profesional.<br /><br />Disponibilidad de tiempo para laborar del  21 de Enero 2022  al 17 de Julio de 2023 turnos de 6  horas diarias, con posibilidad  de continuar en otras temporadas o seguir en cargos fijos.<br /><br />Estar cursando los últimos grados de la carrera o haberla finalizado.</p>'
    },
    {
      jobDetailCardText:
        '<h1>¿Qué te ofrecemos?</h1><br /><p>Salario entre $2’000.000 a $3’000.000 aproximadamente.</p>'
    },
    {
      jobDetailCardText:
        '<h1>¡Aplica y no te pierdas esta oportunidad!</h1><br /><p>Si está interesado(a) y cumple con los requisitos debe estar pendiente de su correo electrónico y número de celular personal para envío de pruebas psicotécnicas y citación a video entrevista. FAVOR actualice esta información en la plataforma si cambió de número o el correo no es suyo o no puede ingresar.</p>'
    }
  ],
  jobSkillsCardProps: {
    jobSkillCardHeader: 'Habilidades',
    jobSkills: [
      { skillText: 'Habilidades comerciales', skillLevel: 'Intermediate' as const },
      { skillText: 'Capacidad de negociación', skillLevel: 'Advanced' as const },
      { skillText: 'Conocimiento de microfinanzas', skillLevel: 'Basic' as const }
    ]
  },
  jobApplyCardProps: {
    jobApplyCardHeader: 'Requisitos para aplicar a la vacante:',
    jobApplyCardReqs: [
      { jobRequirementTitle: 'Experiencia:', jobRequirementInfo: ' 1 año de experiencia' },
      { jobRequirementTitle: 'Nivel de estudios:', jobRequirementInfo: ' Especialización / Maestría' },
      { jobRequirementTitle: 'Ciudad de residencia:', jobRequirementInfo: ' Planadas' },
      { jobRequirementTitle: 'Salario:', jobRequirementInfo: ` $2’100.000` }
    ],
    jobApplyButtonText: 'Aplicar',
    onHandlerClick: () => {
      //
    }
  },
  jobFooterCardProps: {
    jobFooterCompanyImg: CompanyLogo,
    jobFooterHeader: 'Compartir vacante en:',
    jobFooterLinks: [
      { icon: FacebookBlue, url: '' },
      { icon: WhatsAppColor, url: '' },
      { icon: LinkedInBlue, url: '' },
      { icon: TwitterBlue, url: '' },
      { icon: SMSBlue, url: '' },
      { icon: ShareBlue, url: '' }
    ]
  },
  mobileJobDetailsBarProps: {
    mobileActionButtonText: 'Aplicar',
    onApplyClick: onClick,
    actionsProps: {
      ActionsButtonEvents: [],
      ActionButtonText: ['Guardar vacante', 'Compartir'],
      ActionsAnchorLinks: ['link1', 'link2'],
      ActionAnchorText: ['Abrir en nueva pestana', 'Ver empresa'],
      ActionsHeader: 'Comunicador audiovisual',
      ButtonText: 'Aplicar',
      onHandleClick: onClick
    }
  }
}

const sortBarProps = {
  textSortButton: 'FILTROS',
  mainTitle: 'Ofertas de empleo en colombia',
  filterSummary: '280 empleos',
  setIsFiltersOpen: () => console.log('setIsFiltersOpen'),
  orderFilter: () => console.log('orderFilter'),
  orderFields: optionsFilterOrderBy,
  textOrderFilter: 'Fecha de publicación',
  setFilter: (menuItem: { key: string }) => console.log(menuItem.key),
  orderByText: 'Organizar por',
  isFiltersOpen: true,
  loading: false
}

const sideFilterProps = {
  title: 'Filtrar empleos',
  filters: storiesFilters as IFilter[],
  totalAppliedFilters: 1,
  filterSummary: '3169 empleos',
  buttonText: 'Limpiar',
  loading: false,
  isFiltersOpen: true,
  switchText: 'Apto para personas con discapacidad',

  setIsFiltersOpen: () => console.log('setIsFiltersOpen'),
  setIsApplied: (filter: ISetIsApplied) => new Promise((resolve) => resolve(console.log({ filter }))),
  clearFilters: () => new Promise((resolve) => resolve(console.log('clearFilters'))),
  unApplyWithChild: (withChild: IUnApplyWithChild) => new Promise((resolve) => resolve(console.log({ withChild }))),
  getOptionsOnLoad: (field: string, values: (string | number)[]) => {
    console.log('getOptionsOnLoad: ', { field, values })
    return new Promise<ISearchRenderTypeOption[]>((resolve) => resolve(appliedOptionsBySearchRenderType))
  },
  getOptionsOnSearch: (term: IGetOptionsOnSearchProps) =>
    new Promise((resolve) => {
      console.log('getOptionsOnSearch: ', { term })
      return resolve([])
    })
}

const frequentSearch = {
  searchHeading: 'Búsquedas de empleo más frecuentes',
  children: searchList.map(({ tag }, index: number) => <SearchItem key={index} tag={tag} />)
}

const footerProps = {
  followText: 'Siguenos',
  magnetoResolutionProps: MagnetoResolutionProps,
  rightsReservedProps: RightsReservedProps,
  menuFooterLink: listMenuText
}

const paginationProps = {
  total: 826,
  current: 4,
  pageSize: 20,
  loading: false,
  numberOfButtons: 5,
  prevTitle: 'Anterior',
  nextTitle: 'Siguiente',
  onChange: (page: number, pageSize: number) => console.log('Pagination: ', { page, pageSize })
}

const meta: Meta<typeof JobsPage> = {
  title: 'Pages/Jobs Page',
  component: JobsPage,
  tags: ['autodocs'],
  args: {
    sortBarProps,
    vacantProps: vacants,
    jobDetailsDrawerProps: jobDetailsDrawer,
    MobileJobDetailsDrawerProps: mobileJobDetailsDrawer,
    frequentSearchProps: frequentSearch,
    sideFilterProps: sideFilterProps as ISideFilter,
    footerProps,
    paginationProps
  },
  decorators: [
    (Story) => (
      <div style={{ margin: '-16px' }}>
        <Story />
      </div>
    )
  ]
}

export default meta

type Story = StoryObj<typeof JobsPage>

export const Default: Story = {}
