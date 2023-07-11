import React, { useMemo } from 'react'
import { classMUI } from '../../../../constants/stories.constants'
import { ArrowRight2 } from '../../../../constants/icons.constants'
import { IconItem } from '../../atoms'
import style from './JobDetailContainer.module.scss'
import { IJobDetailContainer } from './JobDetailContainer.interface'

const JobDetailContainer: React.FC<IJobDetailContainer> = ({ children, isOpen = false, onClose }) => {
  console.log('🚀 ', isOpen)
  const toggleMenu = useMemo(() => {
    return isOpen ? style['is-open'] : ' '
  }, [isOpen])

  return (
    <div className={`${style[`${classMUI}-job-detail-container`]} ${toggleMenu}`}>
      <button type="button" onClick={onClose} className={style[`${classMUI}-job-detail-container--btn`]}>
        <IconItem Icon={ArrowRight2} />
      </button>
      {children}
    </div>
  )
}

export default JobDetailContainer
