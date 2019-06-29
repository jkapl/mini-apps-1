import React from 'react';
import Square from './Square.jsx';

// class Row extends React.Component {
//   constructor(props) {
//     super(props)


//   }

//   render() {
//     let row = [];
//     for (var i = 0; i < 7; i++) {
//       row.push(<Square turnHandler={this.props.turnHandler} turn={this.props.turn} y={this.props.y} x={i}/>);
//     }
//     return (
//       <tr>
//         {row}
//       </tr>
//     )  
//   }
// }

const Row = (props) => {
  let row = [];
  for (var i = 0; i < 7; i++) {
    row.push(<Square turnHandler={props.turnHandler} turn={props.turn} y={props.y} x={i}/>);
  }
  return (
    <tr>
      {row}
    </tr>
  )
}

export default Row