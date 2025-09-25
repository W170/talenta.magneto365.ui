import React, { useMemo } from 'react'
import { useFieldContext } from '../../../../Field.context'
import { MobileDrawer } from '@components/UI/molecules'
import styles from './FieldListResponsive.module.scss'
import { classNames } from '@shared/utils/common'

const cx = classNames.bind(styles)

const BaseComponent: React.FC = ({ children }) => {
  const { isFocused, isMobile, setIsFocused } = useFieldContext()

  const Container = useMemo(() => (isMobile ? (MobileDrawer as React.ExoticComponent) : React.Fragment), [isMobile])

  const mobileProps = useMemo(
    () =>
      isMobile && {
        isOpen: isFocused,
        onClose: () => setIsFocused(false),
        className: cx('magneto-ui-field-list-responsive')
      },
    [isFocused, isMobile, setIsFocused]
  )

  return <Container {...mobileProps}>{children}</Container>
}

export const FieldListResponsive = BaseComponent
