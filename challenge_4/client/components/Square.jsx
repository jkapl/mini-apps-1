import React from 'react';

class Square extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      color: null
    }

    this.setToken = this.setToken.bind(this);
  }

  setToken() {
    if (this.state.color) {
      return
    } else {
      this.setState({color: this.props.turn})
      this.props.turnHandler();
    }
  }

  render() {
    const squareStyle = {
      border: '2px solid grey',
      height: '60px',
      width: '60px',
      background: this.state.color
    }
    return <td className="square" style ={squareStyle} onClick={ ()=> this.setToken() } y={this.props.y} x={this.props.x}></td>
  }
}

export default Square