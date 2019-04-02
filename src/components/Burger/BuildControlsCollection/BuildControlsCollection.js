import React from 'react';
import classes from './BuildControlsCollection.module.css'
import BuildControl from './BuildControl/BuildControl'
const controls = [
    {label: 'Salad', type: 'salad'},
    {label: 'Cheese', type: 'cheese'},
    {label: 'Meat', type: 'meat'},
    {label: 'Bacon', type: 'bacon'}
];
const buildControlsCollection = (props) => {
    return (
        <div className={classes.BuildControlsCollection}>
            <p>Current Price: <strong>{props.price.toFixed(2)}</strong></p>
            {controls.map((ctrl)=>{
                return (
                <BuildControl 
                key={ctrl.label} 
                label={ctrl.label}
                add={()=>props.addIngredient(ctrl.type)}
                remove={()=>props.removeIngredient(ctrl.type)}
                disabled={props.disabledList[ctrl.type]}
                />
                )
            })}
            <button 
            className={classes.OrderButton}
            disabled={props.orderDisable}
            onClick={props.clickOrder}
            >
                ORDER NOW
            </button>
        </div>
    );
}
export default buildControlsCollection;