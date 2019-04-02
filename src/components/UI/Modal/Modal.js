import React from 'react'
import classes from './Modal.module.css'
import Aux from '../../../hoc/Aux'
import Backdrop from '../Backdrop/Backdrop'
const modal = (props) => {
    return (
        <Aux>
        <Backdrop show={props.show} clicked={props.cancel}/>
        <div className={props.show?classes.ModalShow:classes.ModalHide}>
            {props.children}
        </div>
        </Aux>
    )
}
export default modal;