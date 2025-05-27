import { Meta, StoryObj } from '@storybook/react'
import { CompanyCard } from './CompanyCard.component'
import { companyCardData, companyCardDataWithDescription } from '@constants/stories'

const meta: Meta<typeof CompanyCard> = {
  title: 'Molecules/Company Card',
  component: CompanyCard,
  args: companyCardData
}

export default meta

type Story = StoryObj<typeof CompanyCard>

export const Default: Story = {}

export const WithoutDescription: Story = {
  args: companyCardData
}
export const WithDescription: Story = {
  args: companyCardDataWithDescription
}
