import React from "react";
import style from './Main.module.css';

class MainPlanets extends React.Component {
    state = {
        planet: {},
        visible: false,
    }

    setPlanet = (name, population, rotation_period, diameter) => {
        this.setState({
            planet: {
                name: name,
                population: population,
                rotation_period: rotation_period,
                diameter: diameter,
            },
            visible: true
        })
    }

    onClickVis = () => {
        this.setState({ visible: false })
    }

    render() {
        return (
            <main>
                <ul className={style.list}>
                    {this.props.state.queryResult.map(item => (
                        <li key={item.name}
                            onClick={() => {
                                this.setPlanet(item.name, item.population, item.rotation_period, item.diameter)
                            }}
                            className={style.listItem}
                        >{item.name}</li>
                    ))}
                </ul>

                <div className={this.state.visible ? style.visible : style.unvisible}>
                    <article className={style.card}>
                        <h3>{this.state.planet.name}</h3>
                        <p>Population: {this.state.planet.population}</p>
                        <p>Rotation period: {this.state.planet.rotation_period}</p>
                        <p>Diameter: {this.state.planet.diameter}</p>
                        <button className={style.cardBTN} onClick={this.onClickVis}>Close</button>
                    </article>
                </div>
            </main>
        );
    }
}

export default MainPlanets;