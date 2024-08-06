import { useState, useCallback } from 'react'
import { INavMenuAnalystRegion } from '@components/UI/organism'

export const useAnalystModalRegion = (onRegionChange?: (modalRegion: INavMenuAnalystRegion) => void) => {
  const [modal, setModal] = useState<boolean>(false)

  const handleRegionChange = useCallback(
    (localRegion?: INavMenuAnalystRegion | null) => {
      if (localRegion) {
        onRegionChange && onRegionChange(localRegion)
      }
      setModal(false)
    },
    [onRegionChange]
  )

  const handleRegionModal = useCallback((open: boolean) => {
    setModal(open)
  }, [])

  return { modalRegion: modal, handleRegionChange, handleRegionModal }
}
