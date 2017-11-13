import React from 'react';
import TodoListItem from './TodoListItem';

const TodoList = props => props.todos.map(
    todo => <TodoListItem 
        key={todo.id} 
        todo={todo} 
        deleteHandler={props.deleteHandler} 
        toggleTodoStatus={props.toggleTodoStatus} 
    />
);

export default TodoList;