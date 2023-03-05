import { useState } from 'react';
import style from './Main.module.css';

const MainStarships = (props) => {
    const [starship, setStarship] = useState({});
    const [visible, setVisible] = useState(false);

    return (
        <main>
            <ul className={style.list}>
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
                        className={style.listItem}
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