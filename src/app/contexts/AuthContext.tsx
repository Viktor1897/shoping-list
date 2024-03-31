import {
  User,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from 'firebase/auth';
import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { auth } from '../firebase/firebase';

type AuthContextType = {
  currentUser: User | null;
  loggedIn: boolean;
  loading: boolean;
  signIn: (email: string, password: string) => void;
  logout: () => void;
  signUp: (
    email: string,
    password: string,
    firstName: string,
    lastName: string,
  ) => void;
};

const AuthContext = createContext<AuthContextType>({} as AuthContextType);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [loggedIn, setLoggedIn] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);

  const signIn = async (email: string, password: string) => {
    await signInWithEmailAndPassword(auth, email, password).catch((error) => {
      //TODO handle error in a better way
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);
    });
  };

  const logout = async () => {
    await signOut(auth).catch((error) => {
      //TODO: handle error in a better way
      console.log('Error signing out:', error.message);
    });
  };

  const signUp = async (
    email: string,
    password: string,
    firstName: string,
    lastName: string,
  ) => {
    await createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        updateProfile(userCredential.user, {
          displayName: `${firstName} ${lastName}`,
        })
          .then(() => updateUser(userCredential.user))
          .catch((error) => {
            //TODO: handle error in a better way
            console.log('Error updating profile:', error.message);
          });
      })
      .catch((error) => {
        //TODO: handle error in a better way
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, initializeUser);
    return unsubscribe;
  }, []);

  const initializeUser = (user: User | null) => {
    if (user) {
      setCurrentUser({ ...user });
      setLoggedIn(true);
    } else {
      setCurrentUser(null);
      setLoggedIn(false);
    }
    setLoading(false);
  };

  const updateUser = (user: User) => {
    setCurrentUser({ ...user });
  };

  const value = useMemo(
    () => ({
      currentUser,
      loggedIn,
      loading,
      signIn,
      logout,
      signUp,
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [currentUser, loggedIn, loading],
  );
  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => {
  return useContext(AuthContext);
};
