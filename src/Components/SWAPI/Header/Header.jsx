import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { LanguageContext } from '../../../Contexts/LanguageContext';
import { ThemeContext } from '../../../Contexts/ThemeContext';
import LanguageToggler from '../Togglers/LanguageToggler';
import ThemeToggler from '../Togglers/ThemeToggler';
import style from './Header.module.css';
import chewbacca from './img/chewbacca.png'
import planet from './img/planet.png'
import starship from './img/t-65b-x-wing-starfighter.png'

const Header = (props) => {

    const { darkTheme } = useContext(ThemeContext);
    const { english } = useContext(LanguageContext);

    return (
        <header className={darkTheme ? style.headerDark : style.headerLight}>
            <Link to='people' onClick={() => props.fetchData('people')}>{english ? 'PEOPLE' : 'ЛЮДИ'} <img src={chewbacca} alt='chewbacca' /></Link>
            <Link to='planets' onClick={() => props.fetchData('planets')}>{english ? 'PLANETS' : 'ПЛАНЕТИ'} <img src={planet} alt='planet' /></Link>
            <Link to='starships' onClick={() => props.fetchData('starships')}>{english ? 'STARSHIPS' : 'КОСМІЧНІ КОРАБЛІ'} <img src={starship} alt='starship' /></Link>

            <ThemeToggler />
            <LanguageToggler />
        </header>
    );
}

export default Header;