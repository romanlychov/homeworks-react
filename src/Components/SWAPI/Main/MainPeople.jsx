import { useContext, useState } from 'react';
import { ThemeContext } from '../../../Contexts/ThemeContext';
import style from './Main.module.css';

const MainPeople = (props) => {

    const { darkTheme } = useContext(ThemeContext);

    const [person, setPerson] = useState({});
    const [visible, setVisible] = useState(false);

    return (
        <main>
            <ul className={darkTheme ? style.listDark : style.listLight}>
                {props.request.map(item => (
                    <li key={item.name}
                        onClick={() => {
                            setPerson({
                                name: item.name,
                                birth_year: item.birth_year,
                                gender: item.gender,
                                hair_color: item.hair_color
                            })
                            setVisible(true);
                        }}
                        className={darkTheme ? style.listItemDark : style.listItemLight}
                    >{item.name}</li>
                ))}
            </ul>

            <div className={visible ? style.visible : style.unvisible}>
                <article className={style.card}>
                    <h3 className={style.cardTitle}>{person.name}</h3>
                    <p>Birth year: {person.birth_year}</p>
                    <p>Gender: {person.gender}</p>
                    <p>Hair color: {person.hair_color}</p>
                    <button className={style.cardBTN} onClick={() => setVisible(false)}>Close</button>
                </article>
            </div>
        </main>
    );
}

export default MainPeople;