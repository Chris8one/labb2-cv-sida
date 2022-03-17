import React from 'react';
import ChangeBackgroundColor from './EasterEggs';

const Footer = () => (
    <div className="footer">
      <hr className="hr-grad" />
      <p id="easterOne" onClick={() => {this.ChangeBackgroundColor()}}>&copy; Chris of Sweden</p>
    </div>
  );

export default Footer;