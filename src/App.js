import React from 'react';
import './App.css';
import Output from './Output';
import Increment from './Increment';
import Decrement from './Decrement';


//add 'extends React.Component'
//wrap the render() in a class named App

class App extends React.Component {
//change function app to render()
//How to store values that can change over time
//1 define the constructor()
  //this is the initializer for the App
  constructor(props) {
    super(props);
    this.state = {
      count:0
    };
    //make sure the 'this' keyword inside of _decrementCount only points
    //at _this_ App component
    this._decrementCount = this._decrementCount.bind(this)
    //equivalent to using an Arrow function property
  }

  componentDidMount(){
    //similar to useEffect. a lifecycle method. first lifecycle method where you can call this.setState
    this.setState({
      count:5
    });
  }

  render() {
    //never call this.setState() inside of a render
    return (
      <div className="App">
        <h1>Hello React!</h1>
        <Output 
          value={this.state.count}
        />
        
        <Increment //3 pass a reference to the helper method as a prop 
        handleClick={this._incrementCount}

        />
        <Decrement 
        subHandleClick={this._decrementCount}/>
      </div>
    );
  }
  //2 write a 'helper method arrow function'
  //that changes the value using this.setState()
  _incrementCount = () => {
    this.setState({
      count: this.state.count + 1
    })
  }

  _logCount = () => {
    console.log(`this is the new count: ${this.state.count}`);

  }


  _decrementCount() {
    if (this.state.count > 0){
      console.log('They are decrementing')
      console.log(`it should print ${this.state.count-1}`);
      this.setState({
        count: this.state.count - 1
      }, this._logCount);
    }
  }
}
export default App;
