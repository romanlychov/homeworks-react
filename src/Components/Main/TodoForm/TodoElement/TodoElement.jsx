import React from 'react';
import style from './TodoElement.module.css';
import cn from 'classnames';

class TodoElement extends React.Component {

    render() {
        return (
            <div>
                {this.props.todoList.map(item => {
                    return (
                        <article
                            key={item.id}
                            onClick={() => { this.props.handleDone(item) }}
                            className={item.done ? cn(style.task, style.completedeTask) : style.task}
                        >{item.text} <span className={item.done ? style.visible : style.unvisible}>Completed</span>
                        </article>
                    );
                })}
            </div>
        );
    }
}

export default TodoElement;