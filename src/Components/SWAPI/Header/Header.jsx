import style from './Header.module.css';
import chewbacca from './img/chewbacca.png'
import planet from './img/planet.png'
import starship from './img/t-65b-x-wing-starfighter.png'

const Header = (props) => {
    return (
        <header className={style.header}>
            <button className={style.button} onClick={() => props.fetchData('people')}>PEOPLE <img src={chewbacca} alt='chewbacca' /></button>
            <button className={style.button} onClick={() => props.fetchData('planets')}>PLANETS <img src={planet} alt='planet' /></button>
            <button className={style.button} onClick={() => props.fetchData('starships')}>STARSHIPS <img src={starship} alt='starship' /></button>
        </header>
    );
}

export default Header;