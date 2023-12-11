import { FC } from "react";
import { WithImagesNotificationProps as WithImageContentProps } from "./notification";

const WithmagesContent: FC<WithImageContentProps> = ({
  username,
  userAvatar,
  timestamp,
  imageUrl,
}) => {
  return (
    <>
      <div>
        <img
          src={userAvatar}
          alt={`${username} avatar`}
          className="w-[4.5rem]"
        />
      </div>
      <div className="col-span-5">
        <div className="flex">
          <p className="text-muted-light text-sm leading-snug pr-2">
            <strong className="text-foreground pr-1">{username}</strong>{" "}
            commented on your picture
          </p>
          <img
            src={imageUrl}
            alt="Notification's picture"
            className="aspect-square w-10"
          />
        </div>
        <p className="text-muted-light text-sm">{timestamp.toDateString()}</p>
      </div>
    </>
  );
};

export default WithmagesContent;
