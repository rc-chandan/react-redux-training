/**
 * @author rc-chandan
 * 
 * Dumb component to render an input text box and a submit button
 * Takes these two props from parent
 * 
 * E.x of dumb component with internal react state
 * This component controlls the text box state locally untill the 
 * Add button is clicked
 */

import React, { Component } from 'react';

export default class InputForm extends Component {

    constructor(props) {
        super(props);
        this.state = { inputValue: '' };
        this.submitForm = this.submitForm.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    render() {
        return(
            <form onSubmit={this.submitForm} >
                <input type="text" value={this.state.inputValue} 
                    onChange={this.handleInputChange} 
                />
                <button type="submit">Add</button>
            </form>
        );
    }

    handleInputChange(event) {
        this.setState(...this.state, {inputValue: event.target.value});
    }

    submitForm(event) {
        event.preventDefault();
        // Empty input field validation
        if(!this.state.inputValue) return;

        this.props.formSubmitCallback(this.state.inputValue);
        this.setState(...this.state, {inputValue: ''});
    }
}
