import React, {useContext, useEffect, useState} from 'react';
import {auth} from '../firebase/config';
import {useDatabase} from './DatabaseContext';

const AuthContext = React.createContext('auth');

export const useAuth = () => useContext(AuthContext);

const AuthProvider = ({children}) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [isReady, setIsReady] = useState(false);
  const {updateProfileData, setUid} = useDatabase();

  useEffect(() => {
    return auth.onAuthStateChanged((user) => {
      if (user) {
        setUid(user.uid);
      }
      setCurrentUser(user);
      setIsReady(true);
    });
  });

  const signUp = (firstName, lastName, email, password) => {
    return auth.createUserWithEmailAndPassword(email, password)
      .then(user => {
        const defaultData = {
          firstName,
          lastName,
          mobileTime: '00:00:00',
          desktopTime: '00:00:00'
        };

        updateProfileData(user.user.uid, defaultData);
      })
      .catch(e => {
        console.log(e);
      });
  };

  const signIn = (email, password) => {
    return auth.signInWithEmailAndPassword(email, password)
      .catch((e) => {
        console.log(e);
      });
  };

  const signOut = () => {
    return auth.signOut()
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <AuthContext.Provider value={{isReady, currentUser, signUp, signIn, signOut}}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;