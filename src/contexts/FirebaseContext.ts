import firebase from 'firebase/app';
import { createContext } from 'react';

interface FirebaseContextValue {
  auth: firebase.auth.Auth | null;
  db: firebase.firestore.Firestore | null;
  storage: firebase.storage.Storage | null;
}

const FirebaseContext = createContext<FirebaseContextValue>({
  auth: null,
  db: null,
  storage: null,
});

export default FirebaseContext;
