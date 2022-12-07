import React from 'react'
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
            <h3 className="title1">Sign In</h3>
            <Index_signin />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Signin
