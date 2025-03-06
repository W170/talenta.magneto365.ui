import React, { useEffect, useState, useCallback } from 'react'
import { IQualification } from './Qualification.interface'
import { QUALIFICATION } from './Qualification.constants'
import { classNames } from '@shared/utils/common'
import styles from './Qualification.module.scss'

const cx = classNames.bind(styles)

const Component: React.FC<IQualification> = ({ rating = -1, onClick }) => {
  const [qualification, setQualification] = useState<number>(-1)
  const [hover, setHover] = useState<number>(-1)

  const onClickQualification = useCallback(
    (value: number) => {
      onClick?.(value)
      setQualification(value)
    },
    [onClick]
  )

  useEffect(() => {
    if (rating > 0 && rating <= 5) {
      setQualification(Math.round(rating) - 1)
    }
  }, [rating])

  return (
    <ul className={cx('magneto-ui-qualification')}>
      {QUALIFICATION.map(({ alt, icon, iconHover, iconSelect }, index) => (
        <li
          className={cx('magneto-ui-qualification__star')}
          onMouseEnter={() => setHover(index)}
          onMouseLeave={() => setHover(-1)}
          onClick={() => onClickQualification(index)}
          key={`qualification-star-${index}`}
        >
          <img
            alt={alt}
            src={index <= Number(qualification) ? iconSelect : index <= Number(hover) ? iconHover : icon}
          />
        </li>
      ))}
    </ul>
  )
}
/**
 * Atom Ui component of Qualification
 *
 */
export const Qualification = Component
