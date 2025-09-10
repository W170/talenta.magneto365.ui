import React from 'react'
import { Meta, StoryObj } from '@storybook/react'
import { IconItem, Typography } from '@components/UI/atoms'
import { ISideFilter } from '@components/UI/template'
import Logo from '@assets/noLogo.svg'
import { frequentSearch, footerProps, emptyVacant } from '../../../../constants/stories/jobsPage.constants'
import { CreateAccountCTAProps } from '../../../../constants/stories/createAccountCTA.constants'
import { shareLinks, vacancies } from '../../../../constants/stories/vacancies.constants'
import { sideFilterProps } from '../../../../constants/stories/sideFilter.constants'
import { sortBarProps } from '../../../../constants/stories/sortBar.constants'
import { JobCompanyLogo } from '../JobCompanyLogo'
import { JobDetails } from '../JobDetails'
import {
  CitiesLargeDetailDrawerProps,
  CompanyLogo,
  emptyResultsProps,
  paginationProps
} from '../../../../constants/stories'
import { JobsPage } from '.'
import { JobSuggestedCard } from '../JobDetails/children/JobSuggestedCard'
import { JobDetailsAction } from '../JobDetails/children/JobDetailsAction'

const jobDetailsContent = (
  <JobDetails
    renderHeader={() => (
      <>
        <JobDetails.JobsSuggested
          title="Vacantes similares a la que acabaste de aplicar"
          tag="NUEVO"
          behavior="showcase"
          renderFooter={() => <></>}
        >
          <JobSuggestedCard>
            <JobSuggestedCard.Section>
              <IconItem icon={Logo} size={40} />
              <Typography.Text>Descripción de la vacante</Typography.Text>
            </JobSuggestedCard.Section>
            <JobSuggestedCard.Section>
              <JobDetailsAction.Button variant="ai-job-detail">Ver más</JobDetailsAction.Button>
              <JobDetailsAction.Button>Ver más</JobDetailsAction.Button>
            </JobSuggestedCard.Section>
          </JobSuggestedCard>
          <JobSuggestedCard>
            <JobSuggestedCard.Section>
              <IconItem icon={Logo} size={40} />
              <Typography.Text>Descripción de la vacante</Typography.Text>
            </JobSuggestedCard.Section>
            <JobSuggestedCard.Section>
              <JobDetailsAction.Button variant="ai-job-detail">Ver más</JobDetailsAction.Button>
              <JobDetailsAction.Button>Ver más</JobDetailsAction.Button>
            </JobSuggestedCard.Section>
          </JobSuggestedCard>
          <JobSuggestedCard>
            <JobSuggestedCard.Section>
              <IconItem icon={Logo} size={40} />
              <Typography.Text>Descripción de la vacante</Typography.Text>
            </JobSuggestedCard.Section>
            <JobSuggestedCard.Section>
              <JobDetailsAction.Button variant="ai-job-detail">Ver más</JobDetailsAction.Button>
              <JobDetailsAction.Button>Ver más</JobDetailsAction.Button>
            </JobSuggestedCard.Section>
          </JobSuggestedCard>
          <JobSuggestedCard>
            <JobSuggestedCard.Section>
              <IconItem icon={Logo} size={40} />
              <Typography.Text>Descripción de la vacante</Typography.Text>
            </JobSuggestedCard.Section>
            <JobSuggestedCard.Section>
              <JobDetailsAction.Button variant="ai-job-detail">Ver más</JobDetailsAction.Button>
              <JobDetailsAction.Button>Ver más</JobDetailsAction.Button>
            </JobSuggestedCard.Section>
          </JobSuggestedCard>
          <JobSuggestedCard>
            <JobSuggestedCard.Section>
              <IconItem icon={Logo} size={40} />
              <Typography.Text>Descripción de la vacante</Typography.Text>
            </JobSuggestedCard.Section>
            <JobSuggestedCard.Section>
              <JobDetailsAction.Button variant="ai-job-detail">Ver más</JobDetailsAction.Button>
              <JobDetailsAction.Button>Ver más</JobDetailsAction.Button>
            </JobSuggestedCard.Section>
          </JobSuggestedCard>
        </JobDetails.JobsSuggested>
        <div style={{ display: 'flex', gap: '0.5rem' }}>
          <JobDetails.Drawer.Close />
          <JobCompanyLogo offerCompanyLogo={CompanyLogo} alt="company" />
          <JobDetails.Header title="Vacante de prueba" publishedDate="Fecha de actualización" />
        </div>
      </>
    )}
  >
    <section style={{ display: 'flex' }}>
      <JobDetails.Action.Button rounded icon="share">
        boton
      </JobDetails.Action.Button>
      <JobDetails.Action.Link icon="whatsAppColor">enlace</JobDetails.Action.Link>
      <JobDetails.Action.SharePopover
        icon="export3"
        buttonText="popover"
        shareButtonProps={{ onCopySuccess: () => '', icon: 'link1' }}
        shareLinks={shareLinks}
      />
    </section>
    <JobDetails.Summary
      items={[
        { icon: 'briefcase', id: 1, label: 'Label de prueba 1' },
        { icon: 'location', id: 2, label: 'Label de prueba 2' }
      ]}
    >
      Lista de opciones
    </JobDetails.Summary>
    Hola Mundo
    <JobDetails.Skills
      skills={[
        { id: 1, score: 4, name: 'Trabajo en equipo' },
        { id: 2, score: 2, name: 'Liderazgo' }
      ]}
    >
      <Typography.Paragraph strong>Habilidades</Typography.Paragraph>
    </JobDetails.Skills>
    <JobDetails.Fraud renderTitle={() => '¡Ten cuidado con el fraude!'}>
      Magneto y sus empresas aliadas nunca te pedirán dinero a cambio en un proceso de selección. Ten cuidado, revisa
      bien la vacante y si ves algo sospechoso repórtalo.
      <JobDetails.Fraud.Link>Reportar Fraude</JobDetails.Fraud.Link>
    </JobDetails.Fraud>
    <section style={{ display: 'flex' }}>
      <Typography.Paragraph strong>Compartir en:</Typography.Paragraph>
      <JobDetails.Action.Link icon="whatsAppColor" iconSize={20} />
      <JobDetails.Action.Link icon="facebookBlue" iconSize={20} />

      <JobDetails.Action.Link icon="x" iconSize={20} />
    </section>
  </JobDetails>
)

const meta: Meta<typeof JobsPage> = {
  title: 'Pages/Jobs Page',
  component: JobsPage,
  args: {
    createAccountCTAProps: CreateAccountCTAProps,
    sortBarProps,
    vacantProps: vacancies,
    frequentSearchProps: frequentSearch,
    sideFilterProps: sideFilterProps as ISideFilter,
    footerProps,
    paginationProps,
    jobSelected: vacancies[0],
    setJobSelected: (id) => {
      console.log(id)
    },
    isLoading: false,
    device: 'desktop',
    emptyResultsProps,
    displayAlwaysFilter: true,
    jobDetailsContent,
    jobDetailsTitle: 'Volver'
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

export const LargeCities: Story = {
  args: {
    ...Default.args,
    ...CitiesLargeDetailDrawerProps
  }
}
export const EmptyResults: Story = {
  args: {
    ...Default.args,
    vacantProps: emptyVacant
  }
}
