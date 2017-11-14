/**
 * @author rc-chandan
 * 
 * All the constants we need for this app to run
 */


// Different todo status
export const TODO_STATUS = {
    INCOMPLETE: 'INCOMPLETE',
    COMPLETE: 'COMPLETE',
}

// Action type strings
export const ACTION_TYPES = {
    ADD_TODO: 'TodoApp/TodoList/ADD_TODO',
    DELETE_TODO: 'TodoApp/TodoList/DELETE_TODO',
    TOGGLE_TODO_STATUS: 'TodoApp/TodoList/TOGGLE_TODO_STATUS',
    CHANGE_VISIBILITY_FILTER: 'TodoApp/FilterMenu/CHANGE_VISIBILITY_FILTER',
}

// Filter options used visibility filtering using selectors
export const FILTER_OPTIONS = [
    'All',
    'Completed',
    'Incomplete',
];
