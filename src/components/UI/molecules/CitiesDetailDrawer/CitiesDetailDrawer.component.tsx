import React from 'react'
import { Location } from '../../../../constants/icons.constants'
import { IconItem, Link } from '../../atoms'
import { ICitiesDetailDrawer } from './CitiesDetailDrawer.interface'
import styles from './CitiesDetailDrawer.module.scss'

const CitiesDetailDrawer: React.FC<ICitiesDetailDrawer> = ({ cities }) => {
  return (
    <div className={styles['magneto-ui-cities-detail-drawer']}>
      <div className={styles['magneto-ui-cities-detail-drawer__item-detail-icon']}>
        <IconItem alt={'Location-icon'} icon={Location} hover={false} size={16} />
      </div>
      <div className={styles['magneto-ui-cities-detail-drawer__item-detail-text']}>
        {cities &&
          cities.map(({ name, url, title }, index) => (
            <div className={styles['magneto-ui-cities-detail-drawer__item-detail-text-link']} key={url}>
              <Link href={url} target="_blank" text={name} title={title} />
              {index !== cities.length - 1 && <span>{' - '}</span>}
            </div>
          ))}
      </div>
    </div>
  )
}

export default CitiesDetailDrawer
