import React from 'react';
import style from './Header.module.css';
import cn from 'classnames';

class Header extends React.Component {
    render() {
        return (
            <header className={style.header}>
                <nav className={style.navigation}>
                    <ul className={style.links}>
                        <li className={style.links__linkItem}><a className={cn(style.links, style.links__linkItem_style)} href='#'>Home</a></li>
                        <li className={style.links__linkItem}><a className={cn(style.links, style.links__linkItem_style)} href='#'>News</a></li>
                        <li className={style.links__linkItem}><a className={cn(style.links, style.links__linkItem_style)} href='#'>Contacts</a></li>
                        <li className={style.links__linkItem}><a className={cn(style.links, style.links__linkItem_style)} href='#'>About</a></li>
                    </ul>
                </nav>
            </header>
            
        );
    }
}

export default Header;