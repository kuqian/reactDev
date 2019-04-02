import React from 'react';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient'
import classes from './Burger.module.css'

const burger = (props) => {
    let transformedIngredients = Object.keys(props.ingredients)
        .map((igKey)=>{
            //Array(3) will create 3 undefined spaces ????
            return [...Array(props.ingredients[igKey])].map((_,index)=>{
                return <BurgerIngredient key={index+igKey} type={igKey}/>;
            });
        })
        .reduce((arr, el)=>{
            return arr.concat(el);
        },[]);
    if(transformedIngredients.length === 0){
        transformedIngredients = <p>Your burger is empty, would you like to add ingredient(s) ?</p>
    }
    return (
        <div className={classes.Burger}>  
            <BurgerIngredient key='top' type="bread-top"/>
            {transformedIngredients}
            <BurgerIngredient key='bottom' type="bread-bottom"/>
        </div>
    )
}

export default burger;