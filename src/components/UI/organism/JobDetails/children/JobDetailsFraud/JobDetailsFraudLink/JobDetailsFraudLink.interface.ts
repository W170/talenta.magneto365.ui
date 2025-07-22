import { Typography } from '@components/UI/atoms'

export interface IJobDetailsFraudLink extends React.ComponentProps<typeof Typography.Link> {
  className?: string
  children?: React.ReactNode
}
