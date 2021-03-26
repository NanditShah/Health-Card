import React, { useEffect } from "react";
import "./Footer.css";

const Footer = () => {

    useEffect( () => {
        
    })

    function scrollToTop() {
        window.scrollTo({
            top:0,
            behavior:'smooth'
        })
    }
  return (
    <>
      <footer className="footer">
        <div className="contact-info">
        <h4>Contact Info</h4>
          <div className="address">
        <h6>Address</h6>
            <p>XYZ,</p>
            <p>ABCDEFGHIJKLMO,</p>
            <p>ABCDEFGHIJKLMO,</p>
            <p>313541</p>
          </div>

          <div className="details">
        <h6>Contact No and Email ID.</h6>
            <p>1231231231</p>
            <p>xyz1122@healthcard.com</p>
          </div>
        </div>

        
        <div className="sc-handels">
          <h4>Follow Us</h4>
          <div className='handels'>
            <button className='handle'><a href='https://www.facebook.com/'>FB</a></button>
            <button className='handle'><a href='https://twitter.com/?lang=en'>TW</a></button>
            <button className='handle'><a href='https://www.instagram.com/'>INS</a></button>
            <button className='handle'><a href='https://www.linkedin.com/signup'>LNK</a></button>
          </div>
        </div>
        <div className='other-links'>
        <h4>Other Links</h4>
        <button onClick={scrollToTop} className='top-button'><a> TOP ↑ </a> </button>
        </div>
      </footer>
    </>
  );
};

export default Footer;
