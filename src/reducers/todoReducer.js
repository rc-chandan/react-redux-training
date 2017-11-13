import { TODO_STATUS, ACTION_TYPES } from '../constants';
import { createTodo, invertStatusOfTodo } from '../utils';

const initialState = [];

export default function todoReducer(state = initialState, action) {
    switch(action.type) {
        case ACTION_TYPES.ADD_TODO:
            return [
                ...state, 
                createTodo(action.title, TODO_STATUS.INCOMPLETE)
            ];
        case ACTION_TYPES.DELETE_TODO:
            return state.filter(todo => todo.id !== action.id);
        case ACTION_TYPES.TOGGLE_TODO_STATUS:
            return invertStatusOfTodo(state, action.id, TODO_STATUS);
        default: 
            return state;
    }
}