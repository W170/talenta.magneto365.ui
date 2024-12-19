import React from 'react'
import { Meta, StoryObj } from '@storybook/react'
import { MegaMenu } from './MegaMenu.component'
import {
  megaMenuSocialHeader,
  megaMenuJobs,
  megaMenuCards,
  megaMenuJobsIcon,
  megaMenuBreadcrumbs,
  megaMenuMainHeader
} from '@constants/stories'
import { MegaMenuCards } from '@components/UI/organism'
import { IMegaMenuJobsTabs } from './MegaMenuContext.interface'
import { withMegaMenuSideCards } from '../../../hoc'

const jobsTabs = megaMenuJobs.tabs.map((job: IMegaMenuJobsTabs, key) => {
  const Content = withMegaMenuSideCards(MegaMenuCards)
  if (key == 0)
    return {
      ...job,
      content: (
        <Content
          wrapperProps={megaMenuCards}
          sideProps={{
            jobs: megaMenuJobsIcon,
            onSelectCard: () => {
              console.log('side card changed')
            },
            action: { label: 'Ver todos', url: 'www.google.com' }
          }}
        />
      )
    }
  return {
    ...job,
    content: <MegaMenuCards {...megaMenuCards} />
  }
})

const meta: Meta<typeof MegaMenu> = {
  title: 'Template/MegaMenu',
  component: MegaMenu,
  tags: ['autodocs'],
  args: {
    socialHeaderProps: megaMenuSocialHeader,
    jobsProps: { ...megaMenuJobs, tabs: jobsTabs },
    breadcrumbsProps: megaMenuBreadcrumbs,
    mainHeaderProps: megaMenuMainHeader
  }
}

export default meta

type Story = StoryObj<typeof MegaMenu>

export const Default: Story = {}
