import * as React from 'react';

const Event = (props) => {
  console.log(props);
  return (
    <div>
      <h3>{props.event.description}</h3>
    </div>
  );
};

export default Event;
