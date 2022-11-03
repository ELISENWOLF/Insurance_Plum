import React, { useState } from "react";
import { Formik, Form } from "formik";
import { Link, useNavigate } from 'react-router-dom';
import TextField from "./TextField";
import * as Yup from 'yup'; 
import "./signin.scss";

const Index_signin = () => {
    

    const validate = Yup.object({
        email: Yup.string()
        .email('Email is invalid')
        .required('email is required'),
        password: Yup.string()
        .min(6, 'Password must be at least 6 characters')
        .required('password is required')
    })
  return (
    <Formik
      initialValues={{
        email: '',
        password: ''
      }}
      validationSchema={validate}
      onSubmit={values=> {
        console.log(values)
      }}
    >
      {formik => (
        <div>
          <Form>
            <TextField label="Email" name="email" type="email" placeholder="Enter"/>
            <TextField label="Password" name="password" type="password" placeholder="Enter"/>
            <div className="submit-reset-btn">
            <button className="submit" type="submit">Sign In</button>
            <button className="reset" type="reset">Reset</button>
            </div>
            <p>Already have an account!<Link to='/register' className="register"><button className="btn-register">Signin</button></Link></p>
          </Form>
        </div>
      )}
    </Formik>
  );
};

export default Index_signin;
