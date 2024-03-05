import React, { useState } from "react";
import Ticket from "./Ticket/Ticket";
import { useSearchParams } from "react-router-dom";
import { useGetGroupTicketQuery } from "../../redux/slices/groupTicketApiSlice";

const TicketArea = ({ ticketItems }) => {
  // console.log(ticketItems);
  return (
    <>
      <div className="col-sm-9 text-white">
        {/* <div className=""> */}
        {/* <div className="row m-2" style={{ height: "40px" }}>
          <div
            className="col-4 text-white border rounded-2"
            style={{ backgroundColor: "#ddd3d36e" }}
          >
            <span className="mt-2 d-block text-dark fw-bold">Earliest</span>
          </div>
          <div
            className="col-4 text-white border rounded-2"
            style={{ backgroundColor: "#5f9cf3" }}
          >
            <span className="mt-2 d-block text-white fw-bold">Cheapest</span>
          </div>
          <div
            className="col-4 text-white border rounded-2"
            style={{ backgroundColor: "#ddd3d36e" }}
          >
            <span className="mt-2 d-block text-dark fw-bold">Fastest</span>
          </div>
        </div> */}
        {ticketItems &&
          ticketItems.map((ticket,index) => (
            
              <div key={index} className="row px-2">
                <div className="col-12 text-white">
                  <Ticket ticketItem={ticket} />
                </div>
              </div>
            
          ))}
      </div>
    </>
  );
};

export default TicketArea;
