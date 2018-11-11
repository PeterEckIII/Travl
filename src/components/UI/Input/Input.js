import React from 'react'

const Input = ( props ) => {
    
    let inputElement = null;

    switch(props.elementType) {
        case('input'):
            inputElement = <input type="text" placeholder="Add a Destination" onChange={props.change} value={props.value}/>
            break;
        case('select'):
            inputElement = (
                <select
                    onChange={props.changed}
                    value={props.value}
                >
                    { props.elementConfig.options.map(option => (
                        <option key={props.value} value={props.value}>{option.displayValue}</option>
                    ))}
                </select>
            )
            break;
        default:
            inputElement = <input type="text" value={props.value} />
    }
    
    return (
        <div>
            <label>{props.label}</label>
            { inputElement }
        </div>
    )
}

export default Input;
