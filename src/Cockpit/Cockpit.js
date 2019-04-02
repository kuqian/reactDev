import React, {useRef, useEffect, useContext} from 'react';
import classes from './Cockpit.module.css'
import AuthConext from '../context/auth-context'

const cockpit = (props) => {
    const toggleBtnRef = useRef(null);
    //React will make the connection for you
    const authContext = useContext(AuthConext);
    useEffect(() => {
        toggleBtnRef.current.click();
        return ()=>{
            //some clean up work here
        }
    },[]);
    let btnClasses = props.showUserDiv?classes.ButtonRed:classes.Button;
    return (<div>
            <button 
                className={btnClasses}
                onClick={props.click}
                ref={toggleBtnRef}
            >
            Toggle
            </button>
            <button
                onClick={authContext.login}
                className={authContext.authenticated?classes.ButtonRed:classes.Button}
            >
                {authContext.authenticated?"log out":"log in"}
            </button>
            </div>)
}
export default cockpit;