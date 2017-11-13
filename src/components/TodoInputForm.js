import React, { Component } from 'react';

export default class TodoInputForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            inputValue: '',
        };
        this.submitForm = this.submitForm.bind(this);
        this.handleTodoInputChange = this.handleTodoInputChange.bind(this);
    }

    render() {
        return(
            <form onSubmit={this.submitForm} >
                <input type="text" value={this.state.inputValue} 
                    onChange={this.handleTodoInputChange} 
                />
                <button type="submit">Add</button>
            </form>
        );
    }

    handleTodoInputChange(event) {
        this.setState(...this.state, {inputValue: event.target.value});
    }

    submitForm(event) {
        event.preventDefault();
        this.props.addTodo(this.state.inputValue);
    }
}
