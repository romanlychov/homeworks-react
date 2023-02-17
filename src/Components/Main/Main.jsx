import React from 'react';
import './Main.css';
import TodoForm from './TodoForm/TodoForm';

class Main extends React.Component {

    render() {
        return (
            <main className='main'>
                <h1 className='main__title'>Awesome TODO List</h1>
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