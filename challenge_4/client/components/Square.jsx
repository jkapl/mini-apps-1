import React from 'react';

class Square extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
    }

    this.setToken = this.setToken.bind(this);
  }

  setToken() {
    if (this.state.blue || this.state.red) {
      return
    } else {
      this.state.color = this.props.turn;
    }
  }

  render() {
    return <td className="square" onClick={()=> {style={color: this.state.color}}} y={this.props.y} x={this.props.x}>x</td>
  }
}

export default Square