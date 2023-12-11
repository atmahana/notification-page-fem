interface CommonNotificationProps {
  username: string;
  userAvatar: string;
  timestamp: Date;
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
  | { variant: "normal"; content: NormalNotificationProps }
  | { variant: "withImages"; content: WithImagesNotificationProps }
  | { variant: "privateMessage"; content: PrivateMessageNotificationProps };

export { CommonNotificationProps, actionTypes, NormalNotificationProps, WithImagesNotificationProps, PrivateMessageNotificationProps, NotificationItemProps }