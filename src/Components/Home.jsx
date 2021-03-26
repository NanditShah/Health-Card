import React, { useEffect } from "react";
import "react-jquery-plugin";
import "./Home.css";
import { useSpring } from "@react-spring/core"; 
import { animated } from "@react-spring/web";
const Home = () => {

  const homeAnimation = useSpring({opacity:1, from: {opacity:0},config:{duration:1000}})
  const numberAnimation  = useSpring({number:1000,from:{number:0}})

  useEffect(() => {
    window.$(function () {
      window.$(window).scroll(() => {

        // Animation for Intro DIV
        if (window.$(window).scrollTop() > 100) {
          window.$(".intro").animate({ marginLeft: "12%"},700);
          window.$(".intro").removeClass("remove");
        } else {
          window.$(".intro").addClass("remove");
        }

        // Animation for steps-to-follow DIV
        if (window.$(window).scrollTop() > 500) {
          window
            .$(".steps-to-follow")
            .animate({ marginLeft: "10%"},700);
          window.$(".steps-to-follow").removeClass("remove");
        } else {
          window.$(".steps-to-follow").addClass("remove");
        }


        // Animation for partners DIV
        if (window.$(window).scrollTop() > 800) {
          window.$(".partners").animate({ marginLeft: "15%"},700);
          window.$(".partners").removeClass("remove");
        } else {
          window.$(".partners").addClass("remove");
        }
      });
    });
  });
  return (
    <>

    
      <animated.div style={homeAnimation} className="home">
        <h1 className="greet-message">Welcome to Aarogya-Card</h1>
        <p>"Bring all your medical history here"</p>
        <br />
        <a href='/HealthCard/Register'><button className="register-button">Register</button></a>
      </animated.div>




      <h1 className="heading">Major Questions</h1>
      <div className="intro">
        <h2 className="questions">What is AraogyCard?</h2>
        <p className="answers">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
        <h2 className="questions">Why to use ArogyCard?</h2>
        <p className="answers">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
      </div>




      <h1 className="heading">Steps to Follow</h1>
      <div className="steps-to-follow">
        <ol>
          <li>Lorem Ipsum is simply dummy</li>
          <li>Lorem Ipsum is simply dummy</li>
          <li>Lorem Ipsum is simply dummy</li>
          <li>Lorem Ipsum is simply dummy</li>
          <li>Lorem Ipsum is simply dummy</li>
        </ol>
      </div>




      <h1 className='heading'>Out Major Partners</h1>
      <div className="partners">
        <div className="image">
          <img
            className="comapny"
            src="https://www.designevo.com/res/templates/thumb_small/bright-blue-kaleidoscope.png"
            alt="Company1"
          />
          <img
            className="comapny"
            src="https://www.designevo.com/res/templates/thumb_small/bright-blue-kaleidoscope.png"
            alt="Company1"
          />
          <img
            className="comapny"
            src="https://www.designevo.com/res/templates/thumb_small/bright-blue-kaleidoscope.png"
            alt="Company1"
          />
          
        </div>
      </div>



      <h1 className="heading">User Information</h1>
      <div className = 'users-info'>
       <div className = 'doctor-count info-section'>
       <h5>Total Doctor Connected To Us</h5>
       <animated.p style={numberAnimation}>{numberAnimation.number}</animated.p>
       </div>
       <div className = 'patitent-count info-section'>
       <h5>Total Patient Connected To Us</h5>
       <animated.p style={numberAnimation}>{numberAnimation.number}</animated.p>

        </div>
       <div className = 'daily-user-count info-section'>
       <h5>Total User Connected To Us</h5>
       <animated.p style={numberAnimation}>{numberAnimation.number}</animated.p>

      </div>
      </div>
    </>
  );
};

export default Home;
