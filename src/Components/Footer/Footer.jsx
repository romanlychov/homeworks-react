import React from 'react';
import './Footer.css';

let date = new Date();
let currentYear = date.getFullYear();

class Footer extends React.Component {
    render() {
        return (
            <footer className='footer'>© {currentYear}, Roman Lychov</footer>
        );
    }
}

export default Footer;