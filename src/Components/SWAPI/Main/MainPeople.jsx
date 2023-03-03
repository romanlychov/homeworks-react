import React from "react";
import style from './Main.module.css';

class MainPeople extends React.Component {
    state = {
        person: {},
        visible: false,
    }

    setPerson = (name, birth_year, gender, hair_color) => {
        this.setState({
            person: {
                name: name,
                birth_year: birth_year,
                gender: gender,
                hair_color: hair_color,
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
                                this.setPerson(item.name, item.birth_year, item.gender, item.hair_color)
                            }}
                            className={style.listItem}
                        >{item.name}</li>
                    ))}
                </ul>

                <div className={this.state.visible ? style.visible : style.unvisible}>
                    <article className={style.card}>
                        <h3 className={style.cardTitle}>{this.state.person.name}</h3>
                        <p>Birth year: {this.state.person.birth_year}</p>
                        <p>Gender: {this.state.person.gender}</p>
                        <p>Hair color: {this.state.person.hair_color}</p>
                        <button className={style.cardBTN} onClick={this.onClickVis}>Close</button>
                    </article>
                </div>

            </main>
        );
    }
}

export default MainPeople;