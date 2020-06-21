import React from 'react';
import '../../App.scss'
import '../Header/Header.scss';
import logo from '../../assets/Logo/Logo-brainflix.svg';


function Header() {
  
  return (
    <nav className="nav-bar">
      <div className="nav-bar__logo-container"><a href="#"><img src={logo} alt="Brainflix logo" className="nav-bar__logo"/></a></div>
      <div className="nav-bar__input-container">
        <input type="text" className="nav-bar__input" placeholder= "      Search" />
      </div>
      <div className="nav-bar__account">
        <button className="nav-bar__upload-button"><span className="nav-bar__plus">+</span> UPLOAD</button>
        <img src="/Images/Mohan-muruge.jpg" alt="User Icon" className="nav-bar__icon"/>   {/*  src={userIcon} */}
      </div>
    </nav>
  );
}

export default Header;