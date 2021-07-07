import React, { Component } from 'react';

export default class Cell extends Component {


//Define a constructor method in Cell, which sets an initial state
//key of color to the value prop which is passed from its parent component
  constructor(props) {
    super()
    this.state = {
      color: props.value
    }
  }



//Create a click listener which, when activated, updates the state to 
//the following hex value: '#333'
  handleClick = () => {
    this.setState({
      color: '#333'
    })
  }


//Cell should render a single <div> with a className of cell
//In render, the cell should set the background color in-line for the
// <div> by adding the following attribute: 
// style={{backgroundColor: '#FFF'}} ('#FFF' is just used as an example
// value here - the value should be the state's color)
  render() {
    return (
      <div 
        className="cell"
        style={{backgroundColor: this.state.color}}
        onClick={this.handleClick}>
      </div>
    )
  }
}