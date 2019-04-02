import React from 'react'
import classes from './User.module.css'
import AuthConext from '../../context/auth-context'

const user = (props) => {
    return (
    <div className={classes.User}>
        <AuthConext.Consumer>
            {(context) => {
                if(context.authenticated){
                    return <p>User loged in !</p>
                }else{
                    return <p>Please log in !</p>
                }
            }}
        </AuthConext.Consumer>
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