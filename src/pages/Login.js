import React from 'react';
import {Field, Form, Formik} from 'formik';
import {Button, makeStyles, Typography} from '@material-ui/core';
import CustomTextField from '../components/common/CustomTextField';
import {NavLink} from 'react-router-dom';
import {grey} from '@material-ui/core/colors';
import {useAuth} from '../contexts/AuthContext';

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

const Login = () => {
  const classes = useStyles();
  const {signIn} = useAuth();

  return (
    <Formik
      initialValues={{
        email: '',
        password: ''
      }}
      onSubmit={async ({email, password}, {setSubmitting}) => {
        try {
          setSubmitting(true);
          await signIn(email, password);
        } catch (e) {
          setSubmitting(false);
          console.log(e);
        }
      }}
    >
      {({isSubmitting}) => (
        <Form className={classes.registerForm}>
          <Typography variant={'h3'} style={{margin: 30}} gutterBottom>Login</Typography>
          <Field name={'email'} label={'Email'} as={CustomTextField}/>
          <Field type={'password'} name={'password'} label={'Password'} as={CustomTextField}/>
          <Button disabled={isSubmitting} type={'submit'} className={classes.submitButton}>Login</Button>
          <Typography>{`Don’t have an account yet? `}
            <NavLink to={'/register'}>Register</NavLink>
          </Typography>
        </Form>
      )}
    </Formik>
  );
};

export default Login;