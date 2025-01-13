import React, { useState, useCallback } from 'react'
import { ICandidateComments } from './CandidateComments.interface'
import { Input, Comment } from '@components/UI/molecules'
import { MessageText1 } from '@constants/icons.constants'
import styles from './CandidateComments.module.scss'
import { classNames } from '@shared/utils/common'

const cx = classNames.bind(styles)

const Component: React.FC<ICandidateComments> = ({ title, description, inputProps, onAdd, value }) => {
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

  return (
    <section className={cx('magneto-ui-candidate-comments')}>
      <div className={cx('magneto-ui-candidate-comments__container')}>
        <header className={cx('magneto-ui-candidate-comments__header')}>
          <h2 className={cx('magneto-ui-candidate-comments__title', 'magneto-ui-candidate-comments__title--main')}>
            {title}
          </h2>
        </header>
        <div className={cx('magneto-ui-candidate-comments__content')}>
          <p className={cx('magneto-ui-candidate-comments__description')}>{description}</p>
          <div
            className={cx(
              'magneto-ui-candidate-comments__input',
              `magneto-ui-candidate-comments__input--${inputHasFocus ? 'active' : 'disabled'}`
            )}
            onFocus={handleInputFocus}
            onBlur={handleInputFocus}
          >
            <Input
              value={inputValue}
              onChange={handleOnInputChange}
              customIcon={MessageText1}
              type="text"
              {...filteredInputProps}
            />
            <button
              onClick={handleOnSave}
              className={cx(
                'magneto-ui-candidate-comments__button',
                `magneto-ui-candidate-comments__button--${inputHasFocus ? 'active' : 'disabled'}`
              )}
            >
              {buttonText}
            </button>
          </div>
        </div>
        <footer className={cx('magneto-ui-candidate-comments__footer')}>
          <ul className={cx('magneto-ui-candidate-comments__sections')}>
            {value.map((section, sectionIndex) => (
              <li
                key={`candidate-comments-section-${sectionIndex}`}
                className={cx('magneto-ui-candidate-comments__section')}
              >
                <h3
                  className={cx(
                    'magneto-ui-candidate-comments__title',
                    'magneto-ui-candidate-comments__title--secondary'
                  )}
                >
                  {section.title}
                </h3>
                <div className={cx('magneto-ui-candidate-comments__sub-sections')}>
                  {section.children?.map((subSection, subSectionIndex) => (
                    <ul
                      key={`candidate-comments-subsection-${subSectionIndex}`}
                      className={cx('magneto-ui-candidate-comments__sub-section')}
                    >
                      <li className={cx('magneto-ui-candidate-comments__sub-section-item')}>
                        {subSection.title && (
                          <h4 className={cx('magneto-ui-candidate-comments__sub-title')}>{subSection.title}</h4>
                        )}
                        <ul className={cx('magneto-ui-candidate-comments__comments')}>
                          {subSection.children?.map((comment, index) => (
                            <li key={`candidate-comments-comment-${index}`}>
                              <Comment {...comment} />
                            </li>
                          ))}
                        </ul>
                      </li>
                    </ul>
                  ))}
                </div>
              </li>
            ))}
          </ul>
        </footer>
      </div>
    </section>
  )
}

/**
 *  Organism UI component of candidate comments
 */
export const CandidateComments = Component
