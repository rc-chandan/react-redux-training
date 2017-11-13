const initialState = ['alsjdfkj', 'slkdjf', 'dkjiei'];

export default function todoReducer(state = initialState, action) {
    switch(action.type) {
        case 'ADD_TODO':
            return [...state, action.todo];
        case 'DELETE_TODO':
            return state.filter(todo => todo !== action.todo);
        default: 
            return state;
    }
}