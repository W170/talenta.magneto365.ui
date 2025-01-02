import { INotification } from '@components/UI/molecules/Notification'

export const notification: INotification = {
  onClose: () => {
    console.log('Notification closed')
  },
  message: 'This is a notification',
  position: 'top-left',
  className: '',
  autoCloseDuration: 0
}
