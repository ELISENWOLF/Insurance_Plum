import React, { useState } from "react";
import "./header.scss"
import { images } from "../../images";
import { Link } from "react-router-dom";

const Header = () => {
  const [open, setOpen] = useState(false)
  const handleclick = (e) => {
    e.preventDefault();
    setOpen(!open)
  }
  return <div>
    <header>
      <nav className="navbar container">
        <div className="logo">
          <img src={images.logo} alt="" />
        </div>
        <ul className={open ? `nav-items active` : `nav-items`}>
          <Link to='/' className="link"><li>Home</li></Link>
          <li><Link to='#' className="link">About</Link></li>
          <li><Link to='#' className="link">Contact</Link></li>
          <Link to='/signin' className="signin"><li className="btn btn--nav-btn">Sign in</li></Link>
        </ul>
        <div className="hamburger">
          <img src={images.hamburger} alt="" onClick={handleclick} />
        </div>
      </nav>
    </header>
  </div>;
};

export default Header;
