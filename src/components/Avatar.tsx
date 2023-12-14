import { FC } from "react";

interface AvatarProps {
  userAvatar: string;
  username: string;
}

const Avatar: FC<AvatarProps> = ({ userAvatar, username }) => {
  return (
    <img
      src={userAvatar}
      alt={`${username} avatar`}
      className="max-w-[2.5rem] md:max-w-[2.75rem]"
    />
  );
};

export default Avatar;
