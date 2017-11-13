import { ACTION_TYPES } from '../constants';

export function addTodo(title) {
    return { type: ACTION_TYPES.ADD_TODO, title };
}

export function deleteTodo(id) {
    return { type: ACTION_TYPES.DELETE_TODO, id };
}

export function toggleTodoStatus(id) {
    return { type: ACTION_TYPES.TOGGLE_TODO_STATUS, id};
}