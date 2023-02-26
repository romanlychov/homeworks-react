import React from 'react';
import style from './Main.module.css';
import PhoneBook from './PhoneBook/PhoneBook';
// import TodoForm from './TodoForm/TodoForm';

class Main extends React.Component {



    render() {
        return (
            <main className={style.main}>

                {/* TODO List */}
                {/* <h1 className={style.main__title}>Awesome TODO List</h1>
                <TodoForm state={this.props.state}
                    handleChange={this.props.handleChange}
                    handleSubmit={this.props.handleSubmit}
                    handleDone={this.props.handleDone}
                /> */}

                <h1 className={style.main__title}>Phone Book</h1>
                <PhoneBook
                    state={this.props.state}
                    addNewContact={this.props.addNewContact}
                    deleteContactButton={this.props.deleteContactButton}
                />
            </main>
        );
    }
}

export default Main;