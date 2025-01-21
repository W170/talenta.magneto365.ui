import React, { useState, useCallback } from 'react'
import { Tag } from '@components/UI/atoms'
import { Input } from '@components/UI/molecules'
import { classNames } from '@shared/utils/common'
import { Tag as TagIcon, Close } from '@constants/icons.constants'
import { ICandidateTags } from './CandidateTags.interface'
import styles from './CandidateTags.module.scss'

const cx = classNames.bind(styles)

const Component: React.FC<ICandidateTags> = ({ title, description, inputProps, onAdd, onRemove, value }) => {
  const [inputHasFocus, setInputHasFocus] = useState<boolean>(false)
  const [inputValue, setInputValue] = useState<string>('')
  const { buttonText, ...filteredInputProps } = inputProps

  const handleOnInputChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value)
  }, [])

  const handleInputFocus = useCallback((evt: React.FocusEvent<HTMLInputElement>) => {
    setInputHasFocus(evt.target === document.activeElement)
  }, [])

  const handleOnSave = useCallback(() => {
    if (inputValue === '') return

    onAdd(inputValue)

    setInputValue('')
  }, [inputValue, onAdd])

  const handleOnRemove = useCallback(
    (tag: string) => {
      onRemove(tag)
    },
    [onRemove]
  )

  return (
    <section className={cx('magneto-ui-candidate-tags')}>
      <div className={cx('magneto-ui-candidate-tags__container')}>
        <header className={cx('magneto-ui-candidate-tags__header')}>
          <h2 className={cx('magneto-ui-candidate-tags__title')}>{title}</h2>
        </header>
        <div className={cx('magneto-ui-candidate-tags__content')}>
          <p className={cx('magneto-ui-candidate-tags__description')}>{description}</p>
          <div
            className={cx(
              'magneto-ui-candidate-tags__input',
              `magneto-ui-candidate-tags__input--${inputHasFocus ? 'active' : 'disabled'}`
            )}
            onFocus={handleInputFocus}
            onBlur={handleInputFocus}
          >
            <Input
              value={inputValue}
              onChange={handleOnInputChange}
              customIcon={TagIcon}
              type="text"
              {...filteredInputProps}
            />
            <button
              onClick={handleOnSave}
              className={cx(
                'magneto-ui-candidate-tags__button',
                `magneto-ui-candidate-tags__button--${inputHasFocus ? 'active' : 'disabled'}`
              )}
            >
              {buttonText}
            </button>
          </div>
        </div>
        <footer className={cx('magneto-ui-candidate-tags__footer')}>
          <ul className={cx('magneto-ui-candidate-tags__list')}>
            {value.map((tag, index) => (
              <li key={`candidate-tags-${index}`} className={cx('magneto-ui-candidate-tags__tag')}>
                <Tag text={tag} icon={Close} onClick={() => handleOnRemove(tag)} bgColor="#f0f1f3" />
              </li>
            ))}
          </ul>
        </footer>
      </div>
    </section>
  )
}

/**
 *  Organism UI component of candidate tags
 */
export const CandidateTags = Component
