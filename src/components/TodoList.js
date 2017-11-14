/**
 * @author rc-chandan
 * 
 * This component gets the todos from parent loops through all the
 * Todos and prints TodoListItems. This is also a dumb component
 * 
 * Look how wrote a functional component its not a class component
 * Infact there is no class which extends React.Component here :)
 * 
 * Functional components are always better the code is readable 
 * and its very small, It you don't need internal state and any
 * life cycle methods and its just a dumb component, Always try
 * to use functional components like this
 * 
 * For more info on stateless functional components click the below link
 * https://hackernoon.com/react-stateless-functional-components-nine-wins-you-might-have-overlooked-997b0d933dbc
 * 
 */

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