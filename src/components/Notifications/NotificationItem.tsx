import { FC, ReactNode } from "react";
import {
  NormalNotificationProps,
  WithImagesNotificationProps,
  PrivateMessageNotificationProps,
  NotificationItemProps,
} from "../../types/notification";
import NormalContent from "./NormalContent";
import WithmagesContent from "./WithImageContent";
import PrivateMessageContent from "./PrivateMessageContent";

const NotificationItem: FC<NotificationItemProps> = ({
  variant,
  content,
  hasRead,
  onClick,
}) => {
  let renderedContent: ReactNode;

  switch (variant) {
    case "normal":
      const normalContent = content as NormalNotificationProps;
      renderedContent = (
        <NormalContent
          username={normalContent.username}
          userAvatar={normalContent.userAvatar}
          timestamp={normalContent.timestamp}
          actionType={normalContent.actionType}
        />
      );
      break;
    case "withImages":
      const withImagesContent = content as WithImagesNotificationProps;
      renderedContent = (
        <WithmagesContent
          username={withImagesContent.username}
          userAvatar={withImagesContent.userAvatar}
          timestamp={withImagesContent.timestamp}
          imageUrl={withImagesContent.imageUrl}
        />
      );
      break;
    case "privateMessage":
      const privateMessageContent = content as PrivateMessageNotificationProps;
      renderedContent = (
        <PrivateMessageContent
          username={privateMessageContent.username}
          userAvatar={privateMessageContent.userAvatar}
          timestamp={privateMessageContent.timestamp}
          message={privateMessageContent.message}
        />
      );
      break;
    default:
      renderedContent = null;
  }

  return (
    <li className="list-none" onClick={onClick}>
      <a
        onClick={(e) => {
          e.preventDefault();
        }}
        href="/"
        className={`${
          hasRead ? "bg-white" : "bg-background"
        } rounded-lg p-3.5 flex gap-3.5 md:p-[1.125rem] md:gap-5`}
      >
        {renderedContent}
      </a>
      
    </li>
  );
};

export default NotificationItem;
