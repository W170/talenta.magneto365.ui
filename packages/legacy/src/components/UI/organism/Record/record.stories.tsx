import React from 'react'
import { Meta } from '@storybook/react'
import { Record } from './record.component'
import { ArrowUpdate, Edit } from '@constants/icons.constants'
import styles from './record.module.scss'
import { classNames } from '@shared/utils/common'

const cx = classNames.bind(styles)

export const TimeLine = () => {
  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <Record>
        <Record.Body>
          <Record.Header>
            <Record.Title title="Actualización de datos" icon={ArrowUpdate} />
            <Record.Title title="Editado" className={cx('magneto-ui-title-custom')} icon={Edit} />
            <Record.Date date={'2025-01-31T14:20:00.000Z'} />
          </Record.Header>
        </Record.Body>
        <Record.Body>
          <Record.Header>
            <Record.Title title="Actualización de datos" icon={ArrowUpdate} />
            <Record.Title title="Eliminado" className={cx('magneto-ui-title-custom-delete')} icon={Edit} />
            <Record.Date date={'2025-01-31T14:20:00.000Z'} />
          </Record.Header>
        </Record.Body>
      </Record>
    </div>
  )
}

const meta: Meta<typeof Record> = {
  title: 'organism/Record',
  component: TimeLine
}

export default meta
