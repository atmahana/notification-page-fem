import { FC } from "react";
import { WithImagesNotificationProps as WithImageContentProps } from "../../types/notification";
import Avatar from "../Avatar";

const WithmagesContent: FC<WithImageContentProps> = ({
  username,
  userAvatar,
  timestamp,
  imageUrl,
}) => {
  return (
    <>
      <div>
        <Avatar userAvatar={userAvatar} username={username} />
      </div>
      <div className="w-full flex justify-between">
        <div>
          <p className="text-muted-light text-sm leading-snug max-w-[20ch] md:max-w-full md:text-base">
            <strong className="text-foreground pr-1">{username}</strong>{" "}
            commented on your picture
          </p>
          <p className="text-muted-light text-sm">{timestamp}</p>
        </div>
        <div>
          <img
            src={imageUrl}
            alt="Notification's picture"
            className="aspect-square w-10 md:w-12"
          />
        </div>
      </div>
    </>
  );
};

export default WithmagesContent;
