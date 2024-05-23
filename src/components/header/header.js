import {React,useContext} from 'react';
import {useNav} from '../../hooks/useNav';
import './header.css';
import {NavContext} from '../../context/navContext';

const Header = () => {
  const {activeLinkId} = useContext(NavContext);

  const headerRef = useNav("Header");
  return (
    <div className="headerContainer" id="headerSection" ref={headerRef}>
      <div className="introContainer">
        <div className="smContainer">
          <a className="socbtn fbSoc" href="https://www.fb.com/jonCoVic">  
            <img className="fbIcon" src={require("../../assets/img/fb icon.png")}></img>
          </a>  
          <a className="socbtn igSoc" href="https://www.instagram.com/jonceevee">
            <img className="igIcon" src={require("../../assets/img/ig icon.png")}></img>
          </a>  
          <a className="socbtn linkedinSoc" href="https://www.linkedin.com/in/jonathan-victorio-a23639233/">
            <img className="linkedinIcon" src={require("../../assets/img/linkedin 1.png")}></img>
          </a>
        </div>
        <p className="introHello">
          <span className="stretch">
            HELLO. I AM JON
          </span>
        </p>
        <p className="introFullName">Jonathan Victorio</p>
      </div>
      <div className="headerBody">
        <p className="bodyFont">
        I AM A DEVELOPER AND UX/UI DESIGNER BASED IN THE PHILIPPINES. I LOVE MINIMAL DESIGN. I LOVE EXERCISING, PIZZA AND COFFEE. JUST BECAUSE MY NAME IS JON DOES NOT MEAN I KNOW NOTHING. IYKYK.
        </p>
        <button 
          type="button" 
          onClick={
            ()=>{
              window.open('mailto:jonathanvictorio92@outlook.com')
              }
            } 
          title="jonathanvictorio92@outlook.com">
            CONTACT ME
        </button>
      </div>
    </div>      
  );
};

export default Header;