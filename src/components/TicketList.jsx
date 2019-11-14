import React from 'react';
import Ticket from './Ticket';

var masterTicketList = [
  {
    names: 'Thato and Haley',
    location: '3a',
    issue: 'Firebase'
  },
  {
    names: 'Haley Joel',
    location: '6d',
    issue: 'Dead People Vision'
  },
  {
    names: 'Haley Joel',
    location: '1a',
    issue: 'Bruce Willis wont leave me alone'
  }
];


function TicketList() {
  return (
    <div>
      <hr />
      {masterTicketList.map((ticket, index) =>
        <Ticket
          names={ticket.names}
          location={ticket.location}
          issue={ticket.issue}
          key={index}
        />
      )}
    </div>
  );
}

export default TicketList;