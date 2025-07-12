import { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import JobsPage from './JobsPage.component'
import { CreateAccountCTAProps } from '../../../../constants/stories/createAccountCTA.constants'
import { frequentSearch, footerProps, emptyVacant } from '../../../../constants/stories/jobsPage.constants'
import { sortBarProps } from '../../../../constants/stories/sortBar.constants'
import { shareLinks, vacancies } from '../../../../constants/stories/vacancies.constants'
import { sideFilterProps } from '../../../../constants/stories/sideFilter.constants'
import { ISideFilter } from '../../template/SideFilter/SideFilter.interface'
import {
  CitiesLargeDetailDrawerProps,
  CompanyLogo,
  emptyResultsProps,
  paginationProps
} from '../../../../constants/stories'
import { JobDetails } from '../../organism/JobDetails'
import { JobDetailsHeader } from '../../organism/JobDetails/children/JobDetailsHeader'
import {
  Export3,
  FacebookBlue,
  Flag,
  Link1,
  LinkedInBlue,
  MagnetoIcon,
  Share,
  Share2,
  SMSBlue,
  WhatsAppColor,
  X
} from '../../../../constants/icons.constants'
import { Button, ButtonLink, IconItem, JobCompanyLogo, SaveButton, ShareButton, Typography } from '../../atoms'
import { Tooltip } from '../../molecules/Tooltip'
import { SharePopover } from '../../molecules/SharePopover'
import { JobSuggestedCard } from '@components/UI/organism'
import Logo from '@assets/noLogo.svg'

const jobDetailsContent = (
  <JobDetails
    renderHeader={() => (
      <>
        <JobDetails.JobsSuggested
          title="Vacantes similares a la que acabaste de aplicar"
          tag="NUEVO"
          behavior="showcase"
        >
          <JobSuggestedCard>
            <JobSuggestedCard.Section>
              <IconItem icon={Logo} size={40} />
              <Typography.Text>Descripción de la vacante</Typography.Text>
            </JobSuggestedCard.Section>
            <JobSuggestedCard.Section>
              <JobSuggestedCard.Button variant="secondary">Ver más</JobSuggestedCard.Button>
              <JobSuggestedCard.Button>Ver más</JobSuggestedCard.Button>
            </JobSuggestedCard.Section>
          </JobSuggestedCard>
          <JobSuggestedCard>
            <JobSuggestedCard.Section>
              <IconItem icon={Logo} size={40} />
              <Typography.Text>Descripción de la vacante</Typography.Text>
            </JobSuggestedCard.Section>
            <JobSuggestedCard.Section>
              <JobSuggestedCard.Button variant="secondary">Ver más</JobSuggestedCard.Button>
              <JobSuggestedCard.Button>Ver más</JobSuggestedCard.Button>
            </JobSuggestedCard.Section>
          </JobSuggestedCard>
          <JobSuggestedCard>
            <JobSuggestedCard.Section>
              <IconItem icon={Logo} size={40} />
              <Typography.Text>Descripción de la vacante</Typography.Text>
            </JobSuggestedCard.Section>
            <JobSuggestedCard.Section>
              <JobSuggestedCard.Button variant="secondary">Ver más</JobSuggestedCard.Button>
              <JobSuggestedCard.Button>Ver más</JobSuggestedCard.Button>
            </JobSuggestedCard.Section>
          </JobSuggestedCard>
          <JobSuggestedCard>
            <JobSuggestedCard.Section>
              <IconItem icon={Logo} size={40} />
              <Typography.Text>Descripción de la vacante</Typography.Text>
            </JobSuggestedCard.Section>
            <JobSuggestedCard.Section>
              <JobSuggestedCard.Button variant="secondary">Ver más</JobSuggestedCard.Button>
              <JobSuggestedCard.Button>Ver más</JobSuggestedCard.Button>
            </JobSuggestedCard.Section>
          </JobSuggestedCard>
          <JobSuggestedCard>
            <JobSuggestedCard.Section>
              <IconItem icon={Logo} size={40} />
              <Typography.Text>Descripción de la vacante</Typography.Text>
            </JobSuggestedCard.Section>
            <JobSuggestedCard.Section>
              <JobSuggestedCard.Button variant="secondary">Ver más</JobSuggestedCard.Button>
              <JobSuggestedCard.Button>Ver más</JobSuggestedCard.Button>
            </JobSuggestedCard.Section>
          </JobSuggestedCard>
        </JobDetails.JobsSuggested>
        <div style={{ display: 'flex', gap: '0.5rem' }}>
          <JobCompanyLogo offerCompanyLogo={CompanyLogo} alt="company" />
          <JobDetailsHeader title="Vacante de prueba" publishedDate="Fecha de actualización" />
        </div>
      </>
    )}
  >
    <JobDetails.Actions>
      <Button buttonText="Aplicar con Magneto" onClick={() => console.log} suffixIcon={MagnetoIcon} />
      <Tooltip title={'Guardar'} position="bottom">
        <SaveButton
          isSaved={false}
          onClick={() => {
            //
          }}
          addHover
          buttonTitle="Guardar"
          buttonText="Guardar"
          isAuthenticated
          iconSize={12}
        />
      </Tooltip>
      <SharePopover
        buttonTitle="Compartir"
        buttonText="Compartir"
        onCopySuccess={() => console.log('Success')}
        addHover
        shareLinks={shareLinks}
        iconPopover={Share2}
        icon={Link1}
        iconPopoverSize={12}
      />
      <Tooltip title="Expandir" position="bottom">
        <ButtonLink
          buttonText={'Expandir'}
          href={'link1'}
          target="_blank"
          rel="noreferrer"
          suffixIcon={Export3}
          iconSize={12}
        />
      </Tooltip>
      <Tooltip title="Reportar" position="bottom">
        <ButtonLink
          buttonText={'Reportar'}
          href={'link2'}
          target="_blank"
          rel="noreferrer"
          suffixIcon={Flag}
          iconSize={12}
        />
      </Tooltip>
    </JobDetails.Actions>
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
    <JobDetails.Actions>
      <>
        <Button buttonText="Aplicar con Magneto" onClick={() => console.log} suffixIcon={MagnetoIcon} />
        <Typography.Paragraph>Compartir en: </Typography.Paragraph>
        <Tooltip title="Facebook" position="bottom">
          <ButtonLink href={'link1'} target="_blank" rel="noreferrer" suffixIcon={FacebookBlue} iconSize={20} />
        </Tooltip>
        <Tooltip title="WhatsApp" position="bottom">
          <ButtonLink href={'link2'} target="_blank" rel="noreferrer" suffixIcon={WhatsAppColor} iconSize={20} />
        </Tooltip>
        <Tooltip title="LinkedIn" position="bottom">
          <ButtonLink href={'link3'} target="_blank" rel="noreferrer" suffixIcon={LinkedInBlue} iconSize={20} />
        </Tooltip>
        <Tooltip title="X" position="bottom">
          <ButtonLink href={'link4'} target="_blank" rel="noreferrer" suffixIcon={X} iconSize={20} />
        </Tooltip>
        <Tooltip title="SMS" position="bottom">
          <ButtonLink href={'link5'} target="_blank" rel="noreferrer" suffixIcon={SMSBlue} iconSize={20} />
        </Tooltip>
        <Tooltip title={'Copiar enlace'} position="bottom">
          <ShareButton icon={Share} onCopySuccess={() => console.log('Success')} addHover />
        </Tooltip>
      </>
    </JobDetails.Actions>
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
