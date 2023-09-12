import { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import JobsPage from './JobsPage.component'

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
import { IFrequentSearch } from '@components/UI/molecules'
import { IconItem, MainButton, ShareButton } from '@components/UI/atoms'
import { Buildings2, Export3, Share } from '@constants/icons.constants'

const jobDetailsDrawer = {
  jobCompanyLogoProps: {
    jobCompanyLogoProps: {
      offerCompanyLogo: CompanyLogo as unknown as JSX.Element
    },
    jobHeaderProps: {
      offerTitle: 'Comunicador Audiovisual',
      offerCompanyName: 'Grupo Exito'
    }
  },
  jobActionsProps: {
    externalButtonChild: <MainButton buttonText="Aplicar" />,
    saveButtonProps: {
      isAuthenticated: true,
      isSaved: false,
      onClick: () => {
        //
      }
    },
    externalChild: <ShareButton buttonTitle="shareButton" />,
    actionsAnchorIcons: [Export3, Buildings2],
    actionsAnchorLinks: ['link1', 'link2']
  },
  jobDetailsProps: [
    'Hace 10 días',
    '4 cupos, 256 aplicaron',
    '2 años de experiencia, profesional',
    '$ 2.000.000 a $ 3.000.000',
    'Bello - Copacabana - Itagui - La Estrella'
  ],
  jobDetailCardProps: {
    offerDescription:
      '<h1>¡Trabaja con el Grupo Éxito!</h1><br /><p>Importante no estar en ningun otro proceso con el Grupo Éxito. Buscamos personas como tú,  que deseen trabajar en el cargo auxiliar polivalente.</p> <h1>¿Qué necesitas?</h1><br /><p>Mínimo 2 años de experiencia, ser profesional.<br /><br />Disponibilidad de tiempo para laborar del  21 de Enero 2022  al 17 de Julio de 2023 turnos de 6  horas diarias, con posibilidad  de continuar en otras temporadas o seguir en cargos fijos.<br /><br />Estar cursando los últimos grados de la carrera o haberla finalizado.</p><h1>¿Qué te ofrecemos?</h1><br /><p>Salario entre $2’000.000 a $3’000.000 aproximadamente.</p> <h1>¡Aplica y no te pierdas esta oportunidad!</h1><br /><p>Si está interesado(a) y cumple con los requisitos debe estar pendiente de su correo electrónico y número de celular personal para envío de pruebas psicotécnicas y citación a video entrevista. FAVOR actualice esta información en la plataforma si cambió de número o el correo no es suyo o no puede ingresar.</p>'
  },
  jobSkillsCardProps: {
    offerSkillsLabel: 'Habilidades',
    offerSkills: [
      { id: 1, name: 'Habilidades comerciales', score: 1 as const },
      { id: 2, name: 'Capacidad de negociación', score: 2 as const },
      { id: 3, name: 'Conocimiento de microfinanzas', score: 3 as const }
    ]
  },
  jobApplyCardProps: {
    offerApplyHeader: 'Requisitos para aplicar a la vacante:',
    offerApplyElements: [
      { offerApplyLabel: 'Experiencia:', offerApplyInfo: ' 1 año de experiencia' },
      { offerApplyLabel: 'Nivel de estudios:', offerApplyInfo: ' Especialización / Maestría' },
      { offerApplyLabel: 'Ciudad de residencia:', offerApplyInfo: ' Planadas' },
      { offerApplyLabel: 'Salario:', offerApplyInfo: ` $2’100.000` }
    ],
    externalChild: <MainButton />
  },
  jobFooterCardProps: {
    offerCompanyLogo: CompanyLogo,
    offerFooterHeader: 'Compartir vacante en:',
    offerFooterList: [
      { href: '#', ariaLabel: 'facebook' },
      { href: '#', ariaLabel: 'whatsapp' },
      { href: '#', ariaLabel: 'linkedin' },
      { href: '#', ariaLabel: 'twitter' },
      { href: '#', ariaLabel: 'sms' }
    ]
  }
}

const mobileJobDetailsDrawer = {
  jobCompanyLogoProps: {
    jobCompanyLogoProps: {
      offerCompanyLogo: CompanyLogo as unknown as JSX.Element
    },
    jobHeaderProps: {
      offerTitle: 'Comunicador Audiovisual',
      offerCompanyName: 'Grupo Exito'
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
      offerDescription:
        '<h1>¡Trabaja con el Grupo Éxito!</h1><br /><p>Importante no estar en ningun otro proceso con el Grupo Éxito. Buscamos personas como tú,  que deseen trabajar en el cargo auxiliar polivalente.</p>'
    },
    {
      offerDescription:
        '<h1>¿Qué necesitas?</h1><br /><p>Mínimo 2 años de experiencia, ser profesional.<br /><br />Disponibilidad de tiempo para laborar del  21 de Enero 2022  al 17 de Julio de 2023 turnos de 6  horas diarias, con posibilidad  de continuar en otras temporadas o seguir en cargos fijos.<br /><br />Estar cursando los últimos grados de la carrera o haberla finalizado.</p>'
    },
    {
      offerDescription: '<h1>¿Qué te ofrecemos?</h1><br /><p>Salario entre $2’000.000 a $3’000.000 aproximadamente.</p>'
    },
    {
      offerDescription:
        '<h1>¡Aplica y no te pierdas esta oportunidad!</h1><br /><p>Si está interesado(a) y cumple con los requisitos debe estar pendiente de su correo electrónico y número de celular personal para envío de pruebas psicotécnicas y citación a video entrevista. FAVOR actualice esta información en la plataforma si cambió de número o el correo no es suyo o no puede ingresar.</p>'
    }
  ],
  jobSkillsCardProps: {
    offerSkillsLabel: 'Habilidades',

    offerSkills: [
      { id: 1, name: 'Habilidades comerciales', score: 1 as const },
      { id: 2, name: 'Capacidad de negociación', score: 2 as const },
      { id: 3, name: 'Conocimiento de microfinanzas', score: 3 as const }
    ]
  },
  jobApplyCardProps: {
    offerApplyHeader: 'Requisitos para aplicar a la vacante:',
    offerApplyElements: [
      { offerApplyLabel: 'Experiencia:', offerApplyInfo: ' 1 año de experiencia' },
      { offerApplyLabel: 'Nivel de estudios:', offerApplyInfo: ' Especialización / Maestría' },
      { offerApplyLabel: 'Ciudad de residencia:', offerApplyInfo: ' Planadas' },
      { offerApplyLabel: 'Salario:', offerApplyInfo: ` $2’100.000` }
    ],
    externalChild: <MainButton />
  },
  jobFooterCardProps: {
    offerCompanyLogo: CompanyLogo,
    offerFooterHeader: 'Compartir vacante en:',
    offerFooterList: [
      { href: '#', ariaLabel: 'facebook' },
      { href: '#', ariaLabel: 'whatsapp' },
      { href: '#', ariaLabel: 'linkedin' },
      { href: '#', ariaLabel: 'twitter' },
      { href: '#', ariaLabel: 'sms' }
    ]
  },
  mobileJobDetailsBarProps: {
    externalButtonChild: <MainButton buttonText="Aplicar" />,
    actionsProps: {
      ActionsAnchorLinks: ['link1', 'link2'],
      ActionAnchorText: ['Abrir en nueva pestana', 'Ver empresa'],
      ActionsHeader: 'Comunicador audiovisual',
      externalChild: <IconItem icon={Share} />,
      saveButtonProps: {
        isAuthenticated: true,
        buttonText: 'Guardar Vacante',
        isSaved: true,
        onClick: () => {
          //
        }
      },
      externalButtonChild: <MainButton buttonText="Aplicar" />
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

const frequentSearch: IFrequentSearch = {
  searchHeading: 'Búsquedas de empleo más frecuentes',
  searchList,
  showLess: 'Ver menos',
  showMore: 'Ver mas'
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
    paginationProps,
    jobSelected: vacants[0],
    isLoading: false
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
