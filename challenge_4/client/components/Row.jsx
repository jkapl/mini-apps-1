import React from 'react';
import Square from './Square.jsx';

const Row = () => {
  let row = [];
  for (var i = 0; i < 7; i++) {
    row.push(<Square />);
  }
  return (
    <tr>
      {row}
    </tr>
  )
}

export default Row