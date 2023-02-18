import React from 'react';
import style from './Footer.module.css';

let date = new Date();
let currentYear = date.getFullYear();

class Footer extends React.Component {
    render() {
        return (
            <footer className={style.footer}>© {currentYear}, Roman Lychov</footer>
        );
    }
}

export default Footer;