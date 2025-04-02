import React from 'react'
import { TCollapseBody } from './CollapseBody.interface'
import { useCollapse } from '../../Collapse.context'
import { classNames } from '@shared/utils/common'
import styles from './CollapseBody.module.scss'

const cx = classNames.bind(styles)

const Component: React.FC<TCollapseBody> = ({ className, children, ...props }) => {
  const { open } = useCollapse()

  return (
    <div
      {...props}
      className={cx('magneto-ui-collapse-body', {
        'magneto-ui-collapse-body--visible': open
      })}
    >
      <div
        className={cx('magneto-ui-collapse-body__container', {
          'magneto-ui-collapse-body__container--visible': open
        })}
      >
        <div
          className={cx(
            'magneto-ui-collapse-body__content',
            {
              'magneto-ui-collapse-body__content--visible': open
            },
            className
          )}
        >
          {children}
        </div>
      </div>
    </div>
  )
}

/**
 * Atom UI component child of Collapse
 */
export const CollapseBody = Component
