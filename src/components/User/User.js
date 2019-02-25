import React from 'react'
import './User.css'

const user = (props) => {
    return (
    <div className="User">
        <p>User name: {props.username}</p>
        <input
            type='text'
            value={props.username}
            onChange={props.change}
        />
        <button onClick={props.click}>delete</button>
    </div>
    )
}
export default user;