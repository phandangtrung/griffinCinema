import React, { useState, useReducer } from 'react';

import Grid from '@mui/material/Grid';
import { useDispatch, useSelector } from 'react-redux';
import Avatar from '@mui/material/Avatar';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import deCode from '../../utils/decode';
import Logo from '../../assets/images/logo-movie.png';

import { Navigate, useNavigate } from 'react-router-dom';

import { loginUser } from './authSlice';
// import Alert from '../Alert/Alert';
import { message } from 'antd';
import { unwrapResult } from '@reduxjs/toolkit';
import { useEffect } from 'react';
// import { AuthReducer, initialUser } from '../../contexts/AuthContext2';

// const initialUser = {};
// const AuthReducer = (state, action) => Auth;

const Login = ({ handleChange }) => {
  const username = useFormInput('');
  const password = useFormInput('');
  let navigate = useNavigate();
  const token = useSelector((state) => state.auth.token);
  const role = useSelector((state) => state.auth.role);
  const booking = {
    zIndex: 2,
    backgroundImage:
      '-webkit-linear-gradient(169deg,#5560ff 17%,#aa52a1 63%,#ff4343)',
    height: '50%',
    minHeight: '40px',
    minWidth: '90px',
  };
  //The useHistory hook gives you access to the history instance that you may use to navigate.
  // const history = useHistory();
  // const [state, dispatch] = useReducer(AuthReducer, initialUser);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.currentUser);
  // const errorLogin = useSelector((state) => state.auth.errorlogin);

  // console.log('loginpage', errorLogin);

  const handleLogin = async () => {
    dispatch(loginUser({ username, password }));
  };

  if (token) {
    // console.log(token);
    return <Navigate to="/home" />;
  }

  const paperStyle = {
    padding: 20,
    width: 350,
    minHeight: 360,
    // margin: '20px auto',
  };
  const avatarStyle = { backgroundColor: '#1bbd7e' };
  const btnstyle = { margin: '8px 0', borderRadius: '10px', width: '200px' };

  const initialValues = {
    username: '',
    password: '',
    remember: false,
  };
  const validationSchema = Yup.object().shape({
    username: Yup.string().required('Required'),
    password: Yup.string().required('Required'),
  });

  const onSubmit = async (values) => {
    var submit = {
      taiKhoan: values.username,
      matKhau: values.password,
    };

    try {
      const submitLogin = await dispatch(loginUser(submit));
      const result = unwrapResult(submitLogin);
      console.log(result);
      console.log(submitLogin);
      if (result) {
        console.log(result);
        message.success({
          content: 'Login user success',

          className: 'custom-class',

          style: {
            marginTop: '2vh',
          },
        });
        if (deCode(result.accessToken) === 'QuanTri') navigate('/admin');
        else navigate('/home');
      }
    } catch (error) {
      message.error({
        content: 'Login user fail',

        className: 'custom-class',

        style: {
          marginTop: '2vh',
        },
      });
    }

    // console.log(values);
    // console.log('dasdasdadsadadada', errorLogin);
  };

  return (
    <Grid>
      {/* {errorLogin ? <Alert /> : ''} */}
      <Paper style={paperStyle}>
        <Grid align="center">
          <img style={{ width: '60px' }} src={Logo} />
        </Grid>
        <Formik
          initialValues={initialValues}
          onSubmit={onSubmit}
          validationSchema={validationSchema}
        >
          {(props) => (
            <Form>
              <Field
                style={{ marginBottom: '20px' }}
                as={TextField}
                variant="standard"
                label="Username"
                name="username"
                placeholder="Enter username"
                fullWidth
                required
                helperText={
                  <ErrorMessage name="username">
                    {(msg) => <div style={{ color: 'red' }}>{msg}</div>}
                  </ErrorMessage>
                }
              />
              <Field
                style={{ marginBottom: '20px' }}
                as={TextField}
                variant="standard"
                label="Password"
                name="password"
                placeholder="Enter password"
                type="password"
                fullWidth
                required
                helperText={
                  <ErrorMessage name="password">
                    {(msg) => <div style={{ color: 'red' }}>{msg}</div>}
                  </ErrorMessage>
                }
              />
              <Field
                as={FormControlLabel}
                name="remember"
                control={<Checkbox color="primary" />}
                label="Remember me"
              />
              <div
                style={{
                  width: '100%',
                  textAlign: 'center',
                  marginBottom: '10px',
                }}
              >
                <Button
                  type="submit"
                  color="primary"
                  variant="contained"
                  disabled={props.isSubmitting}
                  style={btnstyle}
                  fullWidth
                  onClick={handleLogin}
                >
                  {props.isSubmitting ? 'LOADING' : 'LOGIN'}
                </Button>
              </div>
            </Form>
          )}
        </Formik>

        <Typography component={'div'}>
          Do you have an account ?
          <Link href="#" onClick={() => handleChange('event', 1)}>
            {' '}
            Sign Up
          </Link>
        </Typography>
      </Paper>
    </Grid>
  );
};

const useFormInput = (initialValue) => {
  // Initial State save user's value to input field
  const [value, setValue] = useState(initialValue);

  const handleChange = (e) => {
    setValue(e.target.value);
  };
  return {
    value,
    onChange: handleChange,
  };
};

export default Login;
