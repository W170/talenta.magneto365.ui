import { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import { MainButton } from '@components/UI/atoms'
import { SuggestedJobsPage } from './SuggestedJobsPage.component'
import { CompanyLogo, paginationProps, vacancies, CitiesDetailDrawerProps } from '@constants/stories'

import { Buildings2, Export3 } from '@constants/icons.constants'
import { emptyResultsProps } from '@constants/stories/emptyResults.constants'

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
      },
      addHover: true,
      buttonTitle: 'Guardar'
    },
    shareButtonProps: {
      buttonTitle: 'Compartir vacante',
      addHover: true,
      onCopySuccess: () => console.log('Success')
    },
    actionsAnchorIcons: [Export3, Buildings2],
    actionsAnchorLinks: ['link1', 'link2'],
    actionsAnchorTitle: ['Abrir esta oferta en otra pestaña', 'Ver empresa']
  },
  jobDetailsProps: [
    'Hace 10 días',
    '4 cupos, 256 aplicaron',
    '2 años de experiencia, profesional',
    '$ 2.000.000 a $ 3.000.000'
  ],
  ...CitiesDetailDrawerProps,
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
    externalChild: <MainButton buttonText="Aplicar" />
  },
  jobFooterCardProps: {
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
    '$ 2.000.000 a $ 3.000.000'
  ],
  cities: [
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
  },
  mobileJobDetailsBarProps: {
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
        buttonTitle: 'Compartir vacante',
        buttonText: 'Compartir',
        onCopySuccess: () => console.log('Success')
      },
      externalButtonChild: <MainButton buttonText="Aplicar" />
    },
    onClose: true
  }
}

const meta: Meta<typeof SuggestedJobsPage> = {
  title: 'Pages/Suggested Jobs Page',
  component: SuggestedJobsPage,
  tags: ['autodocs'],
  args: {
    device: 'desktop',
    emptyResultsProps,
    isLoading: false,
    jobDetailsDrawerProps: jobDetailsDrawer,
    jobSelected: vacancies[0],
    mobileJobDetailsDrawerProps: mobileJobDetailsDrawer,
    vacantProps: vacancies,
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

type Story = StoryObj<typeof SuggestedJobsPage>

export const Default: Story = {}

export const EmptyResults: Story = {
  args: {
    ...Default.args,
    vacantProps: []
  }
}
