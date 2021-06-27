import React from 'react';

const BoardRow = (props) => {
  return (
    <tr>
      {
        props.row.map((cell) => <td className="cell">{cell}</td>)
      }
    </tr>
  )
}

export default BoardRow;
