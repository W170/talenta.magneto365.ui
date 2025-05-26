import React, { useState } from 'react'
import { IAnalystNotificationCardProps, DefaultNotificationProps } from './AnalystNotificationCard.interface'
import { IRequestNotification, ICandidateManagementNotification } from '../AnalystNotificationList.interface'
import { TaskSquare, ArrowRight2, Sparkles } from '@constants/icons.constants'
import { Typography } from '@components/UI/atoms'
import { Button } from '@components/UI/atoms'
import { InlineDetails } from '@components/UI/atoms/InlineDetails'
import { IconItem } from '@components/UI/atoms'
import styles from './AnalystNotificationCard.module.scss'
import { Badge } from '@components/UI/atoms'
import { AnalystNotificationEvent, AnalystNotificationType } from '../../../enums'

const DefaultNotificationCard = (props: DefaultNotificationProps) => {
  const [isRead, setIsRead] = useState(props.read)
  const handleClick = () => {
    if (!props.read) {
      setIsRead(true)
      //TODO: call mark as read endpoint
    }
    props.action()
  }
  return (
    <div className={styles.defaultNotificationCard}>
      <div className={styles['defaultNotificationCard__icon']}>
        <IconItem icon={props.icon} size={20} />
      </div>
      <div className={styles['defaultNotificationCard__content']}>
        <div className={styles['defaultNotificationCard__content-title']}>
          <Typography.Title level={3} size="md" weight="bold">
            {props.title}
          </Typography.Title>
          <div className={styles['defaultNotificationCard__content-title-right']}>
            <Typography.Text size="xs" weight="normal" color="gray">
              {props.timestamp}
            </Typography.Text>
            {!isRead && <Badge className={styles['defaultNotificationCard__content-title-badge']} />}
          </div>
        </div>
        <div className={styles['defaultNotificationCard__content-details']}>
          {props.descriptionLines?.map((line, index) => (
            <InlineDetails key={index} details={line} className={styles['defaultNotificationCard__content-detail']} />
          ))}
        </div>
        <Button
          className={styles['defaultNotificationCard__content-button']}
          prefixIcon={ArrowRight2}
          buttonText={props.actionTitle}
          onClick={handleClick}
        />
      </div>
    </div>
  )
}

const RequestCard = (notification: IRequestNotification) => {
  switch (notification.event) {
    case AnalystNotificationEvent.created:
    case AnalystNotificationEvent.assigned:
    case AnalystNotificationEvent.named:
    case AnalystNotificationEvent.rejected:
      return <DefaultNotificationCard {...notification} icon={TaskSquare} />
    default:
      return null
  }
}

const CandidateManagementCard = (notification: ICandidateManagementNotification) => {
  switch (notification.event) {
    case AnalystNotificationEvent.matchFound:
      return <DefaultNotificationCard {...notification} icon={Sparkles} />
    default:
      return null
  }
}

export function AnalystNotificationCard({ notification }: IAnalystNotificationCardProps) {
  switch (notification.type) {
    case AnalystNotificationType.requests:
      return <RequestCard {...notification} />
    case AnalystNotificationType.candidateManagement:
      return <CandidateManagementCard {...notification} />
    default:
      return null
  }
}
