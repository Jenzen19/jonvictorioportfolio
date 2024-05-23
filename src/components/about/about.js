import {React,useContext} from 'react';
import './about.css';
import { Footer } from '../../components';
import {useNav} from '../../hooks/useNav';
import {NavContext} from '../../context/navContext';

const About = () => {
    const aboutRef = useNav("about");
    const {activeLinkId} = useContext(NavContext);
    console.log(activeLinkId);
    return (
  		<div className="aboutContainer" id="aboutmeSection" ref={aboutRef}>
    		<div className="socmedContainer">
          <div className="imgContainer1">
            <img className={activeLinkId === "about" ? "img2Transition" :"img2"} src={require("../../assets/img/img02@3x.png")}></img>
            <img className={activeLinkId === "about" ? "img1Transition" :"img1"} src={require("../../assets/img/img01@3x.png")}></img>
          </div>
          <img className={activeLinkId === "about" ? "img3Transition" :"img3"} src={require("../../assets/img/img03@3x.png")}></img>  
        </div>
        <div className="aboutBodyContainer">
          <div className="aboutHeading">
            <p className="headingTitle"><span className="headerSpan">DESIGNER</span></p><p className="smallHeader">&</p>
            <p className="headingTitle"><span className="headerSpan">DEVELOPER</span></p>
          </div>
          <p className="subHeader"><span className="stretch">LET'S CONNECT<br/>LET'S WORK TOGETHER</span></p>
          
          <p className="miniSubHeader">I'M MOST INTERESTED ABOUT</p>

          <div className="aboutInfo">
            <p>FRONTEND DEVELOPMENT</p>
            <div className="breaker"/>
            <p>REACT NATIVE DEVELOPMENT</p>
            <div className="breaker"/>
            <p>UI/UX DESIGN</p>
            <div className="breaker"/>
            <p>BASKETBALL</p>
            <div className="breaker"/>
            <p>WORKOUT</p>
            <div className="breaker"/>
            <p>COFFEE</p>
          </div>

          <Footer/>
        </div>
  		</div>      
    );
};

export default About;