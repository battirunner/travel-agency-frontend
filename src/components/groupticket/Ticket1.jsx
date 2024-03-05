import React, { useState } from "react";
import { Button } from "antd";
import {
  CloseCircleOutlined,
  CloseOutlined,
  PlusOutlined,
  RightOutlined,
} from "@ant-design/icons";
import { AiFillStar, AiFillAccountBook, AiOutlineDown } from "react-icons/ai";
import "./GroupTicket.css";

const Ticket = () => {
  const [items, setItems] = useState([1]);
  const [showDetails, setShowDetails] = useState(false);
  const showDetailToggle = () => {
    setShowDetails(!showDetails);
  };

  return (
    <>
      <div className="card mb-3 rounded-4">
        <div className="row g-0">
          <div className="col-md-10 p-4">
            <div className="container">
              <div className="row">
                <div className="col-3 p-2">
                  <div className="row">
                    <div className="col-4">
                      <img
                        src="https://tbbd-flight.s3.ap-southeast-1.amazonaws.com/airlines-logo/BG.png"
                        className="img-fluid rounded-start w-100 m-2"
                      ></img>
                    </div>
                    <div className="col-8">
                      <h6 className="mb-0">DAC - CXB</h6>
                      <p
                        className="mb-0 lh-sm font-bold"
                        style={{ fontSize: "12px" }}
                      >
                        Biman Bangladesh
                      </p>
                      <p className="mb-0 lh-sm" style={{ fontSize: "11px" }}>
                        02h 50m
                      </p>
                    </div>
                  </div>
                  {/* <span className="m-2">BGD</span> */}
                </div>
                <div className="col-3 p-2">
                  <h6 className="mb-0">11:00 AM</h6>
                  <p className="mb-0 font-bold" style={{ fontSize: "12px" }}>
                    10 Feb, Saturday
                  </p>
                  <p className="mb-0" style={{ fontSize: "11px" }}>
                    Hazrat Shahjalal...
                  </p>
                </div>
                <div className="col-3 p-2">
                  <h6 className="mb-0">1:50 AM</h6>
                  <p className="mb-0 font-bold" style={{ fontSize: "12px" }}>
                    10 Feb, Saturday
                  </p>
                  <p className="mb-0" style={{ fontSize: "11px" }}>
                    Cox Bazar...
                  </p>
                </div>
                <div className="col-3 p-2">
                  <h6 className="mb-0 lh-sm">Non Stop</h6>
                  <p className="mb-0 lh-sm">1 Stop</p>
                </div>
              </div>
              <div className="row">
                <div className="col-3 p-2">
                  <div className="row">
                    <div className="col-4">
                      <img
                        src="https://tbbd-flight.s3.ap-southeast-1.amazonaws.com/airlines-logo/BG.png"
                        className="img-fluid rounded-start w-100 m-2"
                      ></img>
                    </div>
                    <div className="col-8">
                      <h6 className="mb-0">CXB - DAC</h6>
                      <p
                        className="mb-0 lh-sm font-bold"
                        style={{ fontSize: "12px" }}
                      >
                        Biman Bangladesh
                      </p>
                      <p className="mb-0 lh-sm" style={{ fontSize: "11px" }}>
                        02h 50m
                      </p>
                    </div>
                  </div>
                  {/* <span className="m-2">BGD</span> */}
                </div>
                <div className="col-3 p-2">
                  <h6 className="mb-0">12:00 AM</h6>
                  <p className="mb-0 font-bold" style={{ fontSize: "12px" }}>
                    13 Feb, Tuseday
                  </p>
                  <p className="mb-0" style={{ fontSize: "11px" }}>
                    Cox bazar...
                  </p>
                </div>
                <div className="col-3 p-2">
                  <h6 className="mb-0">2:50 AM</h6>
                  <p className="mb-0 font-bold" style={{ fontSize: "12px" }}>
                    12 Feb, Tuseday
                  </p>
                  <p className="mb-0" style={{ fontSize: "11px" }}>
                    Hajrat Shahjalal...
                  </p>
                </div>
                <div className="col-3 p-2">
                  <h6 className="mb-0 lh-sm">Non Stop</h6>
                  <p className="mb-0 lh-sm">1 Stop</p>
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
                <svg
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
                </svg>
                <span>
                  <h6 className="mb-0 position-relative" style={{ left: "4px" }}>
                    SKYTRIP15
                  </h6>
                </span>
              </div>
              <h5>৳ 14,742</h5>
              <p
                className="mb-0"
                style={{ fontSize: "11px", textDecoration: "line-through" }}
              >
                ৳ 17,742
              </p>
              <Button
                type="primary"
                style={{
                  marginTop: "20px",
                  // height: "50px",
                  width: "100%",
                  borderRadius: "20px",
                }}
                icon={<RightOutlined />}
              >
                Select
              </Button>
            </div>
          </div>
        </div>
        <div
          className="row g-0 rounded-4 rounded-top"
          style={{ backgroundColor: "#EDF5FF" }}
        >
          <div className="col-12">
            <div className="row g-2 px-2">
              <div className="col-6 d-flex justify-content-start">
                <span
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
                </span>
              </div>
              <div className="col-6 d-flex justify-content-end">
                <div classNameName="m-2 p-2" onClick={() => showDetailToggle()}>
                  view details
                  <AiOutlineDown
                    className="roteate-icon"
                    style={{
                      color: "#68c2ff",
                      marginLeft: "4px",
                      transform: showDetails
                        ? "rotate(180deg)"
                        : "rotate(0deg)",
                    }}
                  />
                </div>
              </div>
            </div>
            <div
              className="row g-2 custom-collapse"
              style={{
                // backgroundColor: "#FFFFFF",
                height: showDetails ? "100px" : "0px",
              }}
            >
              <div className="col-md-9 py-2 ps-4">
                <div
                  className="rounded"
                  style={{
                    backgroundColor: "#FFFFFF",
                    // height: showDetails ? "100px" : "0px",
                  }}
                >
                  Anim pariatur cliche reprehenderit, enim eiusmod high life
                  accusamus terry richardson ad squid. Nihil anim keffiyeh
                  helvetica, craft beer labore wes anderson cred nesciunt
                  sapiente ea proident.
                </div>
              </div>
              <div className="col-md-3 py-2 pe-4">
                <div
                  className="rounded"
                  style={{
                    backgroundColor: "#99d1ff",
                    // height: showDetails ? "100px" : "0px",
                  }}
                >
                  dfdf
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Ticket;
