import React, { useEffect, useMemo, useState } from 'react'
import { IRegion, IRegionProps } from './Region.Interface'
import { RegionService } from './Region.Service'
import { Button, Modal, Radio, RadioChangeEvent } from 'antd'

import './Region.Style.scss'

const Region: React.FC<IRegionProps> = ({ onRegionChange, lang, locales }) => {
  const [showSelector, setShowSelector] = useState<boolean>(false)
  const [allRegions, setAllRegions] = useState<IRegion[]>([])
  const [current, setCurrent] = useState<IRegion | null>(null)
  const [incoming, setIncoming] = useState<IRegion | null>(null)

  const httpClient = useMemo(() => {
    return RegionService({ lang })
  }, [lang])

  const selectableList = useMemo(() => {
    return allRegions.map((item) => (
      <Radio key={item.lang} value={item.lang}>
        <img src={item.flag} alt={item.lang} style={{ width: 16, marginRight: 5 }} />
        {item.name}
      </Radio>
    ))
  }, [allRegions])

  const startTransaction = (e: RadioChangeEvent) => {
    const currentSelection = allRegions.find((item) => item.lang === e.target.value)
    if (currentSelection) setIncoming(currentSelection)
  }

  const commitTransaction = () => {
    setShowSelector(false)
    if (!incoming) return
    onRegionChange(incoming.lang)
    setCurrent(incoming)
  }

  const toggleSelector = () => setShowSelector((active) => !active)

  useEffect(() => {
    if (allRegions.length || !lang) return
    httpClient.get<IRegion[]>('/v1/region').then((response) => {
      const currentSelection = response.data.find((item) => item.lang === lang)
      setAllRegions(response.data)
      if (currentSelection) setCurrent(currentSelection)
    })
  }, [allRegions.length, httpClient, lang])

  return (
    <React.Fragment>
      <Button type="link" href="javascript:void()" onClick={toggleSelector} className="region">
        <img src={current?.flag} alt={current?.lang} style={{ width: 16, marginRight: 5 }} /> {current?.name}
      </Button>
      <Modal
        visible={showSelector}
        onCancel={toggleSelector}
        onOk={commitTransaction}
        title={locales.selectTitle}
        okText={locales.ok}
        cancelText={locales.cancelText}
      >
        <Radio.Group defaultValue={lang} className="region" onChange={startTransaction}>
          {selectableList}
        </Radio.Group>
      </Modal>
    </React.Fragment>
  )
}

export default Region
