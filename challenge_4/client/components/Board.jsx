import React from 'react';
import Row from './Row.jsx';

class Board extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      n: 5
    }
  }

  render() {
    let board = [];
    for (var i = 0; i < 6; i++) {
      board.push(<><Row /></>);
    }
    return <table><tbody>{board}</tbody></table>;
  }
}

export default Board