import React from 'react';
import {makeStyles, Typography} from '@material-ui/core';
import timerSVG from '../assets/images/timer.svg';

const useStyles = makeStyles((theme) => ({
  timerContainer: {
    width: 379,
    height: 404,
    background: '#C4C4C4',
    borderRadius: 25,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '20px 0',
    [theme.breakpoints.down('sm')]: {
      width: 192,
      height: 208
    },
  },
  timerSVG: {
    height: 217,
    width: 183,
    [theme.breakpoints.down('sm')]: {
      height: 110,
      width: 92
    }
  }
}));

const Timer = ({name, time}) => {
  const classes = useStyles();

  return (
    <div>
      <Typography variant={'h4'} align={'center'}>{name}</Typography>
      <div className={classes.timerContainer}>
        <img className={classes.timerSVG} src={timerSVG} alt="timer"/>
      </div>
      <Typography variant={'h4'} align={'center'}>{time}</Typography>
    </div>
  );
};

export default Timer;