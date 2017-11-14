/**
 * @author rc-chandan
 * 
 * This is the filter menu that changes the visibility state of the 
 * Todo App, Thus triggering the selector to show filtered todos.
 * 
 * Again dumb component does not have any internal state, gets 
 * everything it needs from its parent.
 */

import React from 'react';

const FilterMenu = props => (
    <select value={props.value} onChange={changeHandler.bind(null, props.onChange)}>
        {props.options.map(option => <option key={option} value={option}>{option}</option>)}
    </select>
)

function changeHandler(onChangeCallback, event) {
    onChangeCallback(event.target.value);
}

export default FilterMenu;