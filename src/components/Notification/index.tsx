import { notification, NotificationArgsProps } from 'antd';

interface CustomNotificationProps extends Omit<NotificationArgsProps, 'placement' | 'type'> {
  type: 'success' | 'error' | 'warning' | 'info';
  onClose?: () => void;
}

export const showNotification = ({
  type,
  message,
  description,
  onClose,
  ...props
}: CustomNotificationProps) => {
  notification[type]({
    message,
    description,
    placement: 'topRight',
    duration: 3,
    onClose,
    ...props,
  });
};