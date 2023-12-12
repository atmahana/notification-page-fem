import NotificationList from "./components/Notifications/NotificationList";

function App() {
  // TODO: CREATE HANDLE READ ALL NOTIFICATION FUNCTION
  const handleReadAllNotifications = () => {
  };

  return (
    <main className="px-4 py-[1.35rem]">
      <header className="flex justify-between">
        <div className="flex gap-2.5 items-center">
          <h1 className="font-bold text-xl">Notifications </h1>
          <span className="bg-primary text-white rounded-md px-2.5 font-bold">
            3
          </span>
        </div>
        <button className="text-muted-dark" onClick={handleReadAllNotifications}>Mark all as read</button>
      </header>
      <section className="pt-6">
        <NotificationList />
      </section>
    </main>
  );
}

export default App;
