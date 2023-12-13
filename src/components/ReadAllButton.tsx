import { FC } from "react";
import {
  READ_ALL_NOTIFICATION,
  useNotification,
} from "../hooks/NotificationContext";

interface ReadAllButtonProps {}

const ReadAllButton: FC<ReadAllButtonProps> = () => {
  const { dispatch } = useNotification();

  const handleReadAllNotifications = () => {
    dispatch({
      type: READ_ALL_NOTIFICATION,
    });
  };
  return (
    <button className="text-muted-dark" onClick={handleReadAllNotifications}>
      Mark all as read
    </button>
  );
};

export default ReadAllButton;
