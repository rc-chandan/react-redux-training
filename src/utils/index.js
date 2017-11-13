import uuid from 'uuid/v1';

export function createTodo(title, status) {
    return { id: uuid(), title, status};
}

// toggle the status of todo with specified id in todos array
export function invertStatusOfTodo(todos, todoId, TODO_STATUS) {
    let newTodos = todos.slice();
    const index = newTodos.findIndex(todo => todo.id === todoId);
    let targetTodo = newTodos[index];
    targetTodo.status = targetTodo.status === TODO_STATUS.COMPLETE ? TODO_STATUS.INCOMPLETE : TODO_STATUS.COMPLETE;
    newTodos.splice(index, 1, targetTodo);
    return newTodos;
}