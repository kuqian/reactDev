import React, {Component} from 'react';
//import Radium, {StyleRoot} from 'radium'
import logo from '../assets/logo.svg';
import UserList from '../components/User/UserList'
import Validation from '../hw2/Validation'
import CharacterBoxList from '../hw2/CharacterBoxList'
import './App.css';

class App extends Component {
  state = {
    users: [
      {id:"sadsdasda", username: "Huang Keyu"},
      {id:"sdsds", username: "Qian Kun"},
      {id:"asdf", username: "Mimi"}
    ],
    showUserDiv: false,
    input: ""
  }
  nameChangeHandler = (id, event) => {
    const userIndex = this.state.users.findIndex((p) => {
      return p.id === id;
    });
    //as as this.state.users[userIndex] would be the state value, we cannot modify it directly
    //method 1: change={this.nameChangeHandler.bind(this, user.id)}
    //event has to be the second argument for some reason
    //method 2: change={(event) => {this.nameChangeHandler(user.id, event)}}
    const userToChange = {...this.state.users[userIndex]};
    userToChange.username = event.target.value;
    const users = [...this.state.users];
    users[userIndex] = userToChange;
    this.setState({
      users: users
    });
  }
  toggleHandler = () => {
    let temp = this.state.showUserDiv;
    this.setState({
      showUserDiv: !temp
    });
  }
  deleteHandler = (index) => {
    const users = [...this.state.users];
    users.splice(index, 1);
    this.setState({
      users: users
    });
  }
  inputChangeHandler = (event) => {
    this.setState({
      input: event.target.value
    });
  }
  boxClickHandler = (index) => {
    const charArray = [...this.state.input];
    charArray.splice(index, 1);
    this.setState({
      input: charArray.join('')
    });
  }
  render() {
    let userDiv = null;
    const buttonStyle = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      borderRadius: '10px',
      padding: '8px',
      cursor: 'pointer'
    }
    if(this.state.showUserDiv){
      buttonStyle.backgroundColor = 'red';
      userDiv = (
          <UserList
            users={this.state.users}
            deleteUser={this.deleteHandler}
            changeUsername={this.nameChangeHandler}
          />
      )
    }
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <button style={buttonStyle} onClick={this.toggleHandler}>Toggle</button>
        {userDiv}
        <input
          type="text"
          onChange={this.inputChangeHandler}
          value={this.state.input}
        />
        <Validation
          input={this.state.input}
        />
        <CharacterBoxList
          input={this.state.input}
          clickCharacterBox={this.boxClickHandler}
        />
        
      </div>
    );
  }
}

export default App;
