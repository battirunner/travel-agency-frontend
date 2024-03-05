import React from "react";
import dayjs from "dayjs";
import { Button, DatePicker, Input, Radio, Select } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { CiLocationOn } from "react-icons/ci";
const dateFormat = "YYYY-MM-DD";

const SearchArea = ({
  onFromChange,
  onToChange,
  onInDateChange,
  onOutDateChange,
  onSearch,
}) => {
  return (
    <>
      <div
        className="col-sm-3 text-white rounded-4"
        style={{ backgroundColor: "#e0e0e0" }}
      >
        <div className="p-3">
          <div className="row g-3">
            <div className="col-12">
              <Input
                size="large"
                placeholder="From"
                prefix={<CiLocationOn />}
                onChange={(e) => {
                  onFromChange(e.target.value);
                }}
              />
            </div>
            <div className="col-12">
              <Input
                size="large"
                placeholder="To"
                prefix={<CiLocationOn />}
                onChange={(e) => {
                  onToChange(e.target.value);
                }}
              />
            </div>
            <div className="col-6">
              {/* <div classNameName="field-label">In</div> */}
              {/* <div classNameName="field-inner"> */}
              <DatePicker
                // style={{ width: "100%" }}
                placeholder="In"
                size="large"
                minDate={dayjs(
                  `${new Date().toJSON().slice(0, 10)}`,
                  dateFormat
                )}
                onChange={(date, datestring) => {
                  onInDateChange(datestring);
                }}
              />
              {/* </div> */}
            </div>
            <div className="col-6">
              {/* <div classNameName="field-label">In</div> */}
              {/* <div classNameName="field-inner"> */}
              <DatePicker
                // style={{ width: "100%" }}
                placeholder="Out"
                size="large"
                minDate={dayjs(
                  `${new Date().toJSON().slice(0, 10)}`,
                  dateFormat
                )}
                onChange={(date, datestring) => {
                  onOutDateChange(datestring);
                }}
              />
              {/* </div> */}
            </div>
            <div className="col-12">
              <Button
                type="primary"
                style={{
                  marginTop: "20px",
                  // height: "50px",
                  width: "100%",
                }}
                icon={<SearchOutlined />}
                onClick={onSearch}
              >
                Search
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchArea;
