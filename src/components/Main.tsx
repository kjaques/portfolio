import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import '../assets/styles/Main.scss';
import cartoonheadshot from '../assets/images/cartoonheadshot.png';
import Typewriter from 'typewriter-effect';

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src={cartoonheadshot} 
            alt="Avatar" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="mailto:jaques.kyle@gmail.com" target="_blank" rel="noreferrer"><EmailIcon/></a>
            <a href="https://www.linkedin.com/in/kyle-jaques/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
            <a href="https://github.com/kjaques" target="_blank" rel="noreferrer"><GitHubIcon/></a>
          </div>
          <h1>Kyle Jaques</h1>
          <p>
          <Typewriter
            options={{
              strings: ['Data Analyst', 'Research Project Coordinator', 'Full Stack Web Developer', 'Problem Solver', 'Graphic Designer', 'Manager of Operations', 'Training Instructor', 'Business Administrator', 'Dot Connector'],
              cursor: '_',
              autoStart: true,
              loop: true,
              delay: 75, // typing speed
              deleteSpeed: 50, // backspacing speed
            }}
          />
          </p>

          <div className="mobile_social_icons">
            <a href="https://github.com/kjaques" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/kyle-jaques/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;