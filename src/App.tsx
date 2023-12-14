import NotificationList from "./components/Notifications/NotificationList";
import ReadAllButton from "./components/ReadAllButton";
import { useNotification } from "./hooks/NotificationContext";

function App() {
  const { state } = useNotification();

  let activeNotificationCount = 0;

  state.notifications.forEach((notification) => {
    if (notification.hasRead === false) {
      activeNotificationCount++;
    }
  });

  return (
    <div className="bg-light-gray-blue-2 min-h-screen grid place-content-center md:py-16">
      <main className="bg-white px-4 py-[1.35rem] max-w-[730px] mx-auto md:px-8 md:py-8 md:rounded-md">
        <header className="flex justify-between">
          <div className="flex gap-2.5 items-center md:gap-3">
            <h1 className="font-bold text-xl md:text-2xl">Notifications </h1>
            <span className="bg-primary text-white rounded-md px-2.5 font-bold md:px-3">
              {activeNotificationCount}
            </span>
          </div>
          <ReadAllButton />
        </header>
        <section className="pt-6 md:pt-7">
          <NotificationList />
        </section>
      </main>
    </div>
  );
}

export default App;
