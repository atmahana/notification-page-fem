import { FC } from "react";
import { WithImagesNotificationProps as WithImageContentProps } from "../../types/notification";
import Avatar from "../Avatar";
import { getRelativeTimestamp } from "../../lib/getRelativeTimestamp";

const WithmagesContent: FC<WithImageContentProps> = ({
  username,
  userAvatar,
  timestamp,
  imageUrl,
}) => {
  const timeDiff= getRelativeTimestamp(timestamp);
  
  return (
    <>
      <div>
        <Avatar userAvatar={userAvatar} username={username} />
      </div>
      <div className="w-full flex justify-between">
        <div>
          <p className="text-muted-light text-sm leading-snug max-w-[20ch] md:max-w-full md:text-base">
            <strong className="text-foreground pr-1 hover:text-primary">{username}</strong>{" "}
            commented on your picture
          </p>
          <p className="text-muted-light text-sm">{timeDiff} ago</p>
        </div>
        <div>
          <img
            src={imageUrl}
            alt="Notification's picture"
            className="aspect-square w-10 md:w-12 hover:ring-2 rounded-md ring-light-gray-blue-2"
          />
        </div>
      </div>
    </>
  );
};

export default WithmagesContent;
