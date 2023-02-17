import React from 'react';
import TodoElement from './TodoElement/TodoElement';
import './TodoForm.css';

class TodoForm extends React.Component {

    render() {
        return (
            <form className='form' onSubmit={this.props.handleSubmit}>
                <div className='input-btn-wrapper'>
                    <input type='text'
                        placeholder='What needs to do?'
                        onChange={this.props.handleChange}
                        value={this.props.state.inputValue}
                        className='input'
                    />
                    <button className='add-btn'>Add task</button>
                </div>
                <TodoElement todoList={this.props.state.todoList} handleDone={this.props.handleDone}/>
            </form>
        );
    }
}

export default TodoForm;