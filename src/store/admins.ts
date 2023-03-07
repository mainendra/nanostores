import { computed } from 'nanostores';
import { users } from './users';

export const admins = computed(users, (allUsers) =>
  allUsers.filter((user) => user.isAdmin)
);
