import { useStore } from '@nanostores/react';
import { addUser, users } from './store/users';

export function UserInput() {
  const usersList = useStore(users);

  return (
    <div>
      <span>Total users: {usersList.length}</span>
      <br />
      <br />
      <button
        onClick={() =>
          addUser({
            name: `user-${Date.now()}`,
            isAdmin: Math.random() < 0.5,
          })
        }
      >
        Add New User
      </button>

      <ul>
        {usersList.map((user) => {
          return <li>{`${user.name}, admin: ${user.isAdmin}`}</li>;
        })}
      </ul>
    </div>
  );
}
