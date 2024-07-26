import React, { useCallback, useState } from 'react'
import { IconItem } from '@components/UI/atoms'
import styles from './ModalAnalystFooter.module.scss'
import { LOADING_ICONS } from './ModalAnalystFooter.constants'
import CNM from '@utils/classNameManager/classNameManager.util'
import { IModalAnalystAction, IModalAnalystLoading } from './ModalAnalystFooter.interface'
import { IModalAnalystFooterProps } from './ModalAnalystFooter.interface'
import { MODAL_ICONS } from '../../ModalAnalyst.constants'

const Component: React.FC<IModalAnalystFooterProps> = ({ footer, handleClose, name, setStep }) => {
  const { hasTopDivider, actions } = footer || {}
  const [loading, setLoading] = useState<IModalAnalystLoading[]>(
    Array.from({ length: actions?.length || 0 }, (_, i) => ({
      title: actions?.length ? actions[i].title : '',
      loading: false
    }))
  )

  const getLoading = useCallback(
    (action: IModalAnalystAction) => loading.find((localAction) => localAction.title === action.title)?.loading,
    [loading]
  )

  const setterLoading = useCallback(
    (title?: string, value?: boolean) =>
      loading.map((localAction) => (localAction.title === title ? { ...localAction, loading: value } : localAction)),
    [loading]
  )

  const handleOnClick = useCallback(
    async ({ action, title }: IModalAnalystAction) => {
      if (action && !loading.some((action) => action.loading)) {
        setLoading(setterLoading(title, true))
        const { step: newStep, closeModal } = (await action()) || { step: 0, closeModal: false }
        setLoading(setterLoading(title, false))

        if (newStep) {
          setStep(newStep)
        }
        if (closeModal) {
          handleClose(name, false)
          setStep(0)
        }
      }
    },
    [setStep, handleClose, setterLoading, loading, name]
  )

  return (
    <div
      className={CNM.get({
        styles,
        cls: ['modal-analyst-footer', hasTopDivider && 'modal-analyst-footer--top-divider']
      })}
    >
      {actions?.map((action) => (
        <button
          key={action.title}
          onClick={() => handleOnClick(action)}
          type="button"
          className={CNM.get({
            styles,
            cls: [
              'modal-analyst-footer__button',
              `modal-analyst-footer__button--${action.type}`,
              getLoading(action) && 'modal-analyst-footer__button--loading'
            ]
          })}
        >
          <div
            className={CNM.get({
              styles,
              cls: [
                'modal-analyst-footer__prefix-icon-container',
                action.loading && 'modal-analyst-footer__prefix-icon-container--active',
                (action.prefixIcon || getLoading(action)) && 'modal-analyst-footer__prefix-icon-container--margin-right'
              ]
            })}
          >
            <span
              className={CNM.get({
                styles,
                cls: [
                  'modal-analyst-footer__prefix-loading',
                  getLoading(action) && 'modal-analyst-footer__prefix-loading--active',
                  !action.prefixIcon && getLoading(action) && 'modal-analyst-footer__prefix-loading--empty-icon'
                ]
              })}
            >
              <IconItem icon={LOADING_ICONS[action.type]} size={20} showDefaultFallback={false} />
            </span>
            <IconItem
              showDefaultFallback={false}
              className={CNM.get({
                styles,
                cls: [
                  'modal-analyst-footer__prefix-icon',
                  getLoading(action) && 'modal-analyst-footer__prefix-icon--inactive',
                  action.prefixIcon?.className
                ]
              })}
              {...action.prefixIcon}
              icon={
                action.prefixIcon?.icon && MODAL_ICONS[action.prefixIcon?.icon]
                  ? MODAL_ICONS[action.prefixIcon?.icon]
                  : action.prefixIcon?.icon
              }
            />
          </div>
          <span>{action.title}</span>
        </button>
      ))}
    </div>
  )
}

/**
 * Molecule UI child component of modal analyst
 */
export const ModalAnalystFooter = Component
