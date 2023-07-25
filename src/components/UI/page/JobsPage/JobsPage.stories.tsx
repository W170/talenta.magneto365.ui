import { Meta, StoryObj } from '@storybook/react'
import JobsPage from './JobsPage.component'
import { optionsFilterOrderBy, vacants } from '../../../../constants/stories.constants'
import { IJobDetailsDrawer } from '@components/UI/organism/JobDetailsDrawer'
import { FacebookBlue, LinkedInBlue, SMSBlue, ShareBlue, TwitterBlue, WhatsAppColor } from '@constants/icons.constants'
import Logo from '../../../../assets/grupo-exito-1.png'
import { IMobileJobDetailsDrawer } from '@components/UI/organism/MobileJobDetailsDrawer/MobileJobDetailsDrawer.interface'

const onClickOne = () => {
  console.log('1')
}

const onClickTwo = () => {
  console.log(2)
}

const jobDetailsDrawer: IJobDetailsDrawer = {
  jobCompanyLogoProps: {
    jobCompanyLogoProps: {
      companyLogoImg: Logo,
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
      { skillText: 'Habilidades comerciales', skillLevel: 'Intermediate' },
      { skillText: 'Capacidad de negociación', skillLevel: 'Advanced' },
      { skillText: 'Conocimiento de microfinanzas', skillLevel: 'Basic' }
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
    jobFooterCompanyImg: Logo,
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

const mobileJobDetailsDrawer: IMobileJobDetailsDrawer = {
  jobCompanyLogoProps: {
    jobCompanyLogoProps: {
      companyLogoImg: Logo,
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
  jobSkillsCardProps: {
    jobSkillCardHeader: 'Habilidades',
    jobSkills: [
      { skillText: 'Habilidades comerciales', skillLevel: 'Intermediate' },
      { skillText: 'Capacidad de negociación', skillLevel: 'Advanced' },
      { skillText: 'Conocimiento de microfinanzas', skillLevel: 'Basic' }
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
    jobFooterCompanyImg: Logo,
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
    MobileJobDetailsDrawerProps: mobileJobDetailsDrawer
  }
}

export default meta

type Story = StoryObj<typeof JobsPage>

export const Default: Story = {}
