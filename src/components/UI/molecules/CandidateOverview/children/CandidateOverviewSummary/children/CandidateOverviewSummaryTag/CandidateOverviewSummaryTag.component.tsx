import React, { useCallback, useMemo } from 'react'
import { IconItem } from '@components/UI/atoms'
import { ICandidateOverviewSummaryTagProps } from './CandidateOverviewSummaryTag.interface'
import { candidateOverviewIcons } from '../../../../CandidateOverview.constants'
import { ICandidateOverviewText } from '../../../../CandidateOverview.interface'
import parentStyles from '../../../../CandidateOverview.module.scss'
import { classNames } from '@shared/utils/common'

const pCx = classNames.bind(parentStyles)

const Component: React.FC<ICandidateOverviewSummaryTagProps> = ({ text, tag = 'div' }) => {
  const isLink = useMemo(() => text?.data && typeof text?.data === 'string', [text])

  const isFunction = useMemo(() => text?.data && typeof text?.data === 'function', [text])

  const href = useMemo(() => (isLink ? (text?.data as string) : undefined), [isLink, text])

  const onClick = useCallback(
    () => (isFunction ? (text?.data as (text?: ICandidateOverviewText) => void)(text) : undefined),
    [isFunction, text]
  )

  const Component = useMemo(() => (isLink ? 'a' : tag), [isLink, tag])

  const styles = useCallback(
    (text?: ICandidateOverviewText) => {
      return pCx(
        'magneto-ui-candidate-overview__text',
        isLink ? 'magneto-ui-candidate-overview__text--link' : null,
        isFunction ? 'magneto-ui-candidate-overview__text--function' : null,
        text?.size && `magneto-ui-candidate-overview__text--size-${text.size}`,
        text?.color && `magneto-ui-candidate-overview__text--color-${text.color}`,
        text?.weight && `magneto-ui-candidate-overview__text--weight-${text.weight}`
      )
    },
    [isLink, isFunction]
  )

  return (
    <React.Fragment>
      {text?.prefixIcon && (
        <IconItem
          size={14}
          showDefaultFallback={false}
          {...text.prefixIcon}
          icon={
            text.prefixIcon.icon && candidateOverviewIcons[text.prefixIcon.icon]
              ? candidateOverviewIcons[text.prefixIcon.icon]
              : text.prefixIcon.icon
          }
        />
      )}
      <Component href={href} onClick={onClick} className={styles(text)}>
        {text?.value}
      </Component>
      {text?.suffixIcon && (
        <IconItem
          size={14}
          showDefaultFallback={false}
          {...text.suffixIcon}
          icon={
            text.suffixIcon.icon && candidateOverviewIcons[text.suffixIcon.icon]
              ? candidateOverviewIcons[text.suffixIcon.icon]
              : text.suffixIcon.icon
          }
        />
      )}
    </React.Fragment>
  )
}

/**
 * Molecule UI child component of candidate overview summary
 */
export const CandidateOverviewSummaryTag = Component
