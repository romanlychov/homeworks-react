import React from 'react';
import TodoElement from './TodoElement/TodoElement';
import style from './TodoForm.module.css';

class TodoForm extends React.Component {

    render() {
        return (
            <form className={style.form} onSubmit={this.props.handleSubmit}>
                <div className={style.inputBtnWrapper}>
                    <input type='text'
                        placeholder='What needs to do?'
                        onChange={this.props.handleChange}
                        value={this.props.state.inputValue}
                        className={style.input}
                    />
                    <button className={style.addBtn}>Add task</button>
                </div>
                <TodoElement todoList={this.props.state.todoList} handleDone={this.props.handleDone}/>
            </form>
        );
    }
}

export default TodoForm;