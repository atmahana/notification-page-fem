import { FC } from "react";
import { NormalNotificationProps as NormalContentProps } from "../../types/notification";
import Avatar from "../Avatar";
import { getRelativeTimestamp } from "../../lib/getRelativeTimestamp";

const NormalContent: FC<NormalContentProps> = ({
  username,
  userAvatar,
  timestamp,
  actionType,
}) => {
  const timeDiff= getRelativeTimestamp(timestamp);

  return (
    <>
      <div>
        <Avatar userAvatar={userAvatar} username={username} />
      </div>
      <div>
        <p className="text-muted-light text-sm leading-snug md:text-base">
          <strong className="text-foreground hover:text-primary pr-1 md:pr-1.5">
            {username}
          </strong>
          {actionType.type === "reaction" && (
            <>
              reacted to your recent post
              <strong className="pl-1 text-muted-dark hover:text-primary md:pl-2">
                {actionType.postTitle}!
              </strong>{" "}
            </>
          )}
          {actionType.type === "follow" && <>followed you</>}
          {actionType.type === "joinedGroup" && (
            <>
              has joined your group
              <strong className="text-primary pl-1 md:pl-2">
                {actionType.groupName}
              </strong>{" "}
            </>
          )}
          {actionType.type === "leftGroup" && (
            <>
              left the group
              <strong className="text-primary pl-1 md:pl-1.5">
                {actionType.groupName}
              </strong>{" "}
            </>
          )}
        </p>
        <p className="text-muted-light text-sm">
          {timeDiff} ago
        </p>
      </div>
    </>
  );
};

export default NormalContent;
