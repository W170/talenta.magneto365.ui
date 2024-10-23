import React, { useEffect, useRef } from 'react'
import { withClickOut } from '@components/hoc'
import { classNames } from '@shared/utils/common'
import { Select } from '../../Select.component'
import styles from './SelectClickout.module.scss'

const cx = classNames.bind(styles)

type Props = {
  clickOut: boolean
  setClickOut: (value: boolean) => void
}

const SelectClickout: React.FC<Props> = ({ children, clickOut, setClickOut }) => {
  const { onSwitch, open } = Select.useContext()

  const ref = useRef({ onSwitch, setClickOut })

  useEffect(() => {
    ref.current.onSwitch = onSwitch
    ref.current.setClickOut = setClickOut
  }, [onSwitch, setClickOut])

  useEffect(() => {
    ref.current.setClickOut(open)
  }, [open])

  useEffect(() => {
    if (!clickOut) ref.current.onSwitch(false)
  }, [clickOut])

  if (open) return <div className={cx('select-click-out')}>{children}</div>

  return null
}

export default withClickOut(SelectClickout)
