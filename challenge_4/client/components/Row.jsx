import React from 'react';
import Square from './Square.jsx';

const Row = (props) => {
  let row = [];
  for (var i = 0; i < 7; i++) {
    row.push(<Square turn={props.turn} y={props.y} x={i}/>);
  }
  return (
    <tr>
      {row}
    </tr>
  )
}

export default Row