import React, { useState } from "react";
import "../GroupTicket.css";
import TicketDetailBody from "./TicketDetailBody";
import TicketMainBody from "./TicketMainBody";

const Ticket = ({ ticketItem }) => {
  return (
    <>
      <div
        className={`card mb-3 rounded-4 ticket-card ${ticketItem.badge} ticket-card-angel`}
        style={{ contain: "sdf" }}
      >
        <div className="row g-0">
          <TicketMainBody  ticketItem={ticketItem}/>
        </div>
        <div
          className="row g-0 rounded-4 rounded-top"
          style={{ backgroundColor: "#EDF5FF" }}
        >
          <TicketDetailBody ticketItem={ticketItem}/>
        </div>
      </div>
    </>
  );
};

export default Ticket;
