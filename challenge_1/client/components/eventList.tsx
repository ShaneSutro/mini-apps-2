import * as React from 'react';
import Event from './event';

const EventList = (props) => (
  <div>
    {props.events.map(event => <Event event={event} />)}
  </div>
)

export default EventList;