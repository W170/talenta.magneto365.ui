import { useCallback, useEffect, useRef, useState } from 'react'
import {
  IAnalystNotification,
  IRequestNotification,
  UseInfiniteNotificationsResult
} from '../children/AnalystNotificationList/AnalystNotificationList.interface'
import { AnalystNotificationType, AnalystNotificationEvent } from '../enums'

const fetchMockNotifications = async (page: number, pageSize: number): Promise<IAnalystNotification[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      if (page > 4) return resolve([])
      const items: IRequestNotification[] = Array.from({ length: pageSize }).map((_, i) => {
        const id = `${page * pageSize + i}`
        return {
          id,
          type: AnalystNotificationType.requests,
          event: AnalystNotificationEvent.created,
          timestamp: new Date().toISOString(),
          read: false,
          title: 'Tiene una solicitud de vacante por aprobar: ID 066530',
          descriptionLines: [
            ['Desarrollador FullStack', '4 cupos', 'Medellin'],
            ['Solicita: Andrés Felipe Sánchez', 'asanchez@sura.com.co']
          ],
          actionTitle: 'Ver solicitud ',
          action: () => console.log('Clicked', id)
        }
      })
      resolve(items)
    }, 1000)
  })
}

export function useInfiniteNotifications(pageSize = 5): UseInfiniteNotificationsResult {
  const [notifications, setNotifications] = useState<IAnalystNotification[]>([])
  const [page, setPage] = useState(1)
  const [isLoading, setIsLoading] = useState(false)
  const [hasMore, setHasMore] = useState(true)

  const observer = useRef<IntersectionObserver | null>(null)

  const loadMore = useCallback(async () => {
    if (isLoading || !hasMore) return
    setIsLoading(true)
    const newItems = await fetchMockNotifications(page, pageSize)
    setNotifications((prev) => [...prev, ...newItems])
    setHasMore(newItems.length === pageSize)
    setPage((prev) => prev + 1)
    setIsLoading(false)
  }, [page, pageSize, isLoading, hasMore])

  useEffect(() => {
    loadMore()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const lastNotificationRef = useCallback(
    (node: HTMLDivElement | null) => {
      if (isLoading || !hasMore) return
      if (observer.current) observer.current.disconnect()
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          loadMore()
        }
      })
      if (node) observer.current.observe(node)
    },
    [loadMore, isLoading, hasMore]
  )

  return { notifications, lastNotificationRef, isLoading }
}
