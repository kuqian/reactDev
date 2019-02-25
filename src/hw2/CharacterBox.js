import React from 'react'
import './Hw2.css'

const characterBox = (props) => {
    return (
        <div className="CharacterBox" onClick={props.click}>
            {props.myChar}
        </div>
    );
}
export default characterBox;