import React, {Component} from 'react';
import Aux from '../../hoc/Aux'
import Burger from '../../components/Burger/Burger'
import BurgerControlsCollection from '../../components/Burger/BuildControlsCollection/BuildControlsCollection'
import Modal from '../../components/UI/Modal/Modal'
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary'
const INGREDIENT_PRICES = {
    salad: 0.6,
    cheese: 0.5,
    meat: 1.5,
    bacon: 1
}
class BurgerBuilder extends Component{
    //old way of setting states
    // constructor(props){
    //     super(props);
    //     this.state = {};
    // }
    state = {
        ingredients:{
            salad:0,
            cheese:0,
            meat:0,
            bacon:0
        },
        totalPrice: 4,
        purchasable: false,
        purchasing: false
    }
    updatePurchaseState = (updatedIngredients) => {
        const totalCount = Object.keys(updatedIngredients)
                .map((igKey)=>updatedIngredients[igKey])
                .reduce((sum, el)=>sum + el,0);
        console.log(totalCount>0);
        this.setState({purchasable:totalCount>0});
    }
    addIngredientHandler = (type) => {
        const updatedCount = this.state.ingredients[type] + 1;
        const updatedIngredients = {...this.state.ingredients};
        updatedIngredients[type] = updatedCount;
        this.updatePurchaseState(updatedIngredients);
        const updatedPrice = this.state.totalPrice + INGREDIENT_PRICES[type];
        this.setState({ingredients: updatedIngredients,totalPrice: updatedPrice});
    }
    removeIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        if(oldCount <= 0)return;
        const updatedCount = oldCount-1;
        const updatedIngredients = {...this.state.ingredients};
        updatedIngredients[type] = updatedCount;
        this.updatePurchaseState(updatedIngredients);
        const updatedPrice = this.state.totalPrice - INGREDIENT_PRICES[type];
        this.setState({ingredients: updatedIngredients,totalPrice: updatedPrice});
    }
    purchaseHandler = () => {
        console.log("purchasing");
        this.setState({purchasing: true});
    }
    purchaseCancelHandler = () => {
        console.log("cancel");
        this.setState({purchasing: false});
    }
    purchaseContinueHandler = () => {
        alert("continue");
    }
    render(){
        const disabledList = {...this.state.ingredients};
        for(let key in disabledList){
            disabledList[key] = disabledList[key]<=0;
        }
        return (
            <Aux>
                <Modal show={this.state.purchasing} cancel={this.purchaseCancelHandler}>
                    <OrderSummary
                    price={this.state.totalPrice}
                    cancel={this.purchaseCancelHandler}
                    continue={this.purchaseContinueHandler}
                    ingredients={this.state.ingredients}
                    />
                </Modal>
                <Burger ingredients={this.state.ingredients}/>
                <BurgerControlsCollection 
                addIngredient={this.addIngredientHandler}
                removeIngredient={this.removeIngredientHandler}
                disabledList={disabledList}
                price={this.state.totalPrice}
                orderDisable={!this.state.purchasable}
                clickOrder={this.purchaseHandler}
                />
            </Aux>
        )
    }
}

export default BurgerBuilder;