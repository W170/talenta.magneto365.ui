import React from 'react'
import { Meta, StoryObj } from '@storybook/react'
import JobsPage from './JobsPage.component'
import {
  CompanyLogo,
  appliedOptionsBySearchRenderType,
  optionsFilterOrderBy,
  vacants
} from '@constants/stories.constants'
import { FacebookBlue, LinkedInBlue, SMSBlue, ShareBlue, TwitterBlue, WhatsAppColor } from '@constants/icons.constants'

import data from '@components/UI/template/SideFilter/filtersNormalized.json'
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
      { Icon: FacebookBlue, url: '' },
      { Icon: WhatsAppColor, url: '' },
      { Icon: LinkedInBlue, url: '' },
      { Icon: TwitterBlue, url: '' },
      { Icon: SMSBlue, url: '' },
      { Icon: ShareBlue, url: '' }
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
      { Icon: FacebookBlue, url: '' },
      { Icon: WhatsAppColor, url: '' },
      { Icon: LinkedInBlue, url: '' },
      { Icon: TwitterBlue, url: '' },
      { Icon: SMSBlue, url: '' },
      { Icon: ShareBlue, url: '' }
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
const sideFilter = {
  title: 'Filtrar empleos',
  filters: data as unknown as IFilter[],
  totalAppliedFilters: 1,
  buttonText: 'Limpiar',
  loading: false,
  switchText: 'Apto para personas con discapacidad',

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
const meta: Meta<typeof JobsPage> = {
  title: 'Pages/Jobs Page',
  component: JobsPage,
  tags: ['autodocs'],
  args: {
    filterBottomHeaderProps: {
      textButtonFilter: 'FILTROS',
      filterSummary: '280 empleos',
      openFilterDrawer: () => console.log('openFilterDrawer'),
      orderFilter: () => console.log('orderFilter'),
      filterItems: optionsFilterOrderBy,
      textOrderFilter: 'Fecha de publicación',
      setFilter: (menuItem: { key: string }) => console.log(menuItem.key),
      orderByText: 'Organizar por'
    },
    vacantProps: vacants,
    jobDetailsDrawerProps: jobDetailsDrawer,
    MobileJobDetailsDrawerProps: mobileJobDetailsDrawer,
    sideFilterProps: sideFilter as ISideFilter
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
