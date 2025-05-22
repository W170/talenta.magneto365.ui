import React from 'react'
import { classNames } from '@shared/utils/common'
import styles from './DesignSystem.module.scss'

const cx = classNames.bind(styles)

const Component: React.FC = () => {
  return (
    <div className={cx('magneto-ui-design-system__preview')}>
      <div className={cx('magneto-ui-design-system__container')} style={{ marginBottom: '2rem' }}>
        <h2 className={cx('magneto-ui-design-system__title')}>SCSS vars usage</h2>
        <code>{`@import '../../../shared/stylesheets/tokens';`}</code>
        <code>{`.button { background-color: $color-blue-dark-400; }`}</code>

        <div>-------------------------- or --------------------------</div>

        <code>{`@use '../../../shared/stylesheets/tokens' as m;`}</code>
        <code>{`.button { background-color: m.$color-blue-dark-400; }`}</code>
      </div>

      <div className={cx('magneto-ui-design-system__container')}>
        <h2 className={cx('magneto-ui-design-system__title')}>Utility classes usage</h2>
        <code>{`<span className="w-md h-lg">Hi!</span>`}</code>
      </div>
    </div>
  )
}

export const DesignSystem = Component
