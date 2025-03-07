import React, { useRef, useEffect } from 'react'
import { MiniArrowGrayDown, MiniArrowGrayUp } from '@constants/icons.constants'
import { useCandidateNav } from '../../CandidateNav.context'
import styles from './CandidateNavOptions.module.scss'
import { classNames } from '@shared/utils/common'

const cs = classNames.bind(styles)
const customScrollbarButtonsStyle = {
  '--custom-scrollbar-thumb-down-background': `url(${MiniArrowGrayDown})`,
  '--custom-scrollbar-thumb-up-background': `url(${MiniArrowGrayUp})`
}

const Component: React.FC = ({ children }) => {
  const { showOptions, onChangeOpen } = useCandidateNav()

  const wrapperRef = useRef<HTMLDivElement>(null)
  const listRef = useRef<HTMLUListElement>(null)

  /* const [initialFraction, setInitialFraction] = useState(1)
  const [startY, setStartY] = useState(0)

  const handleTouchStart = (event: React.TouchEvent) => {
    setStartY(event.touches[0].clientY)
    setInitialFraction(showOptions ? 1 : 0)
  }

  const handleTouchMove = (event: React.TouchEvent) => {
    if (!wrapperRef.current || !showOptions) return

    const clientY = event.touches[0].clientY
    const diffY = startY - clientY

    const containerHeight = wrapperRef.current.parentElement?.getBoundingClientRect().height || 1
    let newFraction = initialFraction + diffY / containerHeight

    newFraction = Math.max(0, Math.min(1, newFraction))
    wrapperRef.current.style.gridTemplateRows = `${newFraction}fr`

    if (newFraction > 1 && window.scrollY === 0) {
      event.preventDefault()
    }

    if (newFraction < 0.9) {
      onChangeOpen()
    }
  }

  const handleTouchEnd = () => {
    if (!wrapperRef.current || !showOptions) return

    const finalFraction = parseFloat(wrapperRef.current.style.gridTemplateRows)

    if (finalFraction < 0.5) {
      onChangeOpen()
    } else {
      wrapperRef.current.style.gridTemplateRows = '1fr'
    }
  } */

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
      /* onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd} */
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
          <ul ref={listRef} className={cs('magneto-ui-candidate-nav-options__list')}>
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
