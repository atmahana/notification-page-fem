import NotificationItem from "./components/Notifications/NotificationItem";
import AvatarMark from "../src/assets/avatar-mark-webber.webp";
import AvatarAngela from "../src/assets/avatar-angela-gray.webp";
import AvatarJacob from "../src/assets/avatar-jacob-thompson.webp";
import NotifImage from '../src/assets/image-chess.webp';

function App() {
  return (
    <main className="px-4 py-[1.35rem]">
      <header className="flex justify-between">
        <div className="flex gap-2.5 items-center">
          <h1 className="font-bold text-xl">Notifications </h1>
          <span className="bg-primary text-white rounded-md px-2.5 font-bold">
            3
          </span>
        </div>
        <button className="text-muted-dark">Mark all as read</button>
      </header>
      <section className="pt-6 grid gap-3">
        <NotificationItem
          variant="normal"
          content={{
            actionType: {
              type: "reaction",
              postTitle: "My first tournament today",
            },
            username: "Mark Webber",
            userAvatar: `${AvatarMark}`,
            timestamp: new Date(),
          }}
        />
        <NotificationItem
          variant="normal"
          content={{
            username: "Angela Gray",
            userAvatar: `${AvatarAngela}`,
            actionType: {
              type: "follow",
            },
            timestamp: new Date(),
          }}
        />
        <NotificationItem
          variant="normal"
          content={{
            username: "Jacob Thompson",
            userAvatar: `${AvatarJacob}`,
            actionType: {
              type: "joinedGroup",
              groupName: "Chess Club",
            },
            timestamp: new Date(),
          }}
        />
        <NotificationItem
          variant="privateMessage"
          content={{
            username: "Rizky Hasanuddin",
            userAvatar: `${AvatarJacob}`,
            timestamp: new Date(),
            message:
              "Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and I'm already having lots of fun and improving my game.",
          }}
        />
        <NotificationItem
          variant="withImages"
          content={{
            username: "Kimberly Smith",
            userAvatar: `${AvatarJacob}`,
            timestamp: new Date(),
            imageUrl: NotifImage
          }}
        />
      </section>
    </main>
  );
}

export default App;
