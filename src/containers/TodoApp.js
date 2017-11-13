import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import TodoInputForm from '../components/TodoInputForm';
import TodoList from '../components/TodoList';

import { addTodo, deleteTodo } from '../actions';

const TodoApp = props => (
    <div>
        <h2>Todo App Using React-Redux</h2>
        <TodoInputForm addTodo={props.addTodo} /> {/* Dumb Component with local state */}
        <TodoList todos={props.todos} deleteHandler={props.deleteTodo} />
    </div>
);

const mapStateToProps = (state) => {
    return { todos: state.todoReducer }
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators({ addTodo, deleteTodo }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoApp);
