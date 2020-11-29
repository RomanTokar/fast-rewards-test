import React, {useEffect} from 'react';
import {Button, makeStyles} from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Timer from '../components/Timer';
import {useAuth} from '../contexts/AuthContext';
import {useDatabase} from '../contexts/DatabaseContext';

const useStyles = makeStyles({
  appBar: {
    padding: 30,
    marginBottom: 30
  },
  logOutButton: {
    textTransform: 'none',
    padding: '5px 20px',
    fontWeight: 500,
    fontSize: 24
  }
});

const Main = () => {
  const classes = useStyles();
  const {signOut, currentUser} = useAuth();
  const {mobileTime, desktopTime, updateProfileData} = useDatabase();
  const lastSignInTime = Date.parse(currentUser.metadata.lastSignInTime);

  useEffect(() => {
    const updates = {};

    let timerId = setTimeout(() => {
      let difference = (Date.now() - lastSignInTime) / 1000;

      let getValueAndRest = (seconds, value) => [seconds % value, Math.floor(seconds / value)];

      const time = [3600, 60, 1]
        .map((el) => {
          let value;

          ([difference, value] = getValueAndRest(difference, el));

          return String(value);
        })
        .map((el) => el.length < 2 ? `0${el}` : el)
        .join(':');

      if (window.innerWidth < 500) {
        updates.mobileTime = time;
      } else {
        updates.desktopTime = time;
      }

      updateProfileData(currentUser.uid, updates);
    }, 1000);

    return () => {
      clearTimeout(timerId);
    };
  });

  const onLogOut = async () => {
    try {
      await signOut();
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <Grid container className={classes.appBar}>
        <Grid item lg={11} md={10} sm={9} xs={8}/>
        <Grid item lg={1} md={2} sm={3} xs={4}>
          <Button className={classes.logOutButton} onClick={onLogOut}>Log out</Button>
        </Grid>
      </Grid>
      <Grid container justify={'space-evenly'}>
        <Grid item>
          <Timer name={'Desktop'} time={desktopTime}/>
        </Grid>
        <Grid item>
          <Timer name={'Mobile'} time={mobileTime}/>
        </Grid>
      </Grid>
    </>
  );
};

export default Main;