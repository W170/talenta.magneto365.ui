import { Meta, StoryObj } from '@storybook/react'

import { JobDetailsDrawer } from './JobDetailsDrawer.component'
import {
  FacebookDark,
  LinkDark,
  LinkedInDark,
  MailDark,
  TwitterDark,
  WhatsAppDark
} from '../../../../constants/icons.constants'
import Logo from '../../../../assets/grupo-exito-1.png'

import { IJobSkillsCard } from '../../molecules/JobSkillsCard'

const jobCompanyLogo = {
  jobCompanyLogoProps: {
    companyLogoImg: Logo,
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
    jobDetailCardHeader: '¡Trabaja con el Grupo Éxito!',
    jobDetailCardText:
      'Importante no estar en ningun otro proceso con el Grupo Éxito. Buscamos personas como tú,  que deseen trabajar en el cargo auxiliar polivalente.'
  },
  {
    jobDetailCardHeader: '¿Qué necesitas?',
    jobDetailCardText:
      'Mínimo 2 años de experiencia, ser profesional. Disponibilidad de tiempo para laborar del  21 de Enero 2022  al 17 de Julio de 2023 turnos de 6  horas diarias, con posibilidad  de continuar en otras temporadas o seguir en cargos fijos. Estar cursando los últimos grados de la carrera o haberla finalizado.'
  },
  {
    jobDetailCardHeader: '¿Qué te ofrecemos?',
    jobDetailCardText: 'Salario entre $2’000.000 a $3’000.000 aproximadamente'
  },
  {
    jobDetailCardHeader: '¡Aplica y no te pierdas esta oportunidad!',
    jobDetailCardText:
      'Si está interesado(a) y cumple con los requisitos debe estar pendiente de su correo electrónico y número de celular personal para envío de pruebas psicotécnicas y citación a video entrevista. FAVOR actualice esta información en la plataforma si cambió de número o el correo no es suyo o no puede ingresar.'
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
  jobApplyButtonText: 'Aplicar'
}

const jobFooterCard = {
  jobFooterCompanyImg: Logo,
  jobFooterHeader: 'Compartir vacante en:',
  jobFooterLinks: [
    { Icon: FacebookDark, url: '' },
    { Icon: WhatsAppDark, url: '' },
    { Icon: LinkedInDark, url: '' },
    { Icon: TwitterDark, url: '' },
    { Icon: MailDark, url: '' },
    { Icon: LinkDark, url: '' }
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
