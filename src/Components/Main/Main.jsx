import React from 'react';
import style from './Main.module.css';
import TodoForm from './TodoForm/TodoForm';

class Main extends React.Component {

    render() {
        return (
            <main className={style.main}>
                <h1 className={style.main__title}>Awesome TODO List</h1>
                <TodoForm state={this.props.state}
                    handleChange={this.props.handleChange}
                    handleSubmit={this.props.handleSubmit}
                    handleDone={this.props.handleDone}
                />
            </main>
        );
    }
}

export default Main;