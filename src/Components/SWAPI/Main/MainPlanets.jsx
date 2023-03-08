import { useState } from 'react';
import style from './Main.module.css';

const MainPlanets = (props) => {
    const [planet, setPlanet] = useState({});
    const [visible, setVisible] = useState(false);

    return (
        <main>
            <ul className={style.list}>
                {props.request.map(item => (
                    <li key={item.name}
                        onClick={() => {
                            setPlanet({
                                name: item.name,
                                population: item.population,
                                rotation_period: item.rotation_period,
                                diameter: item.diameter
                            })
                            setVisible(true)
                        }}
                        className={style.listItem}
                    >{item.name}</li>
                ))}
            </ul>

            <div className={visible ? style.visible : style.unvisible}>
                <article className={style.card}>
                    <h3 className={style.cardTitle}>{planet.name}</h3>
                    <p>Population: {planet.population}</p>
                    <p>Rotation period: {planet.rotation_period}</p>
                    <p>Diameter: {planet.diameter}</p>
                    <button className={style.cardBTN} onClick={() => setVisible(false)}>Close</button>
                </article>
            </div>
        </main>
    );
}

export default MainPlanets;