import React from 'react';

class Square extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }

  render() {
    const { x, y } = this.props;
    return <td className="square" x={x} y={y}>x</td>
  }
}

export default Square