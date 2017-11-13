import React from 'react';

const TodoListItem = props => {
    const { todo, deleteHandler } = props;
    return (
    <div>
        <li>{todo}</li>
        <button onClick={deleteHandler.bind(null, todo)}>X</button>
    </div>
   );
}

export default TodoListItem;