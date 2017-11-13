import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import InputForm from '../components/InputForm';
import TodoList from '../components/TodoList';
import FilterMenu from '../components/FilterMenu';

import { addTodo, deleteTodo, toggleTodoStatus, changeVisibilityFilter } from '../actions';
import { FILTER_OPTIONS } from '../constants';
import { getTodosWithVisibilityFilter } from '../selectors';

const TodoApp = props => (
    <div>
        <h2>Todo App Using React-Redux</h2>
        <FilterMenu options={FILTER_OPTIONS} onChange={props.changeVisibilityFilter} />
        <InputForm formSubmitCallback={props.addTodo} /> {/* Dumb Component with local state */}
        <TodoList 
            todos={props.todos} 
            deleteHandler={props.deleteTodo} 
            toggleTodoStatus={props.toggleTodoStatus}
        />
    </div>
);

const mapStateToProps = (state) => {
    return { 
        todos: getTodosWithVisibilityFilter(state.todoReducer.todos, state.todoReducer.visibility) 
    }
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators({ 
        addTodo, 
        deleteTodo,
        toggleTodoStatus,
        changeVisibilityFilter
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoApp);
