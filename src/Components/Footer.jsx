import React from 'react';
import { useContext } from 'react';
import { ContextGlobal } from './utils/global.context';

const Footer = () => {
  const { state } = useContext(ContextGlobal);

  return (
    <footer className={state.theme === 'dark' ? 'dark' : ''}>
      <div className="left">
        <p>Powered by</p>
        <img src="./images/DH.png" alt="DH-logo" />
      </div>
      <div className="social-icons">
        <img className="icon" src="./images/ico-facebook.png" alt="facebook-logo" />
        <img className="icon" src="./images/ico-instagram.png" alt="instagram-logo" />
        <img className="icon" src="./images/ico-whatsapp.png" alt="whatsapp-logo" />
        <img className="icon" src="./images/ico-tiktok.png" alt="tiktok-logo" />
      </div>
    </footer>
  );
};

export default Footer;
