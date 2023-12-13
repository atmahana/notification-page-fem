interface CommonNotificationProps {
  username: string;
  userAvatar: string;
  timestamp: string;
}

type actionTypes =
  | {
    type: "reaction";
    postTitle: string;
  }
  | {
    type: "follow";
  }
  | {
    type: "joinedGroup";
    groupName: string;
  }
  | {
    type: "leftGroup";
    groupName: string;
  };

interface NormalNotificationProps extends CommonNotificationProps {
  actionType: actionTypes;
}

interface WithImagesNotificationProps extends CommonNotificationProps {
  imageUrl: string;
}

interface PrivateMessageNotificationProps extends CommonNotificationProps {
  message: string;
}

type NotificationItemProps =
  | { variant: "normal"; content: NormalNotificationProps, hasRead: boolean, onClick: () => void; }
  | { variant: "withImages"; content: WithImagesNotificationProps, hasRead: boolean, onClick: () => void; }
  | { variant: "privateMessage"; content: PrivateMessageNotificationProps, hasRead: boolean, onClick: () => void; };

export { CommonNotificationProps, actionTypes, NormalNotificationProps, WithImagesNotificationProps, PrivateMessageNotificationProps, NotificationItemProps }