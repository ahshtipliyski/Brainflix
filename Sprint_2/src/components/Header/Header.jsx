import React from 'react';
import '../../App.scss'
import '../Header/Header.scss';
import logo from '../../assets/Logo/Logo-brainflix.svg';
import {Link} from 'react-router-dom';


function Header() {
  
  return (
    <nav className="nav-bar">
      <Link to="/" className="nav-bar__logo-container"><a href="#"><img src={logo} alt="Brainflix logo" className="nav-bar__logo"/></a></Link>
      <div className="nav-bar__input-container">
        <input type="text" className="nav-bar__input" placeholder= "      Search" />
      </div>
      <div className="nav-bar__account">
        <Link to="/upload" className="nav-bar__upload-button"><span className="nav-bar__plus">+</span> UPLOAD</Link>
        <img src="/Images/Mohan-muruge.jpg" alt="User Icon" className="nav-bar__icon"/> 
      </div>
    </nav>
  );
}

export default Header;