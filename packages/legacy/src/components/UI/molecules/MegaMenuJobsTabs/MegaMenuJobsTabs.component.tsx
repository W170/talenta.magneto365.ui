import React, { useCallback, useMemo, useState } from 'react'
import style from './MegaMenuJobsTabs.module.scss'
import { megaMenuJobsIcons } from '@constants/stories'
import { Divider } from '@components/UI/atoms'
import { useMegaMenuJobs } from '@components/UI/template/MegaMenu/MegaMenu.context'
import { ButtonLink } from '@components/UI/atoms/ButtonLink'
import { ArrowRight2 } from '@constants/icons.constants'

const MegaMenuJobsTabs: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState<number>(0)
  const { tabs, onChangeTab, allJobsAction } = useMegaMenuJobs()

  const onClickTab = useCallback(
    (index: number) => () => {
      setSelectedTab(index)
      onChangeTab && onChangeTab(index)
    },
    [onChangeTab]
  )
  const isSelectedTab = useCallback((index: number) => selectedTab == index, [selectedTab])

  const { content } = useMemo(() => tabs[selectedTab], [tabs, selectedTab])

  return (
    <div className={`${style[`mega-menu-jobs-tabs__container`]}`}>
      <nav>
        <ul className={`${style[`mega-menu-jobs-tabs`]}`}>
          {tabs &&
            tabs.map(({ label, url }, index) => (
              <li key={index}>
                <ButtonLink
                  buttonText={label}
                  href={url}
                  onClick={onClickTab(index)}
                  suffixIcon={megaMenuJobsIcons[index]}
                  className={`${style[`mega-menu-jobs-tabs__tab`]} ${
                    isSelectedTab(index) ? style[`selected-tab`] : ''
                  }`}
                  target={'_blank'}
                  iconSize={16}
                />
              </li>
            ))}
          <Divider direction={'VERTICAL'} />
          <li>
            <ButtonLink
              buttonText={allJobsAction?.label ?? ''}
              href={allJobsAction?.url ?? ''}
              onClick={allJobsAction?.onClick}
              prefixIcon={ArrowRight2}
              iconSize={14}
            />
          </li>
        </ul>
      </nav>
      <Divider />
      <div className={`${style[`mega-menu-jobs-tabs__content`]}`}>{content}</div>
    </div>
  )
}

export default MegaMenuJobsTabs
