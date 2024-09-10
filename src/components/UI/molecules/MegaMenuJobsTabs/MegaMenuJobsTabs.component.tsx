import React, { useCallback, useMemo, useState } from 'react'
import style from './MegaMenuJobsTabs.module.scss'
import { megaMenuJobsIcons } from '@constants/stories'
import { Button, Divider, SearchItem } from '@components/UI/atoms'
import { useMegaMenuJobs } from '@components/UI/template/MegaMenu/MegaMenu.context'

const MegaMenuJobsTabs: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState<number>(0)
  const { tabs } = useMegaMenuJobs()

  const onClickTab = useCallback(
    (index) => () => {
      setSelectedTab(index)
    },
    []
  )
  const isSelectedTab = useCallback((index: number) => selectedTab == index, [selectedTab])

  const { content } = useMemo(() => tabs[selectedTab], [tabs, selectedTab])

  return (
    <div className={`${style[`mega-menu-jobs-tabs__container`]}`}>
      <nav>
        <ul className={`${style[`mega-menu-jobs-tabs`]}`}>
          {tabs &&
            tabs.map(({ label }, index) => (
              <li key={index}>
                <Button
                  key={index}
                  buttonText={label}
                  suffixIcon={megaMenuJobsIcons[index][isSelectedTab(index) ? 0 : 1]}
                  iconSize={16}
                  className={`${style[`mega-menu-jobs-tabs__tab`]} ${
                    isSelectedTab(index) ? style[`selected-tab`] : ''
                  }`}
                  onClick={onClickTab(index)}
                />
              </li>
            ))}
          <Divider direction={'VERTICAL'} />
          <li>
            <SearchItem tag={'Todos los empleos'} url={'https://www.magneto365.com/co/empleos'} />
          </li>
        </ul>
      </nav>
      <Divider />
      <div className={`${style[`mega-menu-jobs-tabs__content`]}`}>{content}</div>
    </div>
  )
}

export default MegaMenuJobsTabs
