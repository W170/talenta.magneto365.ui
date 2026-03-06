import React, { useCallback, useEffect, useState } from 'react'
import { SwipeMode, SwipeProps } from './Swipe.interface'
import { MobileDrawer } from '@components/UI/molecules'
import { SwipeLeft, SwipeRight } from '@constants/gifs.constants'
import style from './Swipe.module.scss'
import { MainButton } from '@components/UI/atoms'

const Swipe: React.FC<SwipeProps> = ({
  onSwipeLeft,
  onSwipeRight,
  children,
  openModal,
  onCloseModal,
  modalConfirmText,
  modalLeftText,
  modalRightText,
  modalTitle
}) => {
  const [startX, setStartX] = useState(0)
  const [endX, setEndX] = useState(0)

  const [isSwiping, setIsSwiping] = useState(false)
  const [swipe, setSwipe] = useState<SwipeMode | null>(null)

  const restoreValues = useCallback(() => {
    setIsSwiping(false)
    setStartX(0)
    setEndX(0)
  }, [])

  const handleTouchStart = useCallback((event) => {
    const touch = event.touches[0]
    setStartX(touch.clientX)
    setIsSwiping(true)
  }, [])

  const handleTouchMove = useCallback(
    (event) => {
      if (!isSwiping) return
      const touch = event.touches[0]
      setEndX(touch.clientX)
    },
    [isSwiping]
  )

  const handleTouchEnd = useCallback(() => {
    if ([startX, endX].includes(0)) return
    restoreValues()
    const deltaX = endX - startX
    const deltaAbs = Math.abs(deltaX)
    deltaAbs > 40 && setSwipe(deltaX > 0 ? SwipeMode.RIGHT : SwipeMode.LEFT)
  }, [endX, restoreValues, startX])

  useEffect(() => {
    if (swipe == null || !onSwipeRight || !onSwipeLeft) return
    setSwipe(null)
    swipe == SwipeMode.RIGHT ? onSwipeRight() : onSwipeLeft()
  }, [isSwiping, onSwipeLeft, onSwipeRight, swipe])

  const swipeGif = useCallback(
    (image, title) => (
      <div className={style[`magneto-ui-swipe__image--content`]}>
        <p className={style[`magneto-ui-swipe__image--title`]}>{title}</p>
        <img src={image} height={130} />
      </div>
    ),
    []
  )
  const hiddenModal = useCallback(() => {
    onCloseModal && onCloseModal()
  }, [onCloseModal])
  return (
    <div onTouchStart={handleTouchStart} onTouchMove={handleTouchMove} onTouchEnd={handleTouchEnd} className="swipe">
      {children}

      <MobileDrawer isOpen={openModal ?? false} onClose={hiddenModal}>
        <p className={style[`magneto-ui-swipe__modal--title`]}>{modalTitle}</p>
        <div className={style[`magneto-ui-swipe__modal`]}>
          {swipeGif(SwipeLeft, modalLeftText)}
          {swipeGif(SwipeRight, modalRightText)}
        </div>
        <MainButton
          buttonType="button"
          buttonText={modalConfirmText}
          buttonSize="full"
          className={style[`magneto-ui-swipe__modal--action`]}
          onClick={hiddenModal}
          buttonStyles={{
            buttonColor: '#090467',
            textColor: '#FFFFFF',
            spacing: '25px'
          }}
        />
      </MobileDrawer>
    </div>
  )
}

export default Swipe
