import {makeStyles} from '@material-ui/core';
import {grey} from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
  registerForm: {
    position: 'absolute',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#C4C4C4',
    padding: '30px 72px',
    boxSizing: 'border-box',
    width: 588,
    height: 576,
    borderRadius: 57,
    [theme.breakpoints.down('xs')]: {
      width: 337,
      height: 579,
      padding: '20px 52px',
    }
  },
  submitButton: {
    textTransform: 'none',
    width: 277,
    height: 73,
    background: '#828282',
    borderRadius: 63,
    fontSize: 40,
    fontWeight: 400,
    [theme.breakpoints.down('xs')]: {
      width: 195,
      height: 47,
      fontSize: 24
    },
    '&:hover': {
      background: grey[500]
    }
  }
}));

export default useStyles;