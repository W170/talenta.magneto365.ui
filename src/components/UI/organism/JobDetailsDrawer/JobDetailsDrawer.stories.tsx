import { Meta, StoryObj } from '@storybook/react'

import { JobDetailsDrawer } from './JobDetailsDrawer.component'
import {
  FacebookBlue,
  LinkedInBlue,
  SMSBlue,
  ShareBlue,
  TwitterBlue,
  WhatsAppColor
} from '../../../../constants/icons.constants'
import { CompanyLogo } from '@constants/stories.constants'

import { IJobSkillsCard } from '../../molecules/JobSkillsCard'

const jobCompanyLogo = {
  jobCompanyLogoProps: {
    companyLogoImg: CompanyLogo,
    alt: 'Grupo Exito Logo'
  },
  jobHeaderProps: {
    jobTitle: 'Comunicador Audiovisual',
    jobSubtitle: 'Grupo Exito'
  }
}

const onClickOne = () => {
  console.log('1')
}

const onClickTwo = () => {
  console.log(2)
}

const jobActions = {
  actionButtonText: 'Aplicar',
  actionsButtonEvents: [onClickOne, onClickTwo],
  actionsAnchorLinks: ['link1', 'link2'],
  onHandleClick: () => {
    //
  }
}

const jobDetails = [
  'Hace 10 días',
  '4 cupos, 256 aplicaron',
  '2 años de experiencia, profesional',
  '$ 2.000.000 a $ 3.000.000',
  'Bello - Copacabana - Itagui - La Estrella'
]

const jobDetailCard = [
  {
    jobDetailCardText:
      '<h1>¡Trabaja con el Grupo Éxito!</h1><br /><p>Importante no estar en ningun otro proceso con el Grupo Éxito. Buscamos personas como tú,  que deseen trabajar en el cargo auxiliar polivalente.</p>'
  },
  {
    jobDetailCardText:
      '<h1>¿Qué necesitas?</h1><br /><p>Mínimo 2 años de experiencia, ser profesional.<br /><br />Disponibilidad de tiempo para laborar del  21 de Enero 2022  al 17 de Julio de 2023 turnos de 6  horas diarias, con posibilidad  de continuar en otras temporadas o seguir en cargos fijos.<br /><br />Estar cursando los últimos grados de la carrera o haberla finalizado.</p>'
  },
  {
    jobDetailCardText: '<h1>¿Qué te ofrecemos?</h1><br /><p>Salario entre $2’000.000 a $3’000.000 aproximadamente.</p>'
  },
  {
    jobDetailCardText:
      '<h1>¡Aplica y no te pierdas esta oportunidad!</h1><br /><p>Si está interesado(a) y cumple con los requisitos debe estar pendiente de su correo electrónico y número de celular personal para envío de pruebas psicotécnicas y citación a video entrevista. FAVOR actualice esta información en la plataforma si cambió de número o el correo no es suyo o no puede ingresar.</p>'
  }
]

const jobSkillsCard: IJobSkillsCard = {
  jobSkillCardHeader: 'Habilidades',
  jobSkills: [
    { skillText: 'Habilidades comerciales', skillLevel: 'Intermediate' },
    { skillText: 'Capacidad de negociación', skillLevel: 'Advanced' },
    { skillText: 'Conocimiento de microfinanzas', skillLevel: 'Basic' }
  ]
}

const jobApplyCard = {
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
}

const jobFooterCard = {
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

const meta: Meta<typeof JobDetailsDrawer> = {
  title: 'Organism/Job Details Drawer',
  component: JobDetailsDrawer,
  args: {}
}

export default meta

type Story = StoryObj<typeof JobDetailsDrawer>

export const Default: Story = {
  args: {
    jobCompanyLogoProps: jobCompanyLogo,
    jobActionsProps: jobActions,
    jobDetailsProps: jobDetails,
    jobDetailCard: jobDetailCard,
    jobSkillsCardProps: jobSkillsCard,
    jobApplyCardProps: jobApplyCard,
    jobFooterCardProps: jobFooterCard
  }
}
