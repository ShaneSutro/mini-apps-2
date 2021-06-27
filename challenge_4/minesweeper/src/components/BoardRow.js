import React from 'react';

const BoardRow = (props) => {
  return (
    <tr data-x={props.x}>
      {
        props.row.map((cell, index) => <td key={index} data-y={index} onClick={props.actions.select} onContextMenu={props.actions.flag} className={`cell revealed-${props.revealed[index]} flagged-${props.flagged[index]}`}>{props.flagged[index] ? '⛳️' : cell}</td>)
      }
    </tr>
  )
}

export default BoardRow;
