import { createContext } from 'react';
import { User } from '../models/User';

interface UserContextValue {
  user: User | null;
  credential: firebase.auth.UserCredential | null;
  setCredential: (credential: firebase.auth.UserCredential | null) => void;
}

const UserContext = createContext<UserContextValue>({
  user: null,
  credential: null,
  setCredential: () => undefined,
});

export default UserContext;
