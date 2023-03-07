import { useStore } from '@nanostores/react';
import { admins } from './store/admins';
import { UserType } from './store/users';

function UserItem({ user }: { user: UserType }) {
  return (
    <div>
      <span>{user.name}</span>
    </div>
  );
}

export const Admins = () => {
  const list = useStore(admins);
  return (
    <>
      Total admin users: {list.length}
      <br />
      -----------------
      <ul>
        {list.map((user) => (
          <UserItem key={user.name} user={user} />
        ))}
      </ul>
    </>
  );
};
