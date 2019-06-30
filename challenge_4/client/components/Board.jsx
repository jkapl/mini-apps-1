import React from 'react';
import Row from './Row.jsx';
import verticalCheck from '../src/index.jsx'

class Board extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      turn: 'blue'
    }

    this.turnHandler = this.turnHandler.bind(this);
  }
  
  turnHandler() {
    if (this.state.turn === 'blue') {
      this.setState({turn: 'red'})
    } else {
      this.setState({turn: 'blue'});
    }
    verticalCheck();
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