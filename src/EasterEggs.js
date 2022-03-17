import React from 'react';
import ReactDOM from 'react-dom';
import { useEffect } from 'react';

const ChangeBackgroundColor = () => {
    return ReactDOM(document.getElementsById("App").style.background = "red");
}

export default ChangeBackgroundColor;