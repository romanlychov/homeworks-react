import { useContext, useState } from 'react';
import { ThemeContext } from '../../../Contexts/ThemeContext';
import style from './Main.module.css';

const MainStarships = (props) => {

    const { darkTheme } = useContext(ThemeContext);

    const [starship, setStarship] = useState({});
    const [visible, setVisible] = useState(false);

    return (
        <main>
            <ul className={darkTheme ? style.listDark : style.listLight}>
                {props.request.map(item => (
                    <li key={item.name}
                        onClick={() => {
                            setStarship({
                                name: item.name,
                                model: item.model,
                                manufacturer: item.manufacturer,
                                starship_class: item.starship_class
                            })
                            setVisible(true)
                        }}
                        className={darkTheme ? style.listItemDark : style.listItemLight}
                    >{item.name}</li>
                ))}
            </ul>

            <div className={visible ? style.visible : style.unvisible}>
                <article className={style.card}>
                    <h3 className={style.cardTitle}>{starship.name}</h3>
                    <p>Model: {starship.model}</p>
                    <p>Manufacturer: {starship.manufacturer}</p>
                    <p>Starship class: {starship.starship_class}</p>
                    <button className={style.cardBTN} onClick={() => setVisible(false)}>Close</button>
                </article>
            </div>
        </main>
    );
}

export default MainStarships;