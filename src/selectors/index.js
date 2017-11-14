/**
 * @author rc-chandan
 * 
 * The below code uses reselect to create a memoized selector
 * called getVisibleTodos which when called filters the todo list
 * and returns todos which fulfill the filter criteria.
 * 
 * The state object is passed to the selector from mapStateToProps
 * of the component using this selector
 * 
 * for more info on reselect and selectors in general check this
 * link: https://medium.com/@parkerdan/react-reselect-and-redux-b34017f8194c
 */

import { createSelector } from 'reselect'
import { TODO_STATUS } from '../constants';

// selectors
const getVisibilityFilter = state => state.todoReducer.visibility;
const getTodos = state => state.todoReducer.todos;

// reselect function for memoization
export const getVisibleTodos = createSelector([getVisibilityFilter, getTodos],
    (visibility, todos) => {
        console.log(visibility, todos);
        switch(visibility) {
            case 'Completed':
                return todos.filter(todo => todo.status === TODO_STATUS.COMPLETE);
            case 'Incomplete':
                return todos.filter(todo => todo.status === TODO_STATUS.INCOMPLETE);
            default:
                return todos;
        }      
    }
);