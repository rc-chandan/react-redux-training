import React from 'react';
import { TODO_STATUS } from '../../constants';
import './TodoListItem.css';

const TodoListItem = props => {
    const { todo, deleteHandler, toggleTodoStatus } = props;
    return (
    <div>
        {getStyledTodo(todo, toggleTodoStatus)}
        <button className="todo-list-item-delete-btn" onClick={deleteHandler.bind(null, todo.id)}>X</button>
    </div>
   );
}

function getStyledTodo(todo, toggleTodoStatus) {
    if(todo.status === TODO_STATUS.COMPLETE) 
        return <li className="todo-list-item-text" onClick={toggleTodoStatus.bind(null, todo.id)}><strike>{todo.title}</strike></li>;
    return <li className="todo-list-item-text" onClick={toggleTodoStatus.bind(null, todo.id)}>{todo.title}</li>;
}

export default TodoListItem;