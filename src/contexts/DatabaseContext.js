import React, {useContext, useEffect, useState} from 'react';
import {database} from '../firebase/config';

const DatabaseContext = React.createContext('database');

export const useDatabase = () => useContext(DatabaseContext);

const DatabaseProvider = ({children}) => {
  const [uid, setUid] = useState('');
  const [mobileTime, setMobileTime] = useState('00:00:00');
  const [desktopTime, setDesktopTime] = useState('00:00:00');

  useEffect(() => {
    if (uid) {
      database.ref(uid).child('mobileTime').on('value', (snap) => {
        setMobileTime(snap.val())
      });

      database.ref(uid).child('desktopTime').on('value', (snap) => {
        setDesktopTime(snap.val())
      });
    }
  }, [uid]);

  const updateProfileData = (uid, updates) => {
    database.ref(uid).update(updates);
  };

  return (
    <DatabaseContext.Provider value={{updateProfileData, setUid, mobileTime, desktopTime}}>
      {children}
    </DatabaseContext.Provider>
  );
};

export default DatabaseProvider;