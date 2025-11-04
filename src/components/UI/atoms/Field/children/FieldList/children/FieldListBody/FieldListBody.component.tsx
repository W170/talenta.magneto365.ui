import React, { forwardRef, useMemo } from 'react'
import { screenSize } from '@constants/responsive.constants'
import { useFieldContext } from '../../../../Field.context'
import { IFieldListBody } from './FieldListBody.interface'
import { classNames } from '@shared/utils/common'
import styles from './FieldListBody.module.scss'

const cx = classNames.bind(styles)

function BaseComponent(
  { className, children, style, ...props }: IFieldListBody,
  ref: React.ForwardedRef<HTMLUListElement>
) {
  const { breakpoint, isDesktop, isMobile } = useFieldContext()

  const styles = useMemo(
    () => ({ ...style, '--breakpoint': `${screenSize[breakpoint || 'sm']}px` }),
    [breakpoint, style]
  )

  return (
    <ul
      {...props}
      ref={ref}
      data-lib="magneto-ui"
      data-slot="field-list-body"
      style={styles as React.CSSProperties}
      className={cx('magneto-ui-field-list-body', isDesktop ? 'magneto-ui-field-list-body--desktop' : '', className)}
    >
      {typeof children === 'function' ? children({ isDesktop, isMobile }) : children}
    </ul>
  )
}

const Component = forwardRef<HTMLUListElement, IFieldListBody>(BaseComponent)

/**
 * Atom UI of field. It includes .
 */
export const FieldListBody = Object.assign(Component, {})
