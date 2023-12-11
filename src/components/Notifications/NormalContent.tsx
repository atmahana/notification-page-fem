import { FC } from "react";
import { NormalNotificationProps as NormalContentProps } from "./notification";

const NormalContent: FC<NormalContentProps> = ({
  username,
  userAvatar,
  timestamp,
  actionType,
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
        <p className="text-muted-light text-sm leading-snug">
          <strong className="text-foreground pr-1">{username}</strong>
          {actionType.type === "reaction" && (
            <>
              reacted to your recent post
              <strong className="pl-1 text-muted-dark">
                {actionType.postTitle}!
              </strong>
            </>
          )}
          {actionType.type === "follow" && <>followed you</>}
          {actionType.type === "joinedGroup" && (
            <>
              has joined your group
              <strong className="text-primary pl-1">{actionType.groupName}</strong>
            </>
          )}
          {actionType.type === "leftGroup" && (
            <>
              left the group
              <strong className="text-primary pl-1">{actionType.groupName}</strong>
            </>
          )}
        </p>
        <p className="text-muted-light text-sm">{timestamp.toDateString()}</p>
      </div>
    </>
  );
};

export default NormalContent;
