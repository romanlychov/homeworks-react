import React from "react";
import style from './Main.module.css';

class MainStarships extends React.Component {
    state = {
        starships: {},
        visible: false,
    }

    setPlanet = (name, model, manufacturer, starship_class) => {
        this.setState({
            starships: {
                name: name,
                model: model,
                manufacturer: manufacturer,
                starship_class: starship_class,
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
                                this.setPlanet(item.name, item.model, item.manufacturer, item.starship_class)
                            }}
                            className={style.listItem}
                        >{item.name}</li>
                    ))}
                </ul>

                <div className={this.state.visible ? style.visible : style.unvisible}>
                    <article className={style.card}>
                        <h3 className={style.cardTitle}>{this.state.starships.name}</h3>
                        <p>Model: {this.state.starships.model}</p>
                        <p>Manufacturer: {this.state.starships.manufacturer}</p>
                        <p>Starship class: {this.state.starships.starship_class}</p>
                        <button className={style.cardBTN} onClick={this.onClickVis}>Close</button>
                    </article>
                </div>
            </main>
        );
    }
}

export default MainStarships;