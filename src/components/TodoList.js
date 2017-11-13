import React from 'react';
import TodoListItem from './TodoListItem';

const TodoList = props => props.todos.map(
    todo => <TodoListItem key={todo} todo={todo} deleteHandler={props.deleteHandler} />
);

export default TodoList;