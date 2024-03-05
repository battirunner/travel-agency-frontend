import React, { useState } from "react";
import Navbar3 from "../../components/navbar/Navbar3";
import TourListHero from "../../components/hero/TourListHero";
import Footer3 from "../../components/footer/Footer3";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
dayjs.extend(customParseFormat);

import { FaRegStar, FaStar } from "react-icons/fa";

import tIcon10 from "../../assets/images/icons/t-icon-10.png";
import bangkok from "../../assets/images/resources/destinations/tours/bangkok.jpg";
import tIcon9 from "../../assets/images/icons/t-icon-9.png";
import varenna from "../../assets/images/resources/destinations/tours/varenna.jpg";
import tIcon8 from "../../assets/images/icons/t-icon-8.png";
import egypt from "../../assets/images/resources/destinations/tours/egypt.jpg";
import tIcon3 from "../../assets/images/icons/t-icon-3.png";
import morocco from "../../assets/images/resources/destinations/tours/morocco.jpg";
import tIcon2 from "../../assets/images/icons/t-icon-2.png";
import rome from "../../assets/images/resources/destinations/tours/rome.jpg";
import tIcon1 from "../../assets/images/icons/t-icon-1.png";
import maldives from "../../assets/images/resources/destinations/tours/maldives.jpg";
import {
  Button,
  Checkbox,
  DatePicker,
  Dropdown,
  Form,
  Input,
  Select,
  Slider,
  Space,
} from "antd";
import { CiLocationOn, CiUser } from "react-icons/ci";
import { DownOutlined, TwitchOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

const dateFormat = "YYYY-MM-DD";

const items = [
  {
    label: "Price (High to Low)",
    key: "1",
  },
  {
    label: "Price (Low to High)",
    key: "2",
  },
  {
    label: "Date: Ascending",
    key: "3",
  },
  {
    label: "Date: Descending",
    key: "4",
  },
];

const ratingOptions = [
  {
    label: (
      <>
        <FaStar color="orange" />
        <FaStar color="orange" />
        <FaStar color="orange" />
        <FaStar color="orange" />
        <FaStar color="orange" />
      </>
    ),
    value: 5,
  },
  {
    label: (
      <>
        <FaStar color="orange" />
        <FaStar color="orange" />
        <FaStar color="orange" />
        <FaStar color="orange" />
        <FaRegStar />
      </>
    ),
    value: 4,
  },
  {
    label: (
      <>
        <FaStar color="orange" />
        <FaStar color="orange" />
        <FaStar color="orange" />
        <FaRegStar />
        <FaRegStar />
      </>
    ),
    value: 3,
  },
  {
    label: (
      <>
        <FaStar color="orange" />
        <FaStar color="orange" />
        <FaRegStar />
        <FaRegStar />
        <FaRegStar />
      </>
    ),
    value: 2,
  },
  {
    label: (
      <>
        <FaStar color="orange" />
        <FaRegStar />
        <FaRegStar />
        <FaRegStar />
        <FaRegStar />
      </>
    ),
    value: 1,
  },
];

const locationOptions = [
  {
    label: "Bangkok",
    value: "Bangkok",
  },
  {
    label: "Vienna",
    value: "Vienna",
  },
  {
    label: "Egypt",
    value: "Egypt",
  },
  {
    label: "Morocco",
    value: "Morocco",
  },
  {
    label: "Rome",
    value: "Rome",
  },
  {
    label: "Maldives",
    value: "Maldives",
  },
];

const TourList = () => {
  const [tourPackages, setTourPackages] = useState([
    {
      id: 1,
      title: "Serenity in the Maldives",
      description:
        'A Tropical Paradise Retreat" Description: Surrender to the tranquility of the Seychelles, where white sandy beaches, turquoise waters, and lush landscapes await. Luxuriate in exclusive resorts, indulge in spa retreats ...',
      image: maldives,
      price: 465,
      location: "Maldives",
      rating: 4.8,
      reviews: 8788,
      duration: "5 Days 6 Nights",
      featured: true,
    },
    {
      id: 2,
      title: "A Journey through History and Culture",
      description: `Embark on a captivating journey through Rome's ancient ruins and iconic landmarks. Discover the Colosseum, Vatican City, and the Trevi Fountain while savoring delectable Italian cuisine ...`,
      image: rome,
      price: 499,
      location: "Rome",
      rating: 4.6,
      reviews: 7767,
      duration: "3 Days 4 Nights",
      topRated: true,
    },
    {
      id: 3,
      title: "From Ancient Medina to Modern Cosmopolitan",
      description: `Discover the allure of Casablanca, where the Old Medina and modern architecture blend harmoniously. Embrace the city's unique blend of North African charm and cosmopolitan flair ...`,
      image: morocco,
      price: 399,
      location: "Cazablanca",
      rating: 4.7,
      duration: "5 Days 6 Nights",
      // featured: true,
    },
    {
      id: 4,
      title: "Embark on a Journey to Marvel the Pyramids",
      description:
        "Embark on a journey through time and marvel at the enigmatic wonders of the Giza Pyramids, an extraordinary tour attraction that beckons adventurers and history enthusiasts from around the globe. Located just ...",
      image: egypt,
      price: 275,
      location: "Egypt",
      rating: 4.8,
      duration: "4 Days 5 Nights",
      // featured: true,
    },
    {
      id: 5,
      title: "Lakeside Serenity; A Tranquil Escape on Lake Como",
      description:
        'A Tropical Paradise Retreat" Description: Surrender to the tranquility of the Seychelles, where white sandy beaches, turquoise waters, and lush landscapes await. Luxuriate in exclusive resorts, indulge in spa retreats ...',
      image: varenna,
      price: 599,
      location: "Varenna",
      rating: 4.8,
      duration: "5 Days 6 Nights",
      // featured: true,
    },
    {
      id: 6,
      title: "Vibrant Bangkok, A Fusion of Culture and Cuisine",
      description:
        'A Tropical Paradise Retreat" Description: Surrender to the tranquility of the Seychelles, where white sandy beaches, turquoise waters, and lush landscapes await. Luxuriate in exclusive resorts, indulge in spa retreats ...',
      image: bangkok,
      price: 599,
      location: "Bangkok",
      rating: 4.8,
      duration: "5 Days 6 Nights",
      featured: true,
    },
  ]);

  const [tourTypes, setTourTypes] = useState([
    {
      id: 1,
      title: "Adventure",
    },
    {
      id: 2,
      title: "Hiking",
    },
    {
      id: 3,
      title: `Romance`,
    },
    {
      id: 4,
      title: "Culture",
    },
    {
      id: 5,
      title: "City Tour",
    },
    {
      id: 6,
      title: "History",
    },
    {
      id: 7,
      title: "Beach Tour",
    },
    {
      id: 8,
      title: "Sports Tour",
    },
  ]);

  const tourTypesOptions = tourTypes.map((tourType) => ({
    label: tourType.title,
    value: tourType.title,
  }));

  const onTourTypesChange = (tourTypes) => {
    console.log(tourTypes);
  };
  const onRatingOptionsChange = (ratingOptions) => {
    console.log(ratingOptions);
  };
  const onLocationChange = (locations) => {
    console.log(locations);
  };

  const [searchFields, setSearchFields] = useState({
    title: "",
    location: "",
    startDate: "",
    endDate: "",
    guestNo: "",
    priceRange: "",
    rating: "",
  });

  const onFinish = (values) => {
    console.log(values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  // const onSliderChange = (value) => {
  //   console.log("onChange: ", value);
  // };
  const onSliderChangeComplete = (value) => {
    console.log("onChangeComplete: ", value);
  };

  const onSortClick = ({ key }) => {
    console.log(`Click on item ${key}`);
  };
  return (
    <div className="page-wrapper">
      <Navbar3 />
      <TourListHero />
      <div className="sidebar-container">
        <div className="auto-container">
          <div className="row clearfix">
            {/*Sidebar Side*/}
            <div className="sidebar-side col-xl-4 col-lg-5 col-md-12 col-sm-12">
              <div className="sidebar-inner">
                {/*Widget*/}
                <div className="sb-widget s-widget">
                  <div className="w-inner">
                    <div className="s-title">
                      {/* <i className="fa-solid fa-caret-right" /> */}
                      <h4>Search Packages</h4>
                    </div>
                    <div className="form-box site-form">
                      <Form
                        name="searchTourPackages"
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                      >
                        <Form.Item name="tourTitle" label="">
                          <Select
                            size="large"
                            placeholder="Select Tours"
                            showSearch
                            onChange={(e) =>
                              setSearchFields({
                                ...searchFields,
                                title: e.target.value,
                              })
                            }
                          >
                            {tourPackages.map((tourPackage) => (
                              <Select.Option
                                key={tourPackage.id}
                                values={tourPackage.title}
                              >
                                {tourPackage.title}
                              </Select.Option>
                            ))}
                          </Select>
                        </Form.Item>

                        <Form.Item name="location" label="">
                          <Input
                            suffix={<CiLocationOn />}
                            placeholder="Location"
                            size="large"
                            onChange={(e) =>
                              setSearchFields({
                                ...searchFields,
                                location: e.target.value,
                              })
                            }
                          />
                        </Form.Item>
                        <Form.Item name="startDate" label="">
                          <DatePicker
                            style={{ width: "100%" }}
                            placeholder="Check In"
                            size="large"
                            minDate={dayjs(
                              `${new Date().toJSON().slice(0, 10)}`,
                              dateFormat
                            )}
                            onChange={(date, datestring) => {
                              console.log(datestring);
                              setSearchFields({
                                ...searchFields,
                                startDate: datestring,
                              });
                            }}
                          />
                        </Form.Item>
                        <Form.Item name="endDate" label="">
                          <DatePicker
                            style={{ width: "100%" }}
                            placeholder="Check In"
                            size="large"
                            minDate={dayjs(
                              `${new Date().toJSON().slice(0, 10)}`,
                              dateFormat
                            )}
                            onChange={(date, datestring) => {
                              console.log(datestring);
                              setSearchFields({
                                ...searchFields,
                                startDate: datestring,
                              });
                            }}
                          />
                        </Form.Item>
                        <Form.Item name="guestNo" label="">
                          <Input
                            suffix={<CiUser />}
                            placeholder="Guests"
                            size="large"
                            onChange={(e) =>
                              setSearchFields({
                                ...searchFields,
                                guestNo: e.target.value,
                              })
                            }
                          />
                        </Form.Item>

                        <Form.Item>
                          <Button
                            style={{ marginTop: "20px" }}
                            type="button"
                            htmlType="submit"
                            block
                            size="large"
                            className="theme-btn btn-style-one"
                          >
                            <span>
                              Search <i className="fa-solid fa-search" />
                            </span>
                          </Button>
                        </Form.Item>
                      </Form>
                    </div>
                  </div>
                </div>
                {/*Widget  price range*/}
                <div className="sb-widget p-widget">
                  <div className="w-inner">
                    <div className="s-title">
                      <h4>Pricing</h4>
                    </div>
                    <div className="range-slider">
                      {/* <div className="price-range-slider ui-slider ui-corner-all ui-slider-horizontal ui-widget ui-widget-content" /> */}
                      <div className="clearfix">
                        <Slider
                          label="Pricing"
                          range
                          min={0}
                          max={1000}
                          step={10}
                          // defaultValue={[20, 50]}
                          tooltip={{
                            formatter: (value) => `${value} ৳`,
                            open: true,
                            placement: "bottom",
                          }}
                          // onChange={onSliderChange}
                          onChangeComplete={onSliderChangeComplete}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                {/*Widget*/}
                <div className="sb-widget cbf-widget rating-widget">
                  <div className="w-inner">
                    <div className="s-title">
                      <h4>Rating</h4>
                    </div>
                    <Checkbox.Group
                      options={ratingOptions}
                      onChange={onRatingOptionsChange}
                    />
                    {/* <ul>
                      <li>
                        <div className="cb-block">
                          <input
                            type="checkbox"
                            id="5star"
                            onChange={(e) => {
                              console.log(e.target.id);
                            }}
                          />
                          <label htmlFor="5star">
                            <span className="rating">
                              <i className="fa-solid fa-star" />
                              <i className="fa-solid fa-star" />
                              <i className="fa-solid fa-star" />
                              <i className="fa-solid fa-star" />
                              <i className="fa-solid fa-star" />
                            </span>
                          </label>
                        </div>
                      </li>
                      <li>
                        <div className="cb-block">
                          <input
                            type="checkbox"
                            id="4star"
                            onChange={(e) => {
                              console.log(e.target.id);
                            }}
                          />
                          <label htmlFor="4star">
                            <span className="rating">
                              <i className="fa-solid fa-star" />
                              <i className="fa-solid fa-star" />
                              <i className="fa-solid fa-star" />
                              <i className="fa-solid fa-star" />
                              <i className="empty fa fa-star" />
                            </span>
                            <span className="txt">and Above</span>
                          </label>
                        </div>
                      </li>
                      <li>
                        <div className="cb-block">
                          <input
                            type="checkbox"
                            id="3star"
                            onChange={(e) => {
                              console.log(e.target.id);
                            }}
                          />
                          <label htmlFor="3star">
                            <span className="rating">
                              <i className="fa-solid fa-star" />
                              <i className="fa-solid fa-star" />
                              <i className="fa-solid fa-star" />
                              <i className="empty fa fa-star" />
                              <i className="empty fa fa-star" />
                            </span>
                            <span className="txt">and Above</span>
                          </label>
                        </div>
                      </li>
                      <li>
                        <div className="cb-block">
                          <input
                            type="checkbox"
                            id="2star"
                            onChange={(e) => {
                              console.log(e.target.id);
                            }}
                          />
                          <label htmlFor="2star">
                            <span className="rating">
                              <i className="fa-solid fa-star" />
                              <i className="fa-solid fa-star" />
                              <i className="empty fa fa-star" />
                              <i className="empty fa fa-star" />
                              <i className="empty fa fa-star" />
                            </span>
                            <span className="txt">and Above</span>
                          </label>
                        </div>
                      </li>
                      <li>
                        <div className="cb-block">
                          <input
                            type="checkbox"
                            id="1star"
                            onChange={(e) => {
                              console.log(e.target.id);
                            }}
                          />
                          <label htmlFor="1star">
                            <span className="rating">
                              <i className="fa-solid fa-star" />
                              <i className="empty fa fa-star" />
                              <i className="empty fa fa-star" />
                              <i className="empty fa fa-star" />
                              <i className="empty fa fa-star" />
                            </span>
                            <span className="txt">and Above</span>
                          </label>
                        </div>
                      </li>
                    </ul> */}
                  </div>
                </div>
                {/*Widget*/}
                <div className="sb-widget cbf-widget">
                  <div className="w-inner">
                    <div className="s-title">
                      <h4>Tour Type</h4>
                    </div>
                    <Checkbox.Group
                      options={tourTypesOptions}
                      onChange={onTourTypesChange}
                    />
                    {/* <ul>
                      {tourTypes.map((tourType) => (
                        <li key={tourType.id}>
                          <div className="cb-block">
                            <input
                              type="checkbox"
                              id={tourType.id}
                              value={tourType.title}
                              onChange={(e) => console.log(e)}
                            />
                            <label htmlFor={tourType.id}>
                              <span className="txt">{tourType.title}</span>
                            </label>
                          </div>
                        </li>
                      ))}
                    </ul> */}
                  </div>
                </div>
                {/*Widget*/}
                <div className="sb-widget cbf-widget">
                  <div className="w-inner">
                    <div className="s-title">
                      <h4>Location</h4>
                    </div>

                    <Checkbox.Group
                      options={locationOptions}
                      onChange={onLocationChange}
                    />

                    {/* <ul>
                      <li>
                        <div className="cb-block">
                          <input type="checkbox" id="cb-15" />
                          <label htmlFor="cb-15">
                            <span className="txt">New York</span>
                          </label>
                        </div>
                      </li>
                      <li>
                        <div className="cb-block">
                          <input type="checkbox" id="cb-16" />
                          <label htmlFor="cb-16">
                            <span className="txt">London</span>
                          </label>
                        </div>
                      </li>
                      <li>
                        <div className="cb-block">
                          <input type="checkbox" id="cb-17" />
                          <label htmlFor="cb-17">
                            <span className="txt">Paris</span>
                          </label>
                        </div>
                      </li>
                      <li>
                        <div className="cb-block">
                          <input type="checkbox" id="cb-18" />
                          <label htmlFor="cb-18">
                            <span className="txt">Muscat</span>
                          </label>
                        </div>
                      </li>
                      <li>
                        <div className="cb-block">
                          <input type="checkbox" id="cb-19" />
                          <label htmlFor="cb-19">
                            <span className="txt">Dhaka</span>
                          </label>
                        </div>
                      </li>
                      <li>
                        <div className="cb-block">
                          <input type="checkbox" id="cb-20" />
                          <label htmlFor="cb-20">
                            <span className="txt">Kolkata</span>
                          </label>
                        </div>
                      </li>
                      <li>
                        <div className="cb-block">
                          <input type="checkbox" id="cb-21" />
                          <label htmlFor="cb-21">
                            <span className="txt">Chottogram</span>
                          </label>
                        </div>
                      </li>
                      <li>
                        <div className="cb-block">
                          <input type="checkbox" id="cb-22" />
                          <label htmlFor="cb-22">
                            <span className="txt">Dubai</span>
                          </label>
                        </div>
                      </li>
                    </ul> */}
                  </div>
                </div>
              </div>
            </div>
            {/*sidbar side finish*/}

            {/*Content Side*/}
            <div className="content-side col-xl-8 col-lg-7 col-md-12 col-sm-12">
              <div className="content-inner">
                <div className="filter-row">
                  <div className="clearfix">
                    <div className="s-info">
                      Showing results of <strong>1 - 9</strong> of
                      <strong> 200</strong> items
                    </div>
                    <div className="filters clearfix">
                      <div className="sort-by">
                        <div className="drop-list-one">
                          <div className="inner clearfix">
                            <div className="dropdown-outer open">
                              <Dropdown
                                menu={{
                                  items,
                                  onClick: onSortClick,
                                }}
                              >
                                <a onClick={(e) => e.preventDefault()}>
                                  <Space>
                                    Sort
                                    <DownOutlined />
                                  </Space>
                                </a>
                              </Dropdown>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="packages">
                  {/*Block*/}
                  {tourPackages.map((tourPackage) => (
                    <div key={tourPackage.id} className="package-block-two">
                      <div className="inner-box">
                        <div className="image-box">
                          <div className="image"></div>
                          <Link to={`/tourdetails/${tourPackage.id}`}>
                            <div
                              className="image-layer"
                              style={{
                                backgroundImage: `url(${tourPackage.image})`,
                              }}
                            ></div>
                          </Link>
                          {tourPackage.featured && (
                            <div className="b-title featured">
                              <span>Featured</span>
                            </div>
                          )}
                          {tourPackage.topRated && (
                            <div className="b-title top-rated">
                              <span>Top Rated</span>
                            </div>
                          )}
                          <div className="fav-btn">
                            {/* <a href="#">
                              <span className="far fa-heart" />
                            </a> */}
                          </div>
                          {/* <div className="p-icon">
                            <img src={tIcon3} />
                            <span className="icon flaticon-family" />
                          </div> */}
                        </div>
                        <div className="content-box">
                          <div className="loc-rat clearfix">
                            <div className="location">
                              {tourPackage.location}
                            </div>
                            <div className="rating">
                              <div className="theme-btn">
                                <i className="fa-solid fa-star" />
                                <strong>{tourPackage.rating}</strong> &ensp;
                                <span className="count">
                                  {tourPackage.reviews} Reviews
                                </span>
                              </div>
                            </div>
                          </div>
                          <h5>
                            <Link to={`/tourdetails/${tourPackage.id}`}>
                              {tourPackage.title}
                            </Link>
                          </h5>
                          <p className="travilo-text">
                            {tourPackage.description}
                          </p>
                          <div className="bottom-box clearfix">
                            <div className="duration">
                              <i className="fa-solid fa-clock" />{" "}
                              {tourPackage.duration}
                            </div>
                            <div className="price">
                              Start from{" "}
                              <span className="amount">
                                ${tourPackage.price}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                  {/* {block finished} */}
                </div>
                <div className="styled-pagination">
                  <ul className="clearfix">
                    <li className="active">
                      <a href="#">1</a>
                    </li>
                    <li>
                      <a href="#">2</a>
                    </li>
                    <li>
                      <a href="#">3</a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa-solid fa-angle-right" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* content side finish*/}
          </div>
        </div>
      </div>
      <Footer3 />
    </div>
  );
};

export default TourList;
