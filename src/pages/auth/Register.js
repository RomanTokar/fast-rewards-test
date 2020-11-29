import React from 'react';
import {Field, Form, Formik} from 'formik';
import {Button, Typography} from '@material-ui/core';
import CustomTextField from '../../components/common/CustomTextField';
import {NavLink} from 'react-router-dom';
import {useAuth} from '../../contexts/AuthContext';
import useStyles from './form.styles';
import red from '@material-ui/core/colors/red';

const Register = () => {
  const classes = useStyles();
  const {signUp} = useAuth();

  return (
    <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        email: '',
        password: ''
      }}
      onSubmit={async ({firstName, lastName, email, password}, {setSubmitting, setErrors}) => {
        try {
          setSubmitting(true);
          await signUp(firstName, lastName, email, password);
        } catch (e) {
          setSubmitting(false);
          setErrors(e.message)
        }
      }}
    >
      {({isSubmitting, errors}) => (
        <Form className={classes.registerForm}>
          <Typography variant={'h3'} gutterBottom>Register</Typography>
          <Field name={'firstName'} label={'FirstName'} as={CustomTextField}/>
          <Field name={'lastName'} label={'LastName'} as={CustomTextField}/>
          <Field type={'email'} name={'email'} label={'Email'} as={CustomTextField}/>
          <Field type={'password'} name={'password'} label={'Password'} as={CustomTextField}/>
          <Button disabled={isSubmitting} type={'submit'}
                  className={classes.submitButton}
          >
            Sign Up
          </Button>
          {Object.keys(errors).length > 1 && <Typography style={{color: red[800]}}>{errors}</Typography>}
          <Typography>{`Already registered? `}
            <NavLink to={'/login'}>Log in</NavLink>
          </Typography>
        </Form>
      )}
    </Formik>
  );
};

export default Register;