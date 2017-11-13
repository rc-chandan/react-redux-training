import { TODO_STATUS, ACTION_TYPES, FILTER_OPTIONS } from '../constants';
import { createTodo, invertStatusOfTodo } from '../utils';

const initialState = {
    todos: [],
    visibility: FILTER_OPTIONS[0],
};

export default function todoReducer(state = initialState, action) {
    switch(action.type) {
        case ACTION_TYPES.ADD_TODO:
            const todo = createTodo(action.title, TODO_STATUS.INCOMPLETE);
            return Object.assign(
                ...state, 
                { todos: [...state.todos, todo] }
            );
        case ACTION_TYPES.DELETE_TODO:
            return Object.assign(
                ...state, 
                { todos: state.todos.filter(todo => todo.id !== action.id) }
            );
        case ACTION_TYPES.TOGGLE_TODO_STATUS:
            return Object.assign(
                ...state, 
                { todos: invertStatusOfTodo(state.todos, action.id, TODO_STATUS) }
            );
        case ACTION_TYPES.CHANGE_VISIBILITY_FILTER:
            return Object.assign(
                ...state,
                { todos: state.todos},
                { visibility: action.filter },
            );
        default: 
            return state;
    }
}