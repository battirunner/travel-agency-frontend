import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import { useState } from "react";
dayjs.extend(customParseFormat);

import bannerArrow from "../../assets/images/background/banner-arrow.png";
import bgGradient1 from "../../assets/images/background/bg-gradient-1.png";
import yellow1 from "../../assets/images/elements/yellow-1.png";
import planeTree from "../../assets/images/resources/misc/planeTree.jpg";
import "./hero3.css";

import { CloseOutlined, SearchOutlined } from "@ant-design/icons";
import { Button, DatePicker, Input, Radio, Select, message } from "antd";
import axios from "axios";
import { CiLocationOn } from "react-icons/ci";
import { useNavigate } from "react-router-dom";
import useSWR from "swr";
import CountryList from "./../dashboard/CountryList";
import SearchBox from "./SearchBox";

const dateFormat = "YYYY-MM-DD";

const fetcher = async (...args) => {
  try {
    const res = await axios.get(...args);
    return res;
  } catch (error) {
    return error;
  }
};

const Hero3 = () => {
  //fetch visa category information
  const { data: visaCategory, error: visaCategoryError } = useSWR(
    `${import.meta.env.VITE_BASE_URL}/visacategory`,
    fetcher,
    {
      suspense: true,
    }
  );
  // console.log(visaCategory);
  if (visaCategoryError) {
    message.error(visaCategoryError);
  }

  // fetch group ticket location information

  // console.log(visaCategory);

  const navigate = useNavigate();

  const [visaCategoryName, setVisaCategoryName] = useState("Tourist");
  const [service, setService] = useState("visa");
  const [tripType, setTripType] = useState(1);
  const [country, setCountry] = useState("Singapore");
  const [price, setPrice] = useState(0);
  const [duration, setDuration] = useState(0);
  const [hajjOrUmrah, setHajjOrUmrah] = useState("Hajj");
  const changeService = (e) => {
    setService(e.target.value);
    setTripType(1);
  };
  const changeTripType = (e) => {
    setTripType(e.target.value);
  };
  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };
  const onChange = () => {};

  const onChangeCountry = (country) => {
    setCountry(country);
  };

  const onCountrySelectChange = () => {
    if (service === "visa")
      navigate(`/visa?country=${country}&visaCategory=${visaCategoryName}`);
    if (service === "gt")
      navigate(`/groupticket?country=${country}&page=1&limit=5`);
  };
  const onPriceAndDurationChange = () => {
    if (service === "hajj")
      navigate(
        `hajj?price=${price}&duration=${duration}&tourType=${hajjOrUmrah}&page=1`
      );
  };

  return (
    <>
      {/* <Suspense fallback={<Loader/>}> */}
      {/* <!-- Banner Section --> */}
      <div className="banner-section">
        <div className="banner-container">
          <div
            className="banner-arrow wow slideInLeft"
            data-wow-delay="0ms"
            data-wow-duration="1500ms"
          >
            <img src={bannerArrow} alt="" />
          </div>
          <div className="auto-container">
            <div className="row clearfix">
              <div className="left-col col-lg-6 col-md-12">
                <div className="inner">
                  <div className="clearfix">
                    <div className="content">
                      <div className="bg-image">
                        <img src={bgGradient1} alt="" />
                      </div>
                      <h3>Start Travelling Now</h3>
                      {/* <Test /> */}
                      <h1>
                        <i className="d-icon">
                          <img src={yellow1} alt="" title="" />
                        </i>
                        Explore the Top Destination of Planet Earth
                      </h1>
                      <p className="travilo-text">
                        Embrace the journey & Travel with passion and purpose.
                      </p>

                      <div className="form-box site-form">
                        <div className="serviceHeader">
                          <Radio.Group
                            name="serviceGroup"
                            defaultValue="visa"
                            buttonStyle="solid"
                            onChange={changeService}
                          >
                            {/* <Radio.Button value="flight">Flight</Radio.Button> */}
                            {/* <Radio.Button value="hotel">Hotel</Radio.Button> */}
                            <Radio.Button value="visa">Visa</Radio.Button>
                            <Radio.Button value="hajj">Umrah/Hajj</Radio.Button>
                            <Radio.Button value="insurance">
                              Insuarnce
                            </Radio.Button>
                            <Radio.Button value="gt">Group Ticket</Radio.Button>
                          </Radio.Group>
                        </div>

                        {/* <form method="" action=""> */}
                        <div className="searchBox">
                          <div className="row clearfix">
                            {/* when service type flight show trip type radio button */}
                            {service === "flight" && (
                              <div className="flightTypeRadio">
                                <Radio.Group
                                  name="flightTypeGroup"
                                  defaultValue={1}
                                  onChange={changeTripType}
                                >
                                  <Radio value={1}>One Way</Radio>
                                  <Radio value={2}>Round Trip</Radio>
                                  <Radio value={3}>Multi City</Radio>
                                </Radio.Group>

                                <Select
                                  defaultValue="economy"
                                  style={{
                                    width: 120,
                                  }}
                                  onChange={handleChange}
                                  options={[
                                    {
                                      value: "economy",
                                      label: "Economy",
                                    },

                                    {
                                      value: "business",
                                      label: "Business",
                                    },
                                    {
                                      value: "firstclass",
                                      label: "First Class",
                                    },
                                  ]}
                                />
                              </div>
                            )}

                            {/* main search field starts */}
                            <div className="row clearfix">
                              <div className="search-box-main">
                                {/* if service flight then show from input */}
                                {service === "flight" && (
                                  <>
                                    <div className="form-group col-lg col-md-12 col-sm-12">
                                      <div className="field-label">From</div>
                                      <div className="field-inner">
                                        <Input
                                          size="large"
                                          placeholder="From"
                                          prefix={<CiLocationOn />}
                                          onChange={onChange}
                                        />
                                      </div>
                                    </div>

                                    {/* to input field */}
                                    <div className="form-group col-lg col-md-12 col-sm-12">
                                      <div className="field-label">To</div>
                                      <div className="field-inner">
                                        <Input
                                          size="large"
                                          placeholder="To"
                                          prefix={<CiLocationOn />}
                                          onChange={onChange}
                                        />
                                      </div>
                                    </div>

                                    {/* check in input field */}
                                    <div className="form-group col-lg col-md-12 col-sm-12">
                                      <div className="field-label">In</div>
                                      <div className="field-inner">
                                        <DatePicker
                                          // style={{ width: "100%" }}
                                          placeholder="Check In"
                                          size="large"
                                          minDate={dayjs(
                                            `${new Date()
                                              .toJSON()
                                              .slice(0, 10)}`,
                                            dateFormat
                                          )}
                                          onChange={(date, datestring) => {
                                            console.log(datestring);
                                          }}
                                        />
                                      </div>
                                    </div>

                                    {/* check out input field */}
                                    {/* dont show checkout when flight is oneway*/}
                                    {!(
                                      service === "flight" && tripType === 1
                                    ) && (
                                      <div className="form-group col-lg col-md-12 col-sm-12">
                                        <div className="field-label">Out</div>
                                        <div className="field-inner">
                                          <DatePicker
                                            // style={{ width: "100%" }}
                                            placeholder="Check Out"
                                            size="large"
                                            minDate={dayjs(
                                              `${new Date()
                                                .toJSON()
                                                .slice(0, 10)}`,
                                              dateFormat
                                            )}
                                            onChange={(date, datestring) => {
                                              console.log(datestring);
                                            }}
                                          />
                                        </div>
                                      </div>
                                    )}

                                    {/* number of guests/ customers  */}
                                    <div className="form-group col-lg col-md-12 col-sm-12">
                                      <div className="field-label">Guests</div>
                                      <div className="field-inner">
                                        <SearchBox />
                                      </div>
                                    </div>

                                    {/* search button */}
                                    <div className="form-group col-lg col-md-12 col-sm-12">
                                      <div className="field-label"></div>
                                      <div className="field-inner">
                                        <Button
                                          type="primary"
                                          style={{
                                            marginTop: "20px",
                                            // height: "50px",
                                            width: "100%",
                                          }}
                                          icon={<SearchOutlined />}
                                        >
                                          Search
                                        </Button>
                                      </div>
                                    </div>
                                  </>
                                )}

                                {/* if service type visa show country dropdown list */}
                                {service === "visa" && (
                                  <>
                                    <div className="form-group col-lg col-md-12 col-sm-12">
                                      <div className="field-label">
                                        Select Country
                                      </div>
                                      <div
                                        className="field-inner"
                                        style={{ width: "100%" }}
                                      >
                                        <CountryList
                                          country="Thailand"
                                          onChangeCountry={onChangeCountry}
                                        />
                                      </div>
                                    </div>
                                    {/* visa type dropdown */}
                                    <div className="form-group col-lg col-md-12 col-sm-12">
                                      <div className="field-label">
                                        Select Category
                                      </div>
                                      <div className="field-inner">
                                        <Select
                                          value={visaCategoryName}
                                          placeholder="Select Desired Category"
                                          showSearch
                                          size="large"
                                          // defaultValue="usa"
                                          style={{
                                            width: "100%",
                                          }}
                                          onChange={(value) =>
                                            setVisaCategoryName(value)
                                          }
                                          options={[
                                            ...visaCategory.data.data.map(
                                              (visaType) => ({
                                                value: visaType.title,
                                                label: visaType.title,
                                              })
                                            ),
                                          ]}
                                        />
                                      </div>
                                    </div>

                                    {/* search button */}
                                    <div className="form-group col-lg col-md-12 col-sm-12">
                                      <div className="field-label"></div>
                                      <div className="field-inner">
                                        <Button
                                          type="primary"
                                          style={{
                                            marginTop: "20px",
                                            // height: "50px",
                                            // width: "100%",
                                          }}
                                          onClick={onCountrySelectChange}
                                          icon={<SearchOutlined />}
                                        >
                                          Search
                                        </Button>
                                      </div>
                                    </div>
                                  </>
                                )}

                                {/* if service is Group ticket */}

                                {service === "gt" && (
                                  <>
                                    <div className="form-group col-lg col-md-12 col-sm-12">
                                      <div className="field-label">
                                        Select Destination Country
                                      </div>
                                      <div
                                        className="field-inner"
                                        style={{ width: "100%" }}
                                      >
                                        <CountryList
                                          country="Thailand"
                                          onChangeCountry={onChangeCountry}
                                        />
                                      </div>
                                    </div>
                                    {/* visa type dropdown */}
                                    <div className="form-group col-lg col-md-12 col-sm-12">
                                      <div className="field-label">
                                        Select Date
                                      </div>
                                      <div className="field-inner">
                                        <DatePicker
                                          style={{ width: "100%" }}
                                          placeholder="Check In"
                                          size="large"
                                          minDate={dayjs(
                                            `${new Date()
                                              .toJSON()
                                              .slice(0, 10)}`,
                                            dateFormat
                                          )}
                                          onChange={(date, datestring) => {
                                            console.log(datestring);
                                          }}
                                        />
                                      </div>
                                    </div>

                                    {/* search button */}
                                    <div className="form-group col-lg col-md-12 col-sm-12">
                                      <div className="field-label"></div>
                                      <div className="field-inner">
                                        <Button
                                          type="primary"
                                          style={{
                                            marginTop: "20px",
                                            // height: "50px",
                                            // width: "100%",
                                          }}
                                          onClick={onCountrySelectChange}
                                          icon={<SearchOutlined />}
                                        >
                                          Search
                                        </Button>
                                      </div>
                                    </div>
                                  </>
                                )}

                                {/* if service type hajj/umrah show price and duration search box */}
                                {service === "hajj" && (
                                  <>
                                    <div className="form-group col-lg col-md-12 col-sm-12">
                                      <div className="field-label">Type</div>
                                      <div className="field-inner">
                                        <Select
                                          placeholder="Type"
                                          showSearch
                                          value={hajjOrUmrah}
                                          options={[
                                            {
                                              value: "Hajj",
                                              label: "Hajj",
                                            },
                                            {
                                              value: "Umrah",
                                              label: "Umrah",
                                            },
                                          ]}
                                          size="large"
                                          style={{
                                            width: "100%",
                                          }}
                                          onChange={(value) =>
                                            setHajjOrUmrah(value)
                                          }
                                        />
                                      </div>
                                    </div>

                                    {/*<div className="form-group col-lg col-md-12 col-sm-12">
                                          <div className="field-label">
                                            Price
                                          </div>
                                          <div className="field-inner">
                                            <InputNumber
                                              placeholder="Price"
                                              changeOnWheel
                                              size="large"
                                              formatter={(value) =>
                                                `৳ ${value}`.replace(
                                                  /\B(?=(\d{3})+(?!\d))/g,
                                                  ","
                                                )
                                              }
                                              parser={(value) =>
                                                value.replace(/\৳\s?|(,*)/g, "")
                                              }
                                              style={{
                                                width: "100%",
                                              }}
                                              onChange={(value) =>
                                                setPrice(value)
                                              }
                                            />
                                          </div>
                                        </div>  */}

                                    {/* <div className="form-group col-lg col-md-12 col-sm-12">
                                          <div className="field-label">
                                            Duration
                                          </div>
                                          <div className="field-inner">
                                            <InputNumber
                                              placeholder="Duration Days"
                                              changeOnWheel
                                              size="large"
                                              // defaultValue="usa"
                                              style={{
                                                width: "100%",
                                              }}
                                              onChange={(value) =>
                                                setDuration(value)
                                              }
                                            />
                                          </div>
                                        </div> */}

                                    {/* search button */}
                                    <div className="form-group col-lg col-md-12 col-sm-12">
                                      <div className="field-label"></div>
                                      <div className="field-inner">
                                        <Button
                                          type="primary"
                                          style={{
                                            marginTop: "20px",
                                            // height: "50px",
                                            // width: "100%",
                                          }}
                                          onClick={onPriceAndDurationChange}
                                          icon={<SearchOutlined />}
                                        >
                                          Search
                                        </Button>
                                      </div>
                                    </div>
                                  </>
                                )}
                              </div>

                              {/* when flight is multicity show another search box */}
                              {service === "flight" && tripType === 3 && (
                                <div className="search-box-main">
                                  {service === "flight" && (
                                    <div className="form-group col-lg col-md-12 col-sm-12">
                                      <div className="field-label">From</div>
                                      <div className="field-inner">
                                        <Input
                                          size="large"
                                          placeholder="From"
                                          prefix={<CiLocationOn />}
                                          onChange={onChange}
                                        />
                                      </div>
                                    </div>
                                  )}
                                  <div className="form-group col-lg col-md-12 col-sm-12">
                                    <div className="field-label">To</div>
                                    <div className="field-inner">
                                      <Input
                                        size="large"
                                        placeholder="To"
                                        prefix={<CiLocationOn />}
                                        onChange={onChange}
                                      />
                                    </div>
                                  </div>
                                  <div className="form-group col-lg col-md-12 col-sm-12">
                                    <div className="field-label">In</div>
                                    <div className="field-inner">
                                      <DatePicker
                                        // style={{ width: "100%" }}
                                        placeholder="Check In"
                                        size="large"
                                        minDate={dayjs(
                                          `${new Date().toJSON().slice(0, 10)}`,
                                          dateFormat
                                        )}
                                        onChange={(date, datestring) => {
                                          console.log(datestring);
                                        }}
                                      />
                                    </div>
                                  </div>
                                  <div className="form-group col-lg col-md-12 col-sm-12">
                                    <div className="field-label">Out</div>
                                    <div className="field-inner">
                                      <DatePicker
                                        // style={{ width: "100%" }}
                                        placeholder="Check Out"
                                        size="large"
                                        minDate={dayjs(
                                          `${new Date().toJSON().slice(0, 10)}`,
                                          dateFormat
                                        )}
                                        onChange={(date, datestring) => {
                                          console.log(datestring);
                                        }}
                                      />
                                    </div>
                                  </div>

                                  <div className="form-group col-lg col-md-12 col-sm-12">
                                    <div className="field-label"></div>
                                    <div className="field-inner">
                                      <Button
                                        style={{
                                          marginTop: "20px",
                                          // height: "50px",
                                          width: "40%",
                                        }}
                                        icon={<CloseOutlined />}
                                      />
                                    </div>
                                  </div>
                                </div>
                              )}

                              {/* add city button for multicity */}
                              {/* <Button
                                style={{
                                  marginTop: "20px",
                                  // height: "50px",
                                  width: "20%",
                                }}
                                icon={<PlusOutlined />}
                              >
                                Add More Flight
                              </Button> */}
                            </div>
                          </div>
                        </div>
                        {/* </form> */}
                      </div>
                      {/* <p className="lower-text">
                        <span>3200</span> tour packages waiting for you
                      </p> */}
                    </div>
                  </div>
                </div>
              </div>
              <div className="right-col col-lg-6 col-md-12">
                <div
                  className="inner wow fadeInRight"
                  data-wow-delay="0ms"
                  data-wow-duration="1500ms"
                >
                  <div
                    className="image-layer"
                    style={{ backgroundImage: `url(${planeTree})` }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!--End Banner Section --> */}

      {/* </Suspense> */}
    </>
  );
};

export default Hero3;
