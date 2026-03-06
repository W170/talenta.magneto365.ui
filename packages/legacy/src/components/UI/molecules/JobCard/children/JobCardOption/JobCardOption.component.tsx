import React, { useEffect, useRef } from 'react'
import { withClickOut } from '@components/hoc'
import { More } from '@constants/icons.constants'
import { IconItem, Popover } from '@components/UI/atoms'
import { classNames, stubUndefined } from '@shared/utils/common'
import { VacantOption } from '@components/UI/molecules/VacantOption'
import { IJobCardOption } from './JobCardOption.interface'
import styles from './JobCardOption.module.scss'

const cx = classNames.bind(styles)

const JobCardOption: React.FC<IJobCardOption> = ({ clickOut = false, setClickOut = stubUndefined, menu }) => {
  const ref = useRef<HTMLDivElement>(null)

  const toggle = () => setClickOut((prev) => !prev)

  useEffect(() => {
    const onBlurWindow = () => {
      setClickOut(false)
    }
    window?.addEventListener?.('blur', onBlurWindow)
    return () => {
      window?.removeEventListener?.('blur', onBlurWindow)
    }
  }, [setClickOut])

  return (
    <Popover
      className={cx('popover', { 'popover--open': clickOut })}
      content={
        <div onBlur={toggle} ref={ref}>
          {menu.map((option) => (
            <VacantOption key={option.label} onClick={toggle} option={option} />
          ))}
        </div>
      }
      show={clickOut}
      widthBase={35}
      positionX="left"
      positionY="bottom"
    >
      <button
        type="button"
        className={cx('button')}
        onClick={() => {
          setClickOut((prev) => {
            if (!prev) {
              ref.current?.focus()
            }
            return !prev
            ref.current
          })
        }}
      >
        <IconItem icon={More} size={18} />
      </button>
    </Popover>
  )
}

export default withClickOut(JobCardOption)
