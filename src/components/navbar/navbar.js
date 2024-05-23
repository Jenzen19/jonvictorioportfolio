import React, { useState, useRef, useEffect,useContext } from 'react';
import './navbar.css';
import {NavContext} from '../../context/navContext';

// import {HashLink as Link} from 'react-router-hash-link';

const Menu = ()=>{
  const {activeLinkId} = useContext(NavContext);

  return(
    <div className="menuItems" id="home">
      <div className="navlinkContainer">
        <a href="https://www.linkedin.com/in/jonathan-victorio-a23639233/" target="_blank" rel="norefferer noopener">resume</a>
      </div>
      <div className="navlinkContainer">
        <a href="/#aboutmeSection">about</a>
      </div>
      <div className="navlinkContainer">
        <a href="mailto:jonathanvictorio92@outlook.com" target="_blank" rel="norefferer noopener">contact</a>
      </div>
    </div>
)}


const NavBar = () => {
  return (
    <div className="navBarContainer" id="home">
      <div className="logoContainer">
    	  <a href="/">Jonathan Victorio</a>
      </div>
      <div className="navLinks">
        <Menu />
      </div>
    </div>      
  );
};

export default NavBar;