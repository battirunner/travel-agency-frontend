// import { format } from "date-fns";
import React, { useState } from "react";
// import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
// import { BsFillPersonFill } from "react-icons/bs";
// import { FaCalendarDay } from "react-icons/fa";
// import { MdLocationOn } from "react-icons/md";
import { message } from "antd";
import axios from "axios";
import { useNavigate, useSearchParams } from "react-router-dom";
import useSWR from "swr";
import bannerVisaServices from "../../assets/images/resources/featured/bannerVisaServices.jpg";
import Footer3 from "./../../components/footer/Footer3";
import Navbar3 from "./../../components/navbar/Navbar3";
import VisaImportantNotes from "./VisaImportantNotes";
import VisaRequiredItem from "./VisaRequiredItem";
// import { toast } from "react-toastify";

const fetcher = async (...args) => {
  try {
    const res = await axios.get(...args);
    return res;
  } catch (error) {
    return error;
  }
};

const Visa = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [country, setCountry] = useState(searchParams.get("country"));
  const [visaCategory, setVisaCategory] = useState(
    searchParams.get("visaCategory")
  );
  // const [visaData, setVisaData] = useState([]);

  const navigate = useNavigate();

  // console.log(
  //   `${
  //     import.meta.env.VITE_BASE_URL
  //   }/visa?country=${country}&visaCategory=${visaCategory}`
  // );

  const { data, error } = useSWR(
    `${
      import.meta.env.VITE_BASE_URL
    }/visa?country=${country}&visaCategory=${visaCategory}`,
    fetcher,
    {
      suspense: true,
    }
  );
  if (error) {
    message.error(error);
  } else {
    console.log("check data", data);
    // if(!data.data.data.success) {

    // }
    // setVisaData(data.data.data);
  }

  const [openDate, setOpenDate] = useState(false);
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  const [openOptions, setOpenOptions] = useState(false);
  const [options, setOptions] = useState(1);

  const handleOption = (operation) => {
    // setOptions(prev=>{return {
    //   ...prev, [name]:operation==='i'?options[name]+1:options[name]===0?0:options[name]-1,
    // }})
    setOptions((prevOptions) => {
      return operation === "i" ? prevOptions + 1 : prevOptions - 1;
    });
  };

  const [opener, SetOpener] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ]);

  const handleClick = (index) => {
    const updateOpener = [...opener];
    updateOpener[index] = !updateOpener[index];
    SetOpener(updateOpener);
  };
  return (
    <div className="page-wrapper">
      <Navbar3 />
      {/* Banner Section */}
      <section className="inner-banner">
        <div
          className="image-layer"
          style={{
            backgroundImage: `url(${bannerVisaServices})`,
          }}
        ></div>
        <div className="auto-container">
          <div className="content-box">
            <h1>Visa</h1>
            <div className="bread-crumb">
              {/* <ul className="clearfix">
                <li>
                  <a href="index.html">Home</a>
                </li>
                <li className="current">Hotels</li>
              </ul> */}
            </div>
          </div>
        </div>
      </section>
      {/*End Banner Section */}

      {data?.data?.data.success == false ? (
        <h1 className="text-center mt-5">{data.data.data.message}</h1>
      ) : data?.response?.data.error ? (
        <>{data.response.data.errors}</>
      ) : (
        <div className="dsp-container tour-single">
          <div className="auto-container">
            <div className="row clearfix">
              {/*Content Side*/}
              <div className="content-side col-xl-8 col-lg-12 col-md-12 col-sm-12">
                <div className="content-inner">
                  <div className="sp-header">
                    <div className="loc-rat clearfix">
                      <div className="location"> </div>
                      <div className="rating">
                        {/* <a href="#" className="theme-btn">
                        <i className="fa-solid fa-star" />{" "}
                        <strong>4.8&ensp;</strong>
                        <span className="count">4233 Reviews</span>
                      </a> */}
                      </div>
                      <div className="add-fav">
                        {/* <a href="#">
                        <i className="far fa-heart" /> Add to Wishlist
                      </a> */}
                      </div>
                    </div>
                    <h1>{data.data.data.title}</h1>
                    <div className="info clearfix">
                      <div className="duration">
                        {/* <i className="fa-solid fa-clock" />  */}
                      </div>
                      <div className="persons">
                        {/* <i className="fa-solid fa-user" />  */}
                      </div>
                    </div>
                  </div>
                  <div className="upper-content">
                    {/* <div className="text-content">
                    <h3>Details</h3>
                    <p></p>

                    <br />
                    <h5>Highlights</h5>
                    <ul className="styled-list-one">
                      <li>
                        Explore the best beaches of Phuket, from lively Patong
                        to serene Kata and Karon. Discover the exotic underwater
                        world through snorkeling or scuba diving at Phi Phi
                        Islands.
                      </li>
                    </ul>
                  </div> */}
                    <div className="basic-info">
                      <div className="i-block clearfix">
                        <h5>Basic Information</h5>
                      </div>
                      <div className="i-block clearfix">
                        <div className="i-title">Visa Type</div>
                        <div className="i-content">
                          {data.data.data.visa_category.title}
                        </div>
                      </div>
                      <div className="i-block clearfix">
                        <div className="i-title">Validity</div>
                        <div className="i-content">
                          {data.data.data.validity}
                        </div>
                      </div>
                      <div className="i-block clearfix">
                        <div className="i-title">Minimum Stay</div>
                        <div className="i-content">
                          {data.data.data.min_stay}
                        </div>
                      </div>
                      <div className="i-block clearfix">
                        <div className="i-title">Price</div>
                        <div className="i-content">{data.data.data.price}</div>
                      </div>
                      <div className="i-block clearfix">
                        <div className="i-title">Country</div>
                        <div className="i-content">
                          {data.data.data.country}
                        </div>
                      </div>

                      {JSON.parse(data.data.data.details).map((details, i) => (
                        <>
                          <div key={i} className="i-block clearfix">
                            <h5>{details.name}</h5>
                            {/* <div className="i-title">{details.items}</div> */}
                          </div>
                          {details.name == "Important Notes" ? (
                            <VisaImportantNotes
                              visaImportantNotes={details.items}
                            />
                          ) : (
                            <VisaRequiredItem visaData={details.items} />
                          )}
                        </>
                      ))}
                    </div>
                  </div>

                  <div className="t-faqs">
                    <h3>Frequently Asked Questions</h3>
                    <ul className="accordion-box faqs-accordion clearfix">
                      {/*Block*/}
                      <li
                        className={
                          opener[4]
                            ? "accordion block active-block"
                            : "accordion block"
                        }
                        onClick={() => handleClick(4)}
                      >
                        <div
                          className={opener[4] ? "acc-btn active" : "acc-btn"}
                        >
                          What is the best time to visit Phuket for this tour?
                          <span className="arrow fa fa-plus" />
                        </div>
                        <div className="acc-content current">
                          <div className="content">
                            <div className="travilo-text">
                              <p>
                                The best time to visit Phuket for this tour is
                                during the dry season, which typically lasts
                                from November to April. During these months, the
                                weather is generally sunny with lower chances of
                                rain, providing ideal conditions for
                                island-hopping and outdoor activities.
                              </p>
                            </div>
                          </div>
                        </div>
                      </li>
                      {/*Block*/}
                      <li
                        className={
                          opener[5]
                            ? "accordion block active-block"
                            : "accordion block"
                        }
                        onClick={() => handleClick(5)}
                      >
                        <div
                          className={opener[5] ? "acc-btn active" : "acc-btn"}
                        >
                          Are the snorkeling and scuba diving activities
                          suitable for beginners?
                          <span className="arrow fa fa-plus" />
                        </div>
                        <div className="acc-content">
                          <div className="content">
                            <div className="travilo-text">
                              <p>
                                Yes, both snorkeling and scuba diving activities
                                are suitable for beginners. Our experienced
                                guides will provide comprehensive instructions
                                and ensure your safety throughout the excursion.
                                Life jackets and necessary equipment will be
                                provided, making the experience enjoyable for
                                participants of all skill levels.
                              </p>
                            </div>
                          </div>
                        </div>
                      </li>
                      {/*Block*/}
                      <li
                        className={
                          opener[6]
                            ? "accordion block active-block"
                            : "accordion block"
                        }
                        onClick={() => handleClick(6)}
                      >
                        <div
                          className={opener[6] ? "acc-btn active" : "acc-btn"}
                        >
                          What should I wear when visiting temples in Phuket?
                          <span className="arrow fa fa-plus" />
                        </div>
                        <div className="acc-content">
                          <div className="content">
                            <div className="travilo-text">
                              <p>
                                When visiting temples, it is essential to dress
                                modestly and respectfully. Both men and women
                                should cover their shoulders and knees.
                                Loose-fitting, comfortable clothing is
                                recommended, and it's a good idea to carry a
                                sarong or scarf to cover up when needed. Please
                                remove your shoes before entering temple
                                buildings as a sign of respect.
                              </p>
                            </div>
                          </div>
                        </div>
                      </li>
                      {/*Block*/}
                      <li
                        className={
                          opener[7]
                            ? "accordion block active-block"
                            : "accordion block"
                        }
                        onClick={() => handleClick(7)}
                      >
                        <div
                          className={opener[7] ? "acc-btn active" : "acc-btn"}
                        >
                          Can I extend my stay in Phuket after the tour ends?
                          <span className="arrow fa fa-plus" />
                        </div>
                        <div className="acc-content">
                          <div className="content">
                            <div className="travilo-text">
                              <p>
                                Absolutely! If you wish to extend your stay in
                                Phuket after the tour concludes, we can assist
                                you with making the necessary arrangements.
                                Whether you want to continue relaxing on the
                                beautiful beaches or explore more of Phuket's
                                attractions, our team will be happy to customize
                                your itinerary according to your preferences.
                              </p>
                            </div>
                          </div>
                        </div>
                      </li>
                      {/*Block*/}
                      <li
                        className={
                          opener[8]
                            ? "accordion block active-block"
                            : "accordion block"
                        }
                        onClick={() => handleClick(8)}
                      >
                        <div
                          className={opener[8] ? "acc-btn active" : "acc-btn"}
                        >
                          Are meals included in the tour package?
                          <span className="arrow fa fa-plus" />
                        </div>
                        <div className="acc-content">
                          <div className="content">
                            <div className="travilo-text">
                              <p>
                                Yes, some meals are included in the tour
                                package. Daily breakfast at the resort and a
                                beachside lunch during the Phi Phi Islands
                                excursion are provided. However, lunches and
                                dinners on other days, as well as any additional
                                snacks or beverages, are not included. This
                                allows you to have the flexibility to explore
                                local restaurants and taste various Thai
                                delicacies during your free time.
                              </p>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              {/*Sidebar Side*/}
              <div className="sidebar-side col-xl-4 col-lg-8 col-md-12 col-sm-12">
                <div className="sidebar-inner">
                  {/*Widget*/}
                  <div className="dsp-widget t-book-widget alt-margin">
                    <div className="inner-box">
                      <div className="t-book-header">
                        <span className="st-txt">
                          Start <br />
                          From
                        </span>
                        <span className="amount">$120</span>
                        <span className="qty">/ Per Person</span>
                      </div>
                      <div className="lower-box">
                        <div className="form-box site-form">
                          <form method="post" action="tour-single.html">
                            <div className="fields">
                              <div className="form-group">
                                <div className="field-label">Date</div>
                                <div className="field-inner">
                                  <input
                                    className="datepicker"
                                    type="text"
                                    name="field-name"
                                    defaultValue=""
                                    placeholder="Select a date"
                                    required=""
                                  />
                                  <i className="alt-icon fa fa-calendar-alt" />
                                </div>
                              </div>
                              <div className="form-group">
                                <div className="field-label">Time</div>
                                <div className="field-inner">
                                  <select
                                    name="field-name"
                                    className="custom-select"
                                  >
                                    <option>Select a time</option>
                                    <option>0000 Hrs</option>
                                    <option>0200 Hrs</option>
                                    <option>0400 Hrs</option>
                                    <option>0600 Hrs</option>
                                    <option>0800 Hrs</option>
                                    <option>1000 Hrs</option>
                                    <option>1200 Hrs</option>
                                    <option>1400 Hrs</option>
                                    <option>1600 Hrs</option>
                                    <option>1800 Hrs</option>
                                    <option>2000 Hrs</option>
                                    <option>2200 Hrs</option>
                                  </select>
                                </div>
                              </div>
                            </div>
                            <h6>Tickets</h6>
                            <div className="tickets">
                              <div className="ticket-block clearfix">
                                <div className="tick-ttl">
                                  Adults (18+ years)
                                </div>
                                <div className="tick-sel">
                                  <div className="quantity-box">
                                    <div className="item-quantity">
                                      <input
                                        className="qty-spinner"
                                        type="text"
                                        defaultValue={1}
                                        name="quantity"
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="ticket-block clearfix">
                                <div className="tick-ttl">Kids (12+ years)</div>
                                <div className="tick-sel">
                                  <div className="quantity-box">
                                    <div className="item-quantity">
                                      <input
                                        className="qty-spinner"
                                        type="text"
                                        defaultValue={1}
                                        name="quantity"
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="ticket-block clearfix">
                                <div className="tick-ttl">
                                  Children (3+ years)
                                </div>
                                <div className="tick-sel">
                                  <div className="quantity-box">
                                    <div className="item-quantity">
                                      <input
                                        className="qty-spinner"
                                        type="text"
                                        defaultValue={1}
                                        name="quantity"
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <h6>Additional Service</h6>
                            <div className="add-ser">
                              <ul>
                                <li>
                                  <div className="cb-block">
                                    <input type="checkbox" id="cb-1" />
                                    <label className="clearfix" htmlFor="cb-1">
                                      <span className="txt">
                                        Additional Guide
                                      </span>
                                      <span className="amount">$50</span>
                                    </label>
                                  </div>
                                </li>
                                <li>
                                  <div className="cb-block">
                                    <input type="checkbox" id="cb-2" />
                                    <label className="clearfix" htmlFor="cb-2">
                                      <span className="txt">Internet</span>
                                      <span className="amount">$30</span>
                                    </label>
                                  </div>
                                </li>
                                <li>
                                  <div className="cb-block">
                                    <input type="checkbox" id="cb-3" />
                                    <label className="clearfix" htmlFor="cb-3">
                                      <span className="txt">Photography</span>
                                      <span className="amount">$90</span>
                                    </label>
                                  </div>
                                </li>
                              </ul>
                            </div>
                            <div className="total clearfix">
                              <div className="t-ttl">Total</div>
                              <div className="ttl-amt">$450</div>
                            </div>
                            <div className="proceed-link">
                              <button
                                type="button"
                                className="theme-btn btn-style-two"
                              >
                                <span>Proceed to Book</span>
                              </button>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/*Widget*/}
                  <div className="dsp-widget get-help-widget">
                    <div className="inner">
                      <h6>Get Help</h6>
                      <h3>Need Help to Book?</h3>
                      <p className="travilo-text">
                        Our dedicated team of travel experts is here to assist
                        you every step of the way, ensuring a seamless and
                        unforgettable journey.
                      </p>
                      <div className="call-to">
                        <a href="tel:+9689999000">
                          <i className="icon fa-solid fa-phone" /> Call Us
                          <span className="nmbr">+968 9999 9000</span>
                        </a>
                      </div>
                    </div>
                  </div>
                  {/*Widget*/}
                  <div className="dsp-widget similar-widget">
                    <div className="inner">
                      <h3>You might also like</h3>
                      {/*Logo*/}
                      <div className="posts">
                        <div className="post">
                          <div className="image">
                            <a href="#">
                              <img
                                src="assets/images/resources/thumbnails/uk-thumb.jpg"
                                alt="London Bridge"
                              />
                            </a>
                          </div>
                          <h6>
                            <a href="#">
                              Iconic Landmark Connecting History and Modernity
                            </a>
                          </h6>
                          <div className="price">
                            Starts from <span className="amount">$399</span>
                          </div>
                        </div>
                        <div className="post">
                          <div className="image">
                            <a href="#">
                              <img
                                src="assets/images/resources/thumbnails/maldives-thumb.jpg"
                                alt="Maldives"
                              />
                            </a>
                          </div>
                          <h6>
                            <a href="#">
                              Unveiling the Serenity of Maldivian Islands
                            </a>
                          </h6>
                          <div className="price">
                            Starts from <span className="amount">$595</span>
                          </div>
                        </div>
                        <div className="post">
                          <div className="image">
                            <a href="#">
                              <img
                                src="assets/images/resources/thumbnails/finland-thumb.jpg"
                                alt="Helsinki"
                              />
                            </a>
                          </div>
                          <h6>
                            <a href="#">
                              Vibrant Helsinki, A Fusion of Culture and Cuisine
                            </a>
                          </h6>
                          <div className="price">
                            Starts from <span className="amount">$565</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* searchbox */}

      <Footer3 />
    </div>
  );
};

export default Visa;
