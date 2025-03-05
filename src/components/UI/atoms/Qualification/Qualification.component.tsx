import React, { useEffect, useState } from 'react'
import { IQualification } from './Qualification.interface'
import { QUALIFICATION } from './Qualification.constants'
import styles from './Qualification.module.scss'
import { classNames } from '@shared/utils/common'
const cx = classNames.bind(styles)

const Component: React.FC<IQualification> = ({ rating = -1, onClick }) => {
  const [Qualification, setQualification] = useState<number>(-1)
  const [hover, setHover] = useState<number>(-1)

  useEffect(() => {
    if (rating > 0 && rating <= 5) {
      setQualification(Math.round(rating) - 1)
    }
  }, [rating])

  const onClickQualification = (value: number) => {
    onClick && onClick(value)
    setQualification(value)
  }

  return (
    <div className={cx('qualification')}>
      {QUALIFICATION.map(({ alt, icon, iconHover, iconSelect }, index) => (
        <div
          className={cx('qualification_star')}
          onMouseEnter={() => setHover(index)}
          onMouseLeave={() => setHover(-1)}
          onClick={() => onClickQualification(index)}
          key={index}
        >
          <img
            alt={alt}
            src={index <= Number(Qualification) ? iconSelect : index <= Number(hover) ? iconHover : icon}
          />
        </div>
      ))}
    </div>
  )
}
/**
 * Atom Ui component of Qualification
 *
 */
export const Qualification = Component
