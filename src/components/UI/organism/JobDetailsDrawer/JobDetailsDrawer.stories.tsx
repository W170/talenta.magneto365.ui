import { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import { JobDetailsDrawer } from './JobDetailsDrawer.component'

import { CompanyLogo } from '../../../../constants/stories'
import { MainButton } from '../../atoms/MainButton/MainButton.component'
import { Buildings2, Export3 } from '../../../../constants/icons.constants'
import { IJobCompanyHeader } from '../../molecules/JobCompanyHeader'
import { jobVideo } from '../../../../constants/stories/jobVideo.constants'
import { ICityDetail } from '../../molecules/CitiesDetailDrawer'
import { shareLinks } from '../../../../constants/stories/vacancies.constants'
import { fraudCardJob } from '../../../../constants/stories/fraudCardJob.constant'
import { IAlertJobStatus } from '../../molecules/AlertJobStatus/AlertJobStatus.interface'
import { AlertJobStatus } from '../../molecules/AlertJobStatus/AlertJobStatus.component'
const jobActions = {
  externalButtonChild: <MainButton buttonText="Aplicar" />,
  saveButtonProps: {
    isAuthenticated: true,
    isSaved: false,
    onClick: () => {
      //
    },
    addHover: true,
    buttonTitle: 'Guardar'
  },
  shareButtonProps: {
    buttonTitle: 'Compartir vacante',
    buttonText: 'Copiar Enlace',
    onCopySuccess: () => console.log('Success'),
    shareLinks
  },
  actionsAnchorIcons: [Export3, Buildings2],
  actionsAnchorLinks: ['link1', 'link2'],
  ctionsAnchorLinks: ['link1', 'link2'],
  actionsAnchorTitle: ['Abrir esta oferta en otra pestaña', 'Ver empresa']
}
const jobCompanyLogo: IJobCompanyHeader = {
  jobCompanyLogoProps: {
    offerCompanyLogo: CompanyLogo as unknown as JSX.Element,
    alt: 'Grupo Exito Logo'
  },
  jobHeaderProps: {
    offerTitle: 'Comunicador Audiovisual',
    offerCompanyName: 'Grupo Exito',
    typeTitle: 'SubTitle'
  },
  jobActionsProps: jobActions
}

const jobDetails = [
  'Hace 10 días',
  '4 cupos, 256 aplicaron',
  '2 años de experiencia, profesional',
  '$ 2.000.000 a $ 3.000.000'
]

const cities: ICityDetail[] = [
  {
    name: 'Bello',
    url: 'https://www-stg.magneto365.com/co/trabajos/ofertas-empleo-en-bello',
    title: 'Ofertas empleo en Bello'
  },
  {
    name: 'Copacabana',
    url: 'https://www-stg.magneto365.com/co/trabajos/ofertas-empleo-en-copacabana',
    title: 'Ofertas empleo en Copacabana'
  }
]

const jobDetailCard = {
  offerDescription:
    '<h1>¡Trabaja con el Grupo Éxito!</h1><br /><p>Importante no estar en ningun otro proceso con el Grupo Éxito. Buscamos personas como tú,  que deseen trabajar en el cargo auxiliar polivalente.</p> <h1>¿Qué necesitas?</h1><br /><p>Mínimo 2 años de experiencia, ser profesional.<br /><br />Disponibilidad de tiempo para laborar del  21 de Enero 2022  al 17 de Julio de 2023 turnos de 6  horas diarias, con posibilidad  de continuar en otras temporadas o seguir en cargos fijos.<br /><br />Estar cursando los últimos grados de la carrera o haberla finalizado.</p><h1>¿Qué te ofrecemos?</h1><br /><p>Salario entre $2’000.000 a $3’000.000 aproximadamente.</p> <h1>¡Aplica y no te pierdas esta oportunidad!</h1><br /><p>Si está interesado(a) y cumple con los requisitos debe estar pendiente de su correo electrónico y número de celular personal para envío de pruebas psicotécnicas y citación a video entrevista. FAVOR actualice esta información en la plataforma si cambió de número o el correo no es suyo o no puede ingresar.</p>'
}

const jobSkillsCard = {
  offerSkillsLabel: 'Habilidades',
  offerSkills: [
    { id: 1, name: 'Habilidades comerciales', score: 1 },
    { id: 2, name: 'Capacidad de negociación', score: 2 },
    { id: 3, name: 'Conocimiento de microfinanzas', score: 3 }
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
    { href: '#', ariaLabel: 'x', title: 'X' },
    { href: '#', ariaLabel: 'sms', title: 'Correo' }
  ],
  offerFooterTitle: ['Facebook', 'Whatsapp', 'Linkedin', 'X', 'Correo'],
  shareButtonProps: {
    buttonTitle: 'Copiar',
    onCopySuccess: () => console.log('Success')
  }
}

const { Container, Text, Icon } = AlertJobStatus

const alertJobStatusProps: IAlertJobStatus = {
  children: (
    <>
      <Container>
        <Icon type="success" />
        <Text
          customText={[
            { value: 'Ya aplicaste a este empleo', fontWeight: 'bold', lineBreak: true },
            { value: 'Puedes ver el estado de tu aplicación ', fontWeight: 'normal' },
            {
              value: <a href={'_blank'}>{'Mis procesos'}</a>,
              fontWeight: 'bold'
            }
          ]}
        />
      </Container>
    </>
  ),
  type: 'normal'
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
    jobDetailCardProps: jobDetailCard,
    jobSkillsCardProps: jobSkillsCard,
    jobApplyCardProps: jobApplyCard,
    jobFooterCardProps: jobFooterCard,
    jobVideo: jobVideo,
    cities: cities,
    fraudCardJobProps: fraudCardJob,
    alertJobStatusProps: alertJobStatusProps
  }
}

export const CitiesRemote: Story = {
  args: {
    jobCompanyLogoProps: jobCompanyLogo,
    jobActionsProps: jobActions,
    jobDetailsProps: jobDetails,
    jobDetailCardProps: jobDetailCard,
    jobSkillsCardProps: jobSkillsCard,
    jobApplyCardProps: jobApplyCard,
    jobFooterCardProps: jobFooterCard,
    jobVideo: jobVideo,
    cities: cities,
    isRemote: true,
    textRemote: 'Remoto/hibrido en:'
  }
}
