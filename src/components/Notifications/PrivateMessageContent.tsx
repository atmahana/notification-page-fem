import { FC } from "react";
import { PrivateMessageNotificationProps as PrivateMessageContentProps } from "../../types/notification";
import Avatar from "../Avatar";
import { getRelativeTimestamp } from "../../lib/getRelativeTimestamp";

const PrivateMessageContent: FC<PrivateMessageContentProps> = ({
  username,
  userAvatar,
  timestamp,
  message,
}) => {
  const timeDiff= getRelativeTimestamp(timestamp);
  return (
    <>
      <div>
        <Avatar userAvatar={userAvatar} username={username} />
      </div>
      <div>
        <p className="text-muted-light text-sm leading-snug md:text-base">
          <strong className="text-foreground pr-1 hover:text-primary">{username}</strong> sent you
          a private message
        </p>
        <p className="text-muted-light text-sm">{timeDiff} ago</p>
        <div className="text-sm text-muted-dark border rounded-sm md:rounded-md px-3 py-4 mt-4 md:text-base md:mt-3.5 md:px-5 hover:bg-light-gray-blue-1">
          <p className="max-w-[22ch] leading-tight md:max-w-full">{message}</p>
        </div>
      </div>
    </>
  );
};

export default PrivateMessageContent;
