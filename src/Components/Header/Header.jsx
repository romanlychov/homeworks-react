import React from 'react';
import './Header.css';

class Header extends React.Component {
    render() {
        return (
            <header className='header'>
                <nav className='navigation'>
                    <ul className='links'>
                        <li className='links__link-item'><a className='links__link-item_style' href='#'>Home</a></li>
                        <li className='links__link-item'><a className='links__link-item_style' href='#'>News</a></li>
                        <li className='links__link-item'><a className='links__link-item_style' href='#'>Contacts</a></li>
                        <li className='links__link-item'><a className='links__link-item_style' href='#'>About</a></li>
                    </ul>
                </nav>
            </header>
            
        );
    }
}

export default Header;