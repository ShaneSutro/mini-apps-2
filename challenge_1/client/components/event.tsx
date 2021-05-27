import * as React from 'react';

const Event = (props) => {
  return (
    <div className="event-row">
      <h2>Description</h2>
      <h3>{props.event.description}</h3>
      <p>Date: {props.event.date} | Where: {props.event.category2}</p>
    </div>
  );
};

export default Event;
