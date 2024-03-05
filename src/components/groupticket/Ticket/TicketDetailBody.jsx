import React, { useState } from "react";
import {
  AiFillStar,
  AiFillAccountBook,
  AiOutlineDown,
  AiFillEnvironment,
} from "react-icons/ai";
import { IoMdAirplane } from "react-icons/io";
import TicketDetailBox from "./TicketDetailBox";
import "../GroupTicket.css";
import TicketDetailStoppage from "./TicketDetailStoppage";
import { Radio } from "antd";

const TicketDetailBody = ({ ticketItem }) => {
  const [showDetails, setShowDetails] = useState(false);
  const [baggageOrPolicy, setBaggageOrPolicy] = useState("baggage");
  const showDetailToggle = () => {
    setShowDetails(!showDetails);
  };

  const [ticketBoxInfo, setTicketBoxInfo] = useState("first");
  const toggleTravelData = (type) => {
    setTicketBoxInfo(type);
  };

  return (
    <>
      <div className="col-12">
        <div className="row g-2 px-2">
          <div className="col-6 d-flex justify-content-start">
            {/* <span
              className="m-2 px-2 text-white rounded-4"
              style={{ backgroundColor: "#b49bf5" }}
            >
              <AiFillStar style={{ color: "red", marginRight: "4px" }} />
              partially refundable
            </span>
            <span
              className="m-2 px-2 text-white rounded-4"
              style={{ backgroundColor: "#b49bf5" }}
            >
              <AiFillAccountBook
                style={{ color: "yellow", marginRight: "4px" }}
              />
              310
            </span> */}
          </div>
          <div className="col-6 d-flex justify-content-end">
            <div
              className="m-2 p-2 fw-bold cursor-pointer"
              onClick={() => showDetailToggle()}
            >
              {showDetails ? "Hide details" : "View details"}
              <AiOutlineDown
                className="rotate-icon cursor-pointer"
                style={{
                  color: "#68c2ff",
                  marginLeft: "4px",
                  transform: showDetails ? "rotate(180deg)" : "rotate(0deg)",
                }}
              />
            </div>
          </div>
        </div>
        <div
          className="row g-2 custom-collapse"
          style={{
            height: showDetails ? "400px" : "0px",
          }}
        >
          <div className="col-md-8 py-2 ps-4">
            <div
              className="rounded py-2 px-4"
              style={{
                backgroundColor: "#FFFFFF",
                height: "345px",
              }}
            >
              {/* <div className="row mx-2">
                <div
                  className={`col-6 py-2 border ${
                    ticketBoxInfo == "first"
                      ? "bg-primary text-white"
                      : "bg-white text-dark"
                  } rounded-start-3 d-flex fs-custom-sm cursor-pointer`}
                  onClick={() => toggleTravelData("first")}
                >
                  <span className="mt-1 d-block fw-bold w-50 text-start cursor-pointer">
                    DAC-CXB
                  </span>
                  <span className="mt-1 d-block fw-bold w-50 text-end cursor-pointer">
                    02h50m
                  </span>
                </div>
                <div
                  className={`col-6 py-2 border ${
                    ticketBoxInfo == "return"
                      ? "bg-primary text-white"
                      : "bg-white text-dark"
                  } rounded-end-3 d-flex fs-custom-sm cursor-pointer`}
                  onClick={() => toggleTravelData("return")}
                >
                  <span className="mt-1 d-block fw-bold w-50 text-start cursor-pointer">
                    CXB-DAC
                  </span>
                  <span className="mt-1 d-block fw-bold w-50 text-end cursor-pointer">
                    02h50m
                  </span>
                </div>
              </div> */}
              <div className="row mx-2">
                {/* <div className="col-12 mt-4">
                  <div className="row">
                    <div className="col-1 text-white rounded-start-3 px-2">
                      <AiFillEnvironment className="text-danger fs-4" />
                    </div>
                    <div className="col-11 d-flex text-white border rounded-3 bg-purple-custom-light">
                      <div className="d-flex justify-content-start w-50">
                        <span className="my-2 text-dark fs-custom-smx">
                          Departure from Dhaka
                        </span>
                      </div>
                      <div className="d-flex justify-content-end w-50">
                        <span className="my-2 text-dark fs-custom-smx">
                          Hajrat Shahjalal intl. airport
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
                      <h6 className="mb-0">DAC - CXB</h6>
                      <p className="mb-0 lh-sm" style={{ fontSize: "11px" }}>
                        02h 50m
                      </p>
                    </div>
                    <div className="col-3 text-start">
                      <h6 className="mb-0">11:00 AM</h6>
                      <p className="mb-0 font-bold" style={{ fontSize: "12px" }}>
                        10 Feb, Saturday
                      </p>
                    </div>
                    <div className="col-4 text-start">
                      <h6 className="mb-0">1:50 AM</h6>
                      <p className="mb-0 font-bold" style={{ fontSize: "12px" }}>
                        10 Feb, Saturday
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
                      <h6 className="mb-0">DAC - CXB</h6>
                      <p className="lh-sm mb-0" style={{ fontSize: "11px" }}>
                        02h 50m
                      </p>
                    </div>
                    <div className="col-3 mt-3 text-start">
                      <h6 className="mb-0">11:00 AM</h6>
                      <p className="mb-0 font-bold" style={{ fontSize: "12px" }}>
                        10 Feb, Saturday
                      </p>
                    </div>
                    <div className="col-4 mt-3 text-start">
                      <h6 className="mb-0">1:50 AM</h6>
                      <p className="mb-0 font-bold" style={{ fontSize: "12px" }}>
                        10 Feb, Saturday
                      </p>
                    </div>
                  </div>
                  <div className="row mt-2">
                    <div className="col-1 text-white rounded-start-3 px-2">
                      <AiFillEnvironment className="text-danger fs-4" />
                    </div>
                    <div className="col-11 d-flex text-white border rounded-3 bg-purple-custom-light">
                      <div className="d-flex justify-content-start w-50">
                        <span className="my-2 text-dark fs-custom-smx">
                          Destination at Cox's Bazar
                        </span>
                      </div>
                      <div className="d-flex justify-content-end w-50">
                        <span className="my-2 text-dark fs-custom-smx">
                          Cox's bazar airport
                        </span>
                      </div>
                    </div>
                  </div>
                </div> */}
                {/* <TicketDetailBox ticketBoxInfo={ticketBoxInfo} /> */}
                {ticketItem.ticket_path.map((ticketPath,index) => (
                  < >
                  <div key={index} className="col-12 mt-4">
                  <TicketDetailStoppage ticketPath={ticketPath} />
                  </div>
                    
                  </>
                ))}
                {/* <TicketDetailStoppage /> */}
              </div>
            </div>
          </div>
          <div className="col-md-4 py-2 pe-4">
            <div className="rounded p-2 bg-purple-mid-light">
              <div className="row mx-2 mb-3">
                <Radio.Group
                  name="baggageGroup"
                  defaultValue="baggage"
                  buttonStyle="solid"
                  onChange={(e) => setBaggageOrPolicy(e.target.value)}
                >
                  {/* <Radio.Button value="flight">Flight</Radio.Button> */}
                  {/* <Radio.Button value="hotel">Hotel</Radio.Button> */}
                  <Radio.Button value="baggage">Baggage</Radio.Button>
                  <Radio.Button value="policy">Policy</Radio.Button>
                </Radio.Group>
                {/* <div className="col-6 py-2 border bg-primary rounded-start-3">
                  <span className="mt-1 d-block text-white fs-custom-sm fw-bold">
                    Baggage
                  </span>
                </div>
                <div className="col-6 py-2 border bg-custom-gray rounded-end-3">
                  <span className="mt-1 d-block text-dark fs-custom-sm fw-bold">
                    Policy
                  </span>
                </div> */}
              </div>
              <div className="row mx-2">
                {baggageOrPolicy === "baggage" ? (
                  <p className="fs-custom-smx text-start mb-1">
                   Baggage: {ticketItem.baggage}
                  </p>
                ) : (
                  <p className="fs-custom-smx text-start mb-1">
                    Policy: {ticketItem.policy}
                  </p>
                )}

                {/* <p className="fs-custom-smx text-start mb-1">
                  Refunds and Date Changes are done as per the following
                  policies.
                </p>
                <p className="fs-custom-smx text-start mb-1">
                  Refund is calculated by deducting Airline’s fee and ST fee
                  from the paid amount.
                </p>
                <p className="fs-custom-smx text-start mb-1">
                  Date Change fee is calculated by adding Airline’s fee, fare
                  difference and ST fee.
                </p>
                <p className="fs-custom-sm text-start my-2 fw-bold">
                  *Fees are shown for all traveler
                </p>
                <p className="fs-custom-smxx text-start mb-1">
                  *ST Convenience fee is non-refundable. We cannot guarantee the
                  accuracy of airline refund/date change fees as they are
                  subject to change without prior notice.
                </p> 
                 <a className="text-primary fw-bold fs-custom-smx text-start">
                  Show more information
                </a> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TicketDetailBody;
