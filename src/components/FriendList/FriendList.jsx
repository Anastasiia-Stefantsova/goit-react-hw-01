// import clsx from "clsx";
import css from "./FriendList.module.css";

import FriendListItem from "../FriendListItem/FriendListItem";

export default function FriendList({ friends }) {
  return (
    <ul className={css.friendList}>
      {friends.map((friend) => (
        <li key={friend.id}>
			<FriendListItem friend={friend} />
        </li>
      ))}
    </ul>
  );
}