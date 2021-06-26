import React from 'react';

const BoardRow = (props) => {
  console.log(props);
  return (
    <tr>
      {
        props.row.map((cell) => <td className="cell">{cell}</td>)
      }
    </tr>
  )
}

export default BoardRow;
