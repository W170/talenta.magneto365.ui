import React, { useCallback, useEffect, useState } from 'react'
import { IconItem } from '@components/UI/atoms'
import { classNames } from '@shared/utils/common'
import { More, ArrowLeft2 } from '@constants/icons.constants'
import { TVacantOption } from '@components/Domain/Jobs/JobsPage'
import { MobileDrawer } from '@components/UI/molecules/MobileDrawer'
import { IJobCardOptionDrawer } from './JobCardOptionDrawer.interface'
import { VacantOptionMobile } from '@components/UI/molecules/VacantOption/children/VacantOptionMobile'
import styles from './JobCardOptionDrawer.module.scss'

const cx = classNames.bind(styles)

export const JobCardOptionDrawer: React.FC<IJobCardOptionDrawer> = ({ title, company, menu, backText }) => {
  const [isOpen, setOpen] = useState(false)
  const [showBack, setShowBack] = useState(false)
  const [options, setOptions] = useState(menu)

  const toggle = () => setOpen((prev) => !prev)

  const handleMenu = useCallback((options: TVacantOption[], showBack = true) => {
    setOptions(options)
    setShowBack(showBack)
  }, [])

  useEffect(() => {
    const onBlurWindow = () => {
      setOpen(false)
      handleMenu(menu, false)
    }
    window?.addEventListener?.('blur', onBlurWindow)
    return () => {
      window?.removeEventListener?.('blur', onBlurWindow)
    }
  }, [handleMenu, menu])

  return (
    <>
      <button onClick={toggle} className={cx('button')} type="button">
        <IconItem icon={More} size={18} />
      </button>
      <MobileDrawer className={cx('drawer')} isOpen={isOpen} onClose={toggle}>
        <header className={cx('drawer__header')}>
          {showBack ? (
            <section>
              <button type="button" className={cx('button-back')} onClick={() => handleMenu(menu, false)}>
                <IconItem icon={ArrowLeft2} size={20} /> {backText}
              </button>
            </section>
          ) : null}
          <h4 className={cx('drawer__title')}>{title}</h4>
          <h5 className={cx('drawer__company')}>{company}</h5>
        </header>
        <div>
          {options.map((option, index) => (
            <VacantOptionMobile
              key={index + option.label}
              option={option}
              onMenu={handleMenu}
              onClick={() => {
                toggle()
                handleMenu(menu, false)
              }}
            />
          ))}
        </div>
      </MobileDrawer>
    </>
  )
}
