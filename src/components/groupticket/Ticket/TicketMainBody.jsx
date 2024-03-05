import { Button } from "antd";
import React from "react";
// import TicketLabel from "./TicketLabel";
import arilnes1 from "../../../assets/images/airlines/2GO-Logo-500x281.png";
import "../GroupTicket.css";

const TicketMainBody = ({ ticketItem }) => {
  const departureDate = ticketItem.ticket_path[0].departure_datetime;

  const arrivalDate =
    ticketItem.ticket_path[ticketItem.ticket_path.length - 1].arrival_datetime;
  const arrivalAirport = ticketItem.ticket_path[0].arrival_airport;
  const departureAirport = ticketItem.ticket_path[0].departure_airport;
  return (
    <>
      <div className="col-md-10 p-4">
        <div className="container">
          {/* <TicketLabel /> */}
          <div className="row">
            <div className="col-3 p-2">
              <div className="row">
                <div className="col-4">
                  <img
                    // src="https://tbbd-flight.s3.ap-southeast-1.amazonaws.com/airlines-logo/BG.png"
                    src={arilnes1}
                    className="img-fluid rounded-start w-100 m-2"
                  ></img>
                </div>
                <div className="col-8">
                  <h6 className="mb-0">
                    {ticketItem.start_place} - {ticketItem.end_place}
                  </h6>
                  <p
                    className="mb-0 lh-sm font-bold"
                    style={{ fontSize: "12px" }}
                  >
                    Singapore Airlines
                  </p>
                  <p className="mb-0 lh-sm" style={{ fontSize: "11px" }}>
                    02h 50m
                  </p>
                </div>
              </div>
            </div>
            <div className="col-3 p-2">
              <h6 className="mb-0">11:00 AM</h6>
              <p className="mb-0 font-bold" style={{ fontSize: "12px" }}>
                {departureDate}
              </p>
              <p className="mb-0" style={{ fontSize: "11px" }}>
                {departureAirport}
              </p>
            </div>
            <div className="col-3 p-2">
              <h6 className="mb-0">1:50 AM</h6>
              <p className="mb-0 font-bold" style={{ fontSize: "12px" }}>
                {arrivalDate}
              </p>
              <p className="mb-0" style={{ fontSize: "11px" }}>
                {arrivalAirport}
              </p>
            </div>
            <div className="col-3 p-2">
              <h6 className="mb-0 lh-sm">
                {ticketItem.ticket_path.length - 1 <= 0
                  ? 1
                  : ticketItem.ticket_path.length - 1}{" "}
                Stop
              </h6>
              {/* <p className="mb-0 lh-sm">1 Stop</p> */}
            </div>
          </div>
        </div>
      </div>
      <div
        className="col-md-2 p-2"
        style={{ display: "contents", backgroundColor: "#EDF5FF" }}
      >
        <div
          className="card-body m-2 rounded-2"
          style={{ backgroundColor: "#EDF5FF" }}
        >
          <div className="d-flex mb-2">
            {/* <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
              fill="none"
              className="pointer-hover"
            >
              <path
                fill="#03A629"
                d="M15 3v18H1.05C.47 21 0 20.552 0 20v-5.5c1.45 0 2.625-1.12 2.625-2.5 0-1.381-1.175-2.5-2.625-2.5V4c0-.553.47-1 1.05-1H15Zm3 0h4.95c.58 0 1.05.447 1.05 1v5.5c-1.45 0-2.625 1.119-2.625 2.5 0 1.38 1.175 2.5 2.625 2.5V20c0 .552-.47 1-1.05 1H18V3Z"
              ></path>
            </svg> */}
            <span>
              <h6 className="mb-0 position-relative" style={{ left: "4px" }}>
                {/* SKYTRIP15 */}
              </h6>
            </span>
          </div>
          {ticketItem.show_price ? (
            <>
              <h5>৳ {ticketItem.price}</h5>
              <Button
                type="primary"
                style={{
                  marginTop: "20px",
                  paddingTop: "4px",
                  paddingBottom: "4px",
                  height: "30px",
                  width: "80%",
                  borderRadius: "20px",
                }}
                // icon={<RightOutlined />}
              >
                Select
              </Button>
            </>
          ) : (
            <h5>Call For Price</h5>
          )}

          {/* <p
            className="mb-0"
            style={{ fontSize: "11px", textDecoration: "line-through" }}
          >
            ৳ 17,742
          </p> */}
        </div>
      </div>
    </>
  );
};

export default TicketMainBody;
