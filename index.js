import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';
// import Button from './Components/Button';
class App extends Component {
  constructor() {
    super();
    this.state = {
     num:0
    };
  }
 increment=()=>{
   this.setState({num:this.state.num+1})
 }
 decrement=()=>{
   this.setState({num:this.state.num-1})
 }
  render() {
    // console.log("render is called",new Date())
    return (
      
      <div className="container">
      <h1 className="alert alert-info">React counter</h1>
      <h1>Value of {this.state.num}</h1>
      <button className="btn btn-primary" onClick={this.increment}>+</button>
       <span className="number">{this.state.num}</span>
      <button className="btn btn-primary button" onClick={this.decrement}>
      -
      </button>
       </div>
    );
  }
}

render(
  <div>
  <App/>


</div>, document.getElementById('root'));
