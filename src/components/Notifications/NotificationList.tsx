import { FC, useState } from "react";
import NotificationItem from "./NotificationItem";
import data from "../../data.json";

interface NotificationListProps {}

let count = 0;

const NotificationList: FC<NotificationListProps> = () => {
  count++;
  const [notificationsList, setNotificationsList] = useState<
    Record<string, unknown>[]
  >(data.notifications);

  const markNotificationAsRead = (id: number) => {
    // Find the index of the notification with the given ID
    const notificationIndex = notificationsList.findIndex(
      (notification) => notification.id === id
    );

    if (notificationIndex !== -1) {
      // Create a copy of the notificationsList array
      const updatedNotificationsList = [...notificationsList];

      // Update the hasRead property for the specific notification
      if (updatedNotificationsList[notificationIndex].hasRead !== true) {
        updatedNotificationsList[notificationIndex] = {
          ...updatedNotificationsList[notificationIndex],
          hasRead: true,
        };

        setNotificationsList(updatedNotificationsList);
      }
    }
  };

  return (
    <ul className="grid gap-3">
      <li>{count}</li>
      {notificationsList.map((notification: any, index) => (
        <NotificationItem
          key={index}
          variant={notification.variant}
          content={notification.content}
          hasRead={notification.hasRead}
          onClick={() => markNotificationAsRead(index)}
        />
      ))}
    </ul>
  );
};

export default NotificationList;
