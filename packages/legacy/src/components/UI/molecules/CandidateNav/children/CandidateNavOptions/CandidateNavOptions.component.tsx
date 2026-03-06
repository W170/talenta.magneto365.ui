import React, { useRef, useEffect } from 'react'
import { MiniArrowGrayDown, MiniArrowGrayUp } from '@constants/icons.constants'
import { TCandidateNavOptions } from './CandidateNavOptions.interface'
import { useCandidateNav } from '../../CandidateNav.context'
import styles from './CandidateNavOptions.module.scss'
import { classNames } from '@shared/utils/common'

const cs = classNames.bind(styles)
const customScrollbarButtonsStyle = {
  '--custom-scrollbar-thumb-down-background': `url(${MiniArrowGrayDown})`,
  '--custom-scrollbar-thumb-up-background': `url(${MiniArrowGrayUp})`
}

const Component: React.FC<TCandidateNavOptions> = ({ children, className, ...props }) => {
  const { showOptions, onChangeOpen } = useCandidateNav()

  const wrapperRef = useRef<HTMLDivElement>(null)
  const listRef = useRef<HTMLUListElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
        onChangeOpen(false)
      }
    }

    if (showOptions !== false) {
      wrapperRef.current?.focus()
      document.addEventListener('click', handleClickOutside)
    }

    return () => {
      document.removeEventListener('click', handleClickOutside)
    }
  }, [showOptions, onChangeOpen])

  useEffect(() => {
    if (showOptions) {
      listRef.current?.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }, [showOptions])

  return (
    <div
      ref={wrapperRef}
      className={cs('magneto-ui-candidate-nav-options', {
        'magneto-ui-candidate-nav-options--visible': showOptions
      })}
      style={{ gridTemplateRows: showOptions ? '1fr' : '0fr', ...customScrollbarButtonsStyle }}
      tabIndex={-1}
    >
      <div
        className={cs('magneto-ui-candidate-nav-options__container', {
          'magneto-ui-candidate-nav-options__container--visible': showOptions
        })}
      >
        <div
          className={cs('magneto-ui-candidate-nav-options__content', {
            'magneto-ui-candidate-nav-options__content--visible': showOptions
          })}
        >
          <div className={cs('magneto-ui-candidate-nav-options__closable-area')} onClick={() => onChangeOpen(false)}>
            <button className={cs('magneto-ui-candidate-nav-options__line')} />
          </div>
          <ul {...props} ref={listRef} className={cs('magneto-ui-candidate-nav-options__list', className)}>
            {children}
          </ul>
        </div>
      </div>
    </div>
  )
}

/**
 * Molecule UI component child of Candidate Nav
 */
export const CandidateNavOptions = Component
