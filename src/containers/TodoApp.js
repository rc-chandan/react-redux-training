/**
 * @author rc-chandan
 * 
 * This is the only smart component aka the container component, in this app 
 * It gets the required state it needs using react-redux connect function,
 * and passes it down to all the childrens used in the JSX
 * 
 * This component also gets all the actions needs to be dispatched by its 
 * childrens, using mapDispatchToProps method and passes it to them as props.
 * 
 * Look for how
 * getVisibleTodos memoized selector is being used to fetch the visible todos :)
 */


import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import InputForm from '../components/InputForm';
import TodoList from '../components/TodoList';
import FilterMenu from '../components/FilterMenu';

import { addTodo, deleteTodo, toggleTodoStatus, changeVisibilityFilter } from '../actions';
import { FILTER_OPTIONS } from '../constants';
import { getVisibleTodos } from '../selectors';

const TodoApp = props => (
    <div>
        <h2>Todo App Using React-Redux</h2>
        <FilterMenu options={FILTER_OPTIONS} onChange={props.changeVisibilityFilter} />
        <InputForm formSubmitCallback={props.addTodo} />
        <TodoList 
            todos={props.todos} 
            deleteHandler={props.deleteTodo} 
            toggleTodoStatus={props.toggleTodoStatus}
        />
    </div>
);

const mapStateToProps = (state) => {
    return { 
        todos: getVisibleTodos(state)
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
