import React from 'react';
import style from './Header.module.css';
import cn from 'classnames';
import chewbacca from './img/chewbacca.png'
import planet from './img/planet.png'
import starship from './img/t-65b-x-wing-starfighter.png'

class Header extends React.Component {
    render() {
        return (
            <header className={cn(style.header)}>
                <button className={style.button} onClick={() => this.props.getRequest('people')}>PEOPLE <img src={chewbacca} alt='chewbacca' /></button>
                <button className={style.button} onClick={() => this.props.getRequest('planets')}>PLANETS <img src={planet} alt='planet' /></button>
                <button className={style.button} onClick={() => this.props.getRequest('starships')}>STARSHIPS <img src={starship} alt='starship' /></button>
            </header>
        );
    }
}

export default Header;