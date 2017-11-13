import { TODO_STATUS } from '../constants';

export function getTodosWithVisibilityFilter(todos, visibility) {

    if(visibility === 'Completed')
        return todos.filter(todo => todo.status === TODO_STATUS.COMPLETE);
    else if(visibility === 'Incomplete')
        return todos.filter(todo => todo.status === TODO_STATUS.INCOMPLETE);
    else
        return todos;
}