import React from 'react';
import Aux from '../../../hoc/Aux'
import Button from '../../UI/Button/Button'
const orderSummary = (props) => {
    const ingredientList = Object.keys(props.ingredients)
                    .map((igKey)=>{
                        return <li key={igKey}>{igKey}: {props.ingredients[igKey]}</li>
                    });
    return (
        <Aux>
            <h3>Your Order Summary</h3>
            <ul>{ingredientList}</ul>
            <p><strong>Total: ${props.price}</strong></p>
            <p>Continue to check out ?</p>
            <Button btnType='Danger' clicked={(props.cancel)} >CANCEL</Button>
            <Button btnType='Success' clicked={props.continue} >CONTINUE</Button>
        </Aux>
    )
}
export default orderSummary;
