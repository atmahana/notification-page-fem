import { FC, useContext, useEffect, useState } from "react";
import NotificationItem from "./NotificationItem";
import data from "../../data.json";
import {
  CREATE_NOTIFICATIONS,
  READ_ONE_NOTIFICATION,
  useNotification,
} from "../../hooks/NotificationContext";

interface NotificationListProps {}

let count = 0;

const NotificationList: FC<NotificationListProps> = () => {
  count++;
  // const [notificationsList, setNotificationsList] = useState<
  //   Record<string, unknown>[]
  // >(data.notifications);

  const { state, dispatch } = useNotification();

  const notificationsList = state.notifications;

  useEffect(() => {
    dispatch({
      type: CREATE_NOTIFICATIONS,
      payload: data.notifications,
    });
  }, []);

  const markNotificationAsRead = (id: number) => {
    dispatch({
      type: READ_ONE_NOTIFICATION,
      payload: id,
    });
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
