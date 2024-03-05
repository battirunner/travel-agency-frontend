import React from "react";
import { AiFillEnvironment } from "react-icons/ai";
import { IoMdAirplane } from "react-icons/io";


const TicketDetailStoppage = ({
  // ticketBoxInfo,
  // ticketBox,
  ticketPath,
}) => {

  console.log(ticketPath);
  return (
    <>
      <div className="row">
        <div className="col-1 text-white rounded-start-3 px-2">
          <AiFillEnvironment className="text-danger fs-4" />
        </div>
        <div className="col-11 d-flex text-white border rounded-3 bg-purple-custom-light">
          <div className="d-flex justify-content-start w-50">
            <span className="my-2 text-dark fs-custom-smx">
              {/* Departure from {ticketBox[ticketBoxInfo].departure.place} */}
              Departure from {ticketPath.departure_place}
            </span>
          </div>
          <div className="d-flex justify-content-end w-50">
            <span className="my-2 text-dark fs-custom-smx">
            {ticketPath.departure_airport}
            </span>
          </div>
        </div>
      </div>
      <div className="row mt-4">
        <div className="col-1 text-white rounded-start-3 px-2">
          <img
            src="https://tbbd-flight.s3.ap-southeast-1.amazonaws.com/airlines-logo/BG.png"
            className="img-fluid rounded-start w-100"
          ></img>
        </div>
        <div className="col-4 text-start">
          <h6 className="mb-0">{`${ticketPath.departure_place}-${ticketPath.arrival_place}`}</h6>
          <p className="mb-0 lh-sm" style={{ fontSize: "11px" }}>
            {/* {ticketBox[ticketBoxInfo].departure.timetaken} */}
            Time Taken
          </p>
        </div>
        <div className="col-3 text-start">
          <h6 className="mb-0">Departure Time</h6>
          <p className="mb-0 font-bold" style={{ fontSize: "12px" }}>
            {ticketPath.departure_datetime}
          </p>
        </div>
        <div className="col-4 text-start">
          <h6 className="mb-0">Arrival Time</h6>
          <p className="mb-0 font-bold" style={{ fontSize: "12px" }}>
            {ticketPath.arrival_datetime}
          </p>
        </div>
      </div>
      <div className="row mt-1">
        <div className="col-1 text-white rounded-start-3 px-2">
          <svg width="100%" height="16px">
            <line
              x1="12"
              y1="0"
              x2="12"
              y2="20"
              stroke="black"
              strokeWidth="2"
            ></line>
          </svg>
          <IoMdAirplane className="text-dark fs-4 roteate-icon-180" />
          <svg width="100%" height="16px">
            <line
              x1="12"
              y1="0"
              x2="12"
              y2="20"
              stroke="black"
              strokeWidth="2"
            ></line>
          </svg>
        </div>
        <div className="col-4 mt-3 text-start">
          <h6 className="mb-0 fs-custom-sm">
            {ticketPath.airlines}
          </h6>
          <p className="lh-sm mb-0" style={{ fontSize: "11px" }}>
            {ticketPath.aircraft}
          </p>
        </div>
        <div className="col-3 mt-3 text-start"></div>
        <div className="col-4 mt-3 text-start">
          <h6 className="mb-0 fs-custom-sm">
            {/* {ticketBox[ticketBoxInfo].departure.flight} */}
          </h6>
          <p
            className="mb-0 font-bold fs-custom-smx"
            style={{ fontSize: "12px" }}
          >
            {/* {ticketBox[ticketBoxInfo].departure.seat} */}
          </p>
        </div>
      </div>
      <div className="row mt-2">
        <div className="col-1 text-white rounded-start-3 px-2">
          {/* <span className="mt-1 d-block text-dark fw-bold">
                        Earliest
                      </span> */}
          <AiFillEnvironment className="text-danger fs-4" />
        </div>
        <div className="col-11 d-flex text-white border rounded-3 bg-purple-custom-light">
          <div className="d-flex justify-content-start w-50">
            <span className="my-2 text-dark fs-custom-smx">
              Destination at {ticketPath.arrival_place}
            </span>
          </div>
          <div className="d-flex justify-content-end w-50">
            <span className="my-2 text-dark fs-custom-smx">
              {ticketPath.arrival_airport}
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default TicketDetailStoppage;
