import { FC } from "react";
import { PrivateMessageNotificationProps as PrivateMessageContentProps } from "../../types/notification";

const PrivateMessageContent: FC<PrivateMessageContentProps> = ({
  username,
  userAvatar,
  timestamp,
  message,
}) => {
  return (
    <>
      <div>
        <img src={userAvatar} alt="User Avatar" />
      </div>
      <div className="col-span-5">
        <p className="text-muted-light text-sm leading-snug">
          <strong className="text-foreground pr-1">
            {username}
          </strong>{" "}
          sent you a private message
        </p>
        <p className="text-muted-light text-sm">
          {timestamp}
        </p>
        <div className="text-sm text-muted-dark border rounded-sm px-3 py-4 mt-4">
          <p className="max-w-[22ch] leading-tight">
            {message}
          </p>
        </div>
      </div>
    </>
  );
};

export default PrivateMessageContent;
