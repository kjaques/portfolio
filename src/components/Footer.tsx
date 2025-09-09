import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import '../assets/styles/Footer.scss'

function Footer() {
  return (
    <footer>
      <div>
        <a href="mailto:jaques.kyle@gmail.com" target="_blank" rel="noreferrer"><EmailIcon/></a>
        <a href="https://www.linkedin.com/in/kyle-jaques/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
        <a href="https://github.com/kjaques" target="_blank" rel="noreferrer"><GitHubIcon/></a>
      </div>
      <p>A portfolio built by <a href="https://github.com/kjaques/portfolio" target="_blank" rel="noreferrer">Kyle Jaques</a> with 💜</p>
    </footer>
  );
}

export default Footer;