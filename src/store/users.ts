import { atom } from 'nanostores';

export interface UserType {
  name: string;
  isAdmin: boolean;
}

export const users = atom<UserType[]>([]);

export function addUser(user: UserType) {
  users.set([...users.get(), user]);
}
