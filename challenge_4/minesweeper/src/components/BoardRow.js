import React from 'react';

const BoardRow = (props) => {
  return (
    <tr data-x={props.x}>
      {
        props.row.map((cell, index) => <td data-y={index} onClick={props.actions.select} className={`cell revealed-${props.revealed[index]}`}>{cell}</td>)
      }
    </tr>
  )
}

export default BoardRow;
