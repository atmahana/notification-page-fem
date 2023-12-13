import { Dispatch, FC, ReactNode, createContext, useContext, useReducer } from "react";

interface State {
  notifications: Record<string, unknown>[];
}

interface Action {
  type: string;
  payload?: any;
}

interface ContextProps {
  state: State;
  dispatch: Dispatch<Action>;
}

export const CREATE_NOTIFICATIONS = "CREATE_NOTIFICATIONS";
export const READ_ONE_NOTIFICATION = "READ_ONE_NOTIFICATION";
export const READ_ALL_NOTIFICATION = "READ_ALL_NOTIFICATION";

const notificationReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case CREATE_NOTIFICATIONS: {
      return {
        ...state,
        notifications: action.payload,
      };
    }
    case READ_ONE_NOTIFICATION: {
      // Find the index of the notification with the given ID
      const notificationIndex = state.notifications.findIndex(
        (notification) => notification.id === action.payload
      );
      
      // Create a copy of the notificationsList array
      const updatedNotificationsList = [...state.notifications];
      
      if (notificationIndex !== -1) {
        // Update the hasRead property for the specific notification
        if (updatedNotificationsList[notificationIndex].hasRead !== true) {
          updatedNotificationsList[notificationIndex] = {
            ...updatedNotificationsList[notificationIndex],
            hasRead: true,
          };
        }
      }

      return {
        ...state,
        notifications: updatedNotificationsList,
      };
    }
    case READ_ALL_NOTIFICATION: {
      // Map through each one notification and change the hasRead flag to true
      return {
        ...state,
        notifications: state.notifications.map((notification) => ({ ...notification, hasRead: true })),
      };
    }
    default: {
      return state;
    }
  }
};

const initialState: State = {
  notifications: [],
};

const NotificationContext = createContext<ContextProps | undefined>(undefined);

export const NotificationProvider: FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(notificationReducer, initialState);

  return (
    <NotificationContext.Provider value={{ state, dispatch }}>
      {children}
    </NotificationContext.Provider>
  );
};

export const useNotification = (): ContextProps => {
  const context = useContext(NotificationContext);
  if (!context) {
    throw new Error('useNotification must be used within a NotificationProvider');
  }
  return context;
};