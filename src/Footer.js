import React from 'react';
import ChangeBackgroundColor from './EasterEgg';

const Footer = () => (
    <div className="footer">
      <hr className="hr-grad" />
      <p id="easterOne" onClick={() => {ChangeBackgroundColor()}}>&copy; Chris of Sweden</p>
    </div>
  );

export default Footer;