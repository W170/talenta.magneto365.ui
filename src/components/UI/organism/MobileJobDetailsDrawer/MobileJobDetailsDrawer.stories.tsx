import { StoryObj, Meta } from '@storybook/react'
import React from 'react'
import { MainButton } from '@components/UI/atoms'
import { MobileJobDetailsDrawer } from './MobileJobDetailsDrawer.component'

import { CompanyLogo } from '@constants/stories'
import { jobVideo } from '@constants/stories/jobVideo.constants'

const jobCompanyLogo = {
  jobCompanyLogoProps: {
    offerCompanyLogo: CompanyLogo as unknown as JSX.Element
  },
  jobHeaderProps: {
    offerTitle: 'Comunicador Audiovisual',
    offerCompanyName: 'Grupo Exito',
    isHidden: true
  }
}

const jobDetails = [
  'Hace 10 días',
  '4 cupos, 256 aplicaron',
  '2 años de experiencia, profesional',
  '$ 2.000.000 a $ 3.000.000',
  'Bello - Copacabana - Itagui - La Estrella'
]

const jobDetailCard = {
  offerDescription:
    '<h1>¡Trabaja con el Grupo Éxito!</h1><br /><p>Importante no estar en ningun otro proceso con el Grupo Éxito. Buscamos personas como tú,  que deseen trabajar en el cargo auxiliar polivalente.</p> <h1>¿Qué necesitas?</h1><br /><p>Mínimo 2 años de experiencia, ser profesional.<br /><br />Disponibilidad de tiempo para laborar del  21 de Enero 2022  al 17 de Julio de 2023 turnos de 6  horas diarias, con posibilidad  de continuar en otras temporadas o seguir en cargos fijos.<br /><br />Estar cursando los últimos grados de la carrera o haberla finalizado.</p><h1>¿Qué te ofrecemos?</h1><br /><p>Salario entre $2’000.000 a $3’000.000 aproximadamente.</p> <h1>¡Aplica y no te pierdas esta oportunidad!</h1><br /><p>Si está interesado(a) y cumple con los requisitos debe estar pendiente de su correo electrónico y número de celular personal para envío de pruebas psicotécnicas y citación a video entrevista. FAVOR actualice esta información en la plataforma si cambió de número o el correo no es suyo o no puede ingresar.</p>'
}

const jobSkillsCard = {
  offerSkillsLabel: 'Habilidades',
  offerSkills: [
    { name: 'Habilidades comerciales', score: 1, id: 1 },
    { name: 'Capacidad de negociación', score: 1, id: 2 },
    { name: 'Conocimiento de microfinanzas', score: 1, id: 3 }
  ]
}

const jobApplyCard = {
  offerApplyHeader: 'Requisitos para aplicar a la vacante:',
  offerApplyElements: [
    { offerApplyLabel: 'Experiencia:', offerApplyInfo: ' 1 año de experiencia' },
    { offerApplyLabel: 'Nivel de estudios:', offerApplyInfo: ' Especialización / Maestría' },
    { offerApplyLabel: 'Ciudad de residencia:', offerApplyInfo: ' Planadas' },
    { offerApplyLabel: 'Salario:', offerApplyInfo: ` $2’100.000` }
  ],
  externalChild: <MainButton buttonText="Aplicar" />
}

const jobFooterCard = {
  offerCompanyLogo: CompanyLogo,
  offerFooterHeader: 'Compartir vacante en:',
  offerFooterList: [
    { href: '#', ariaLabel: 'facebook', title: 'Facebook' },
    { href: '#', ariaLabel: 'whatsapp', title: 'Whatsapp' },
    { href: '#', ariaLabel: 'linkedin', title: 'Linkedin' },
    { href: '#', ariaLabel: 'twitter', title: 'Twitter' },
    { href: '#', ariaLabel: 'sms', title: 'Correo' }
  ],
  offerFooterTitle: ['Facebook', 'Whatsapp', 'Linkedin', 'Twitter', 'Correo'],
  shareButtonProps: {
    buttonTitle: 'Copiar',
    onCopySuccess: () => console.log('Success')
  }
}

const MobileJobDetailsActionsBar = {
  externalButtonChild: <MainButton buttonText="Aplicar" />,
  actionsProps: {
    ActionsHeader: 'Comunicador audiovisual',
    ActionsAnchorLinks: ['link1', 'link2'],
    ActionAnchorText: ['Abrir en nueva pestana', 'Ver empresa'],
    saveButtonProps: {
      isAuthenticated: true,
      buttonText: 'Guardar Vacante',
      isSaved: true,
      onClick: () => {
        //
      }
    },
    shareButtonProps: {
      buttonTitle: 'Compartir Vacante',
      buttonText: 'Compartir',
      onCopySuccess: () => console.log('Success'),
      onCopyError: () => console.log('Error'),
      shareLinks: []
    },
    externalButtonChild: <MainButton buttonText="Aplicar" />
  },
  onClose: true
}

const meta: Meta<typeof MobileJobDetailsDrawer> = {
  title: 'Organism/Mobile Job Details Drawer',
  component: MobileJobDetailsDrawer,
  args: {}
}

export default meta

type Story = StoryObj<typeof MobileJobDetailsDrawer>

export const Default: Story = {
  args: {
    jobCompanyLogoProps: jobCompanyLogo,
    jobDetailsHeaderText: 'Volver',
    jobDetailsProps: jobDetails,
    jobDetailCardProps: jobDetailCard,
    jobSkillsCardProps: jobSkillsCard,
    jobApplyCardProps: jobApplyCard,
    jobFooterCardProps: jobFooterCard,
    mobileJobDetailsBarProps: MobileJobDetailsActionsBar,
    isOpen: true,
    jobVideo: jobVideo
  }
}
