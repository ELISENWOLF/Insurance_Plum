import React from 'react'
import { Formik, Form } from 'formik'
import './signin.scss'

const Index_signin = () => {
  return (
    <Formik>
      {formik => {
        console.log(formik)
      }}
      
    </Formik>
  )
}

export default Index_signin
