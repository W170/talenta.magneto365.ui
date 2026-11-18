import React, { useCallback, useRef, useState } from 'react'
import { IconItem } from '@components/UI/atoms'
import {
  IUserMenuAnalystOptionActionProps,
  IUserMenuAnalystOptionActionsProps
} from './UserMenuAnalystOptionActions.interface'
import { Tooltip } from '@components/UI/molecules'
import { userMenuAnalystIcons } from '@components/UI/molecules/UserMenuAnalyst/UserMenuAnalyst.constants'
import { AnimatedSpinnerBlack } from '@constants/icons.constants'

const Component: React.FC<IUserMenuAnalystOptionActionsProps> = ({
  actions,
  handleModal,
  handleMenuOpen,
  getUrl,
  option
}) => {
  return (
    <React.Fragment>
      {actions.map((action, index) => (
        <Tooltip key={`${action.title}-${index}`} title={action.title || ''} position="bottom" width="fit-content">
          <Action
            action={action}
            getUrl={getUrl}
            option={option}
            handleModal={handleModal}
            handleMenuOpen={handleMenuOpen}
          >
            <IconItem
              showDefaultFallback={false}
              size={16}
              icon={action.icon && userMenuAnalystIcons[action.icon] ? userMenuAnalystIcons[action.icon] : action.icon}
            />
          </Action>
        </Tooltip>
      ))}
    </React.Fragment>
  )
}

const Action: React.FC<IUserMenuAnalystOptionActionProps> = ({
  action,
  children,
  handleModal,
  handleMenuOpen,
  getUrl,
  option
}) => {
  const [isLoading, setIsLoading] = useState(false)
  const isLoadingRef = useRef(false)

  const handleOnClick = useCallback(async () => {
    if (isLoadingRef.current) return
    if (action.modal && handleModal && handleMenuOpen) {
      handleMenuOpen(false)
      return handleModal(action.modal.name, true, action.modal.data)
    }
    if (typeof action.data !== 'function') return

    const result = action.data(option)
    const pending =
      typeof result === 'object' && result !== null && typeof (result as Promise<void>).then === 'function'
    if (!pending) return

    isLoadingRef.current = true
    setIsLoading(true)
    try {
      await result
    } finally {
      isLoadingRef.current = false
      setIsLoading(false)
    }
  }, [action, handleModal, handleMenuOpen, option])

  return typeof action.data === 'function' || action.modal ? (
    <button
      type="button"
      onClick={handleOnClick}
      aria-busy={isLoading}
      style={isLoading ? { opacity: 1, visibility: 'visible', pointerEvents: 'none' } : undefined}
    >
      {isLoading ? <IconItem showDefaultFallback={false} size={16} icon={AnimatedSpinnerBlack} /> : children}
    </button>
  ) : (
    <a href={getUrl(action)} rel={action.rel || 'noreferrer'} target={action.target || '_self'}>
      {children}
    </a>
  )
}

/**
 * Molecule UI great-grand child component of menu dropdown
 */
export const UserMenuAnalystOptionActions = React.memo(Component)
