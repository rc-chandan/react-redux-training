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