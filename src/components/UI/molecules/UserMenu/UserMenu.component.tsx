import React, { useCallback, useEffect, useRef, useState } from 'react'
import { Avatar, Popover } from '../../atoms'
import { ListMenuIcons } from '../ListMenuIcons'
import { IMenuUser } from './UserMenu.interface'

export const Component: React.FC<IMenuUser> = ({ listMenuUserProps, className, profileImage }) => {
  const [showPopover, setShowPopover] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  const handleClick = useCallback(
    (e: MouseEvent) => {
      if (showPopover) {
        if (ref.current && !ref.current.contains(e.target as Node)) {
          setShowPopover(!showPopover)
        }
      }
    },
    [showPopover]
  )

  useEffect(() => {
    document.addEventListener('click', handleClick)
    return () => {
      document.removeEventListener('click', handleClick)
    }
  }, [handleClick])

  return (
    <div className={className}>
      <Popover
        show={showPopover}
        content={
          <div ref={ref}>
            <ListMenuIcons {...listMenuUserProps} />
          </div>
        }
        width={300}
        positionX="left"
        positionY="bottom"
      >
        <Avatar {...profileImage} onClick={() => setShowPopover(!showPopover)} />
      </Popover>
    </div>
  )
}

export const UserMenu = Component
