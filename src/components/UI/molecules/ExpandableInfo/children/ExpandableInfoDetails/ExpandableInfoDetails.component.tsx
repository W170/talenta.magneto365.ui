import React, { useCallback } from 'react'
import { IExpandableInfoDetailsProps } from './ExpandableInfoDetails.interface'
import CNM from '@utils/classNameManager/classNameManager.util'
import styles from './ExpandableInfoDetails.module.scss'
import { ExpandableInfoAction } from '..'

const Component: React.FC<IExpandableInfoDetailsProps> = ({ sections, footer }) => {
  const sectionStyles = useCallback(
    (multiple: boolean) =>
      CNM.get({
        styles,
        cls: ['expandable-info-details__section', multiple && 'expandable-info-details__section--multiple']
      }),
    []
  )

  const subSectionStyles = useCallback(
    (initial: boolean) =>
      CNM.get({
        styles,
        cls: ['expandable-info-details__sub-section', initial && 'expandable-info-details__sub-section--initial']
      }),
    []
  )

  const itemStyles = useCallback((first: boolean) => {
    return CNM.get({
      styles,
      cls: ['expandable-info-details__item', first && 'expandable-info-details__item--first']
    })
  }, [])

  const textStyles = useCallback(
    (bold: boolean) =>
      CNM.get({
        styles,
        cls: ['expandable-info-details__text', bold && 'expandable-info-details__text--bold']
      }),
    []
  )

  return (
    <div className={CNM.get({ styles, cls: ['expandable-info-details'] })}>
      <div className={CNM.get({ styles, cls: ['expandable-info-details__container'] })}>
        {sections?.map((section, index) => (
          <div key={`eids-${index}`} className={sectionStyles(section?.children?.length > 1)}>
            {section?.children?.map((subSection, subIndex) => (
              <div key={`eidss-${subIndex}`} className={subSectionStyles(index === 0)}>
                <div className={itemStyles(index === 0)}>
                  <span className={textStyles(true)}>{subSection.title}</span>
                  <span className={textStyles(false)}>{subSection.summary}</span>
                </div>
                <div>
                  {subSection.content?.map((content, lastIndex) => (
                    <div key={`eidsi-${lastIndex}`} className={itemStyles(false)}>
                      <span className={textStyles(false)}>{content.title}</span>
                      <span className={textStyles(false)}>{content.summary}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        ))}
        {footer?.title && footer.onAction && (
          <div className={CNM.get({ styles, cls: ['expandable-info-details__footer'] })}>
            <ExpandableInfoAction
              variant="white"
              title={footer?.title}
              onAction={footer?.onAction}
              className={CNM.get({ styles, cls: ['expandable-info-details__action'] })}
            />
          </div>
        )}
      </div>
    </div>
  )
}

/**
 * Molecule UI child component of expandable info
 */
export const ExpandableInfoDetails = Component
