import React from 'react'
import { IInlineDetails } from './InlineDetails.interface'
import { Typography } from '../Typography'

export function InlineDetails({ details, className }: Readonly<IInlineDetails>) {
  const formatedDetails = details.join(' | ')

  return (
    <div className={className}>
      <Typography.Text size="md" weight="normal" color="inherit">
        {formatedDetails}
      </Typography.Text>
    </div>
  )
}

export default InlineDetails
