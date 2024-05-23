import React from 'react';
import './footer.css';

const Footer = () => {
    return (
  		<div className="footerContainer">
    		<div className="socMedFooterContainer">
	          <a href="https://www.fb.com/jonCoVic" target="_blank" rel="norefferer noopener">FACEBOOK</a>
	          <a href="https://www.instagram.com/jonceevee" target="_blank" rel="norefferer noopener">INSTAGRAM</a>
	        </div>
        	<button 
        		type="button" 
	            onClick={
	              ()=>{
	                window.open('mailto:jonathanvictorio92@outlook.com')
	              }
	            } 
	            title="jonathanvictorio92@outlook.com">
	            	CONTACT
	        </button>
  		</div>      
    );
};

export default Footer;