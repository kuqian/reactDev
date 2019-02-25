import React from 'react'
import './Hw2.css'

const validation = (props) => {
    let message = "input is valid";
    if(props.input.length < 5){
        message = "input is too short";
    }else if(props.input.length > 10){
        message = "input is too long";
    }
    return (
        <div className="Validation">
            <p>{message}</p>
        </div>
    )
}
export default validation;