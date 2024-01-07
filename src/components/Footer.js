// Footer.js

import React from 'react';

const Footer = () => {
  return (
    <footer style={footerStyle}>
      <p style={textStyle}>© 2024 bondfy. All rights reserved.</p>
      <p>Website created by <a href='https://thilisadiki.dev'>Thili Sadiki</a></p>
    </footer>
  );
};

const footerStyle = {
  backgroundColor: '#333',
  color: '#fff',
  padding: '20px',
  textAlign: 'center',
  position: 'relative',
  bottom: 0,
};

const textStyle = {
  margin: 0,
};

export default Footer;
