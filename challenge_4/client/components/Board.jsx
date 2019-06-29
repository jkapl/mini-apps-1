import React from 'react';
import Row from './Row.jsx';

class Board extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      turn: 'blue'
    }
  }

  render() {
    let board = [];
    for (var i = 5; i >= 0; i--) {
      board.push(<><Row turn={this.state.turn} y={i} /></>);
    }
    return <table><tbody>{board}</tbody></table>;
  }
}

export default Board