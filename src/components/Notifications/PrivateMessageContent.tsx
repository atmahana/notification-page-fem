import { FC } from "react";
import { PrivateMessageNotificationProps as PrivateMessageContentProps } from "../../types/notification";
import Avatar from "../Avatar";

const PrivateMessageContent: FC<PrivateMessageContentProps> = ({
  username,
  userAvatar,
  timestamp,
  message,
}) => {
  return (
    <>
      <div>
        <Avatar userAvatar={userAvatar} username={username} />
      </div>
      <div>
        <p className="text-muted-light text-sm leading-snug md:text-base">
          <strong className="text-foreground pr-1">{username}</strong> sent you
          a private message
        </p>
        <p className="text-muted-light text-sm">{timestamp}</p>
        <div className="text-sm text-muted-dark border rounded-sm px-3 py-4 mt-4 md:text-base md:mt-3.5 md:px-5">
          <p className="max-w-[22ch] leading-tight md:max-w-full">{message}</p>
        </div>
      </div>
    </>
  );
};

export default PrivateMessageContent;
