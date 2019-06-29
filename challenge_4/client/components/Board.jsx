import React from 'react';
import Row from './Row.jsx';

class Board extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      turn: 'blue'
    }
    
    this.turnHandler = this.turnHandler.bind(this);
  }
  
  turnHandler() {
    console.log('made it here too')
    if (this.state.turn === 'blue') {
      this.setState({turn: 'red'})
    } else {
      console.log('in state change on board')
      this.setState({turn: 'blue'});
    }
  }
  render() {
    let board = [];
    for (var i = 5; i >= 0; i--) {
      board.push(<><Row turnHandler={this.turnHandler} turn={this.state.turn} y={i} /></>);
    }
    return <table><tbody>{board}</tbody></table>;
  }
}

export default Board