import React from 'react';
import TextField from '@material-ui/core/TextField';
import {useField} from 'formik';

const CustomTextField = ({label, type, ...props}) => {
  const [field, meta] = useField(props);

  return <TextField {...field} type={type} variant={'outlined'} fullWidth label={label}/>
};

export default CustomTextField;