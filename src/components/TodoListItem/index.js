/**
 * @author rc-chandan
 * 
 * Todo List Item component, this component renders a html list item
 * with the TODO title.
 * 
 * Check conditional rendering, based on the status of the todo the 
 * List Item text is either striked or normal
 */

import React from 'react';
import { TODO_STATUS } from '../../constants';
import './TodoListItem.css';

const TodoListItem = props => {
    const { todo, deleteHandler, toggleTodoStatus } = props;
    return (
    <div>
        <li className="todo-list-item-text" onClick={toggleTodoStatus.bind(null, todo.id)}>
            {getStyledTodo(todo, toggleTodoStatus)}
        </li>
        <button 
            className="todo-list-item-delete-btn" 
            onClick={deleteHandler.bind(null, todo.id)}
        >X</button>
    </div>
   );
}

// Conditional rendering of the List Item text
function getStyledTodo(todo, toggleTodoStatus) {
    if(todo.status === TODO_STATUS.COMPLETE) 
        return <strike>{todo.title}</strike>
    
    return todo.title;
}

export default TodoListItem;