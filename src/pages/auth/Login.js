import React from 'react';
import {Field, Form, Formik} from 'formik';
import {Button, Typography} from '@material-ui/core';
import CustomTextField from '../../components/common/CustomTextField';
import {NavLink} from 'react-router-dom';
import {useAuth} from '../../contexts/AuthContext';
import useStyles from './form.styles';
import red from '@material-ui/core/colors/red';

const Login = () => {
  const classes = useStyles();
  const {signIn} = useAuth();

  return (
    <Formik
      initialValues={{
        email: '',
        password: ''
      }}
      onSubmit={async ({email, password}, {setSubmitting, setErrors}) => {
        try {
          setSubmitting(true);
          await signIn(email, password);
        } catch (e) {
          setSubmitting(false);
          setErrors(e.message);
        }
      }}
    >
      {({isSubmitting, errors}) => (
        <Form className={classes.registerForm}>
          <Typography variant={'h3'} style={{margin: 30}}>Login</Typography>
          <Field type={'email'} name={'email'} label={'Email'} as={CustomTextField}/>
          <Field type={'password'} name={'password'} label={'Password'} as={CustomTextField}/>
          <Button disabled={isSubmitting} type={'submit'} className={classes.submitButton}>
            Login
          </Button>
          {Object.keys(errors).length > 1 && <div style={{color: red[900]}}>{errors}</div>}
          <Typography>{`Don’t have an account yet? `}
            <NavLink to={'/register'}>Register</NavLink>
          </Typography>
        </Form>
      )}
    </Formik>
  );
};

export default Login;