import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import InputForm from '../components/InputForm';
import TodoList from '../components/TodoList';

import { addTodo, deleteTodo, toggleTodoStatus } from '../actions';

const TodoApp = props => (
    <div>
        <h2>Todo App Using React-Redux</h2>
        <InputForm formSubmitCallback={props.addTodo} /> {/* Dumb Component with local state */}
        <TodoList 
            todos={props.todos} 
            deleteHandler={props.deleteTodo} 
            toggleTodoStatus={props.toggleTodoStatus}
        />
    </div>
);

const mapStateToProps = (state) => {
    return { todos: state.todoReducer }
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators({ 
        addTodo, 
        deleteTodo,
        toggleTodoStatus,
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoApp);
