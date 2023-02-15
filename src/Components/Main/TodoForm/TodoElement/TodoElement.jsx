import React from 'react';
import './TodoElement.css';

class TodoElement extends React.Component {

    render() {
        return (
            <div>
                {this.props.todoList.map(item => {
                    return (
                        <article
                            key={item.id}
                            onClick={() => { this.props.handleDone(item) }}
                            className={item.done ? 'task completede-task' : 'task'}
                        >{item.text} <span className={item.done ? 'visible' : 'unvisible'}>Completed</span></article>
                    );
                })}
            </div>
        );
    }
}

export default TodoElement;