import React from 'react'
import { Link } from 'react-router-dom';
import { images } from '../../images';
import Index_signin from './Index';
import "./signin.scss"

const Signin = () => {
  return (
    <div>
    <div className="login">
      <div className="right-top-image">
        <picture>
          <source
            media="(max-width:767px)"
            srcSet={images.intro_right_mobile}
          />
          <img src={images.intro_right} alt="" />
        </picture>
      </div>
      <div className="login__wrapper container">
        <div className="login__content">
            <h2 className='title1'>
                SignIn
            </h2>
          <Index_signin />
        </div>
      </div>
    </div>
  </div>
  )
}

export default Signin
