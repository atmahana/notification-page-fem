import NotificationList from "./components/Notifications/NotificationList";
import ReadAllButton from "./components/ReadAllButton";
import {
  useNotification,
} from "./hooks/NotificationContext";

function App() {
  const { state } = useNotification();

  let activeNotificationCount = 0;

  state.notifications.forEach((notification) => {
    if (notification.hasRead === false) {
      activeNotificationCount++
    }
  });

  return (
    <main className="px-4 py-[1.35rem]">
      <header className="flex justify-between">
        <div className="flex gap-2.5 items-center">
          <h1 className="font-bold text-xl">Notifications </h1>
          <span className="bg-primary text-white rounded-md px-2.5 font-bold">
            {activeNotificationCount}
          </span>
        </div>
        <ReadAllButton />
      </header>
      <section className="pt-6">
        <NotificationList />
      </section>
    </main>
  );
}

export default App;
