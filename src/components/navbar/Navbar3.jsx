import { DownOutlined } from "@ant-design/icons";
import { googleLogout } from "@react-oauth/google";
import { Dropdown, Space, message } from "antd";
import axios from "axios";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import flyingBirdLogo from "../../assets/images/flying-bird-logo3.png";
import menuIcon from "../../assets/images/icons/menu-icon.svg";
import { getFacebookLoginStatus } from "../../custom-hooks/FacebookSdk";
import { clearCredentials } from "../../redux/slices/authSlice";
import Loader from "../loader/Loader";

const Navbar3 = () => {
  const [loading, setLoading] = useState(false);
  const { userInfo } = useSelector((state) => state.auth);

  // console.log(userInfo);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  // const [logoutApiCall] = useLogoutMutation();

  const logoutHandler = async () => {
    setLoading(true);
    //if the user is logged in with Facebook
    getFacebookLoginStatus().then((response) => {
      if (response.status === "connected") {
        FB.logout(function (response) {
          // Person is now logged out
        });
      }
    });

    //if the user is logged in with Google
    googleLogout();

    try {
      // await logoutApiCall().unwrap();
      const res = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/user/logout`,
        {},
        { withCredentials: true }
      );
      setLoading(false);
      dispatch(clearCredentials());
      message.success("Logged out!");
      navigate("/login");
    } catch (error) {
      setLoading(false);
      message.error(error?.response?.data?.errors);
    }
  };

  const items = [
    {
      key: "1",
      label: <NavLink to="/dashboard">Dashboard</NavLink>,
    },
    {
      key: "2",
      label: "Logout",
      onClick: () => {
        logoutHandler();
      },
    },
  ];

  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav((prevNav) => !prevNav);
  };

  // const [activNav, setActiveNav] = useState("");
  return (
    <>
      {loading && <Loader />}
      {/* // <!-- Main Header--> */}
      <header className="main-header fixed-header ">
        {/* <!-- Header Upper --> */}
        <div className="header-upper   ">
          <div className="auto-container ">
            {/* <!-- Main Box --> */}
            <div className="main-box clearfix">
              {/* <!--Logo--> */}
              <div className="logo-box">
                <div className="logo">
                  <NavLink to="/" title="Travilo">
                    <img
                      src={flyingBirdLogo}
                      alt="Flyingbird"
                      title="Flyingbird"
                    />
                  </NavLink>
                </div>
              </div>

              <div className="nav-box clearfix">
                {/* <!--Nav Outer--> */}
                <div className="nav-outer clearfix">
                  <nav className="main-menu">
                    <ul className="navigation clearfix">
                      <li className="dropdown current">
                        <NavLink
                          to="/"
                          className={({ isActive, isPending }) =>
                            isActive ? "active" : isPending ? "pending" : ""
                          }
                        >
                          Home
                        </NavLink>
                        {/* <NavLink to="/">Home</NavLink> */}
                        {/* <ul>
                          <li>
                            <NavLink to="#">Home 01</NavLink>
                          </li>
                          <li>
                            <NavLink to="#">Home 02</NavLink>
                          </li>
                        </ul> */}
                      </li>
                      {/* <li className="dropdown">
                        <NavLink
                          to="/services"
                          className={({ isActive, isPending }) =>
                            isActive ? "active" : isPending ? "pending" : ""
                          }
                        >
                          Services
                        </NavLink>
                        <ul>
                          <li>
                            <NavLink
                              to="/services/visa"
                              className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "active" : ""
                              }
                            >
                              Visa
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              to="/services/flight"
                              className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "active" : ""
                              }
                            >
                              Flight Ticket
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              to="/services/hotels"
                              className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "active" : ""
                              }
                            >
                              Hotels
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              to="/services/hajj"
                              className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "active" : ""
                              }
                            >
                              Umrah/Hajj
                            </NavLink>
                          </li>
                          {/* <li>
                            <NavLink to="#">Hajj</NavLink>
                          </li> */}
                      {/* <li>
                            <NavLink
                              to="/services/currentinsurance"
                              className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "active" : ""
                              }
                            >
                              Insurance
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              to="/services/groupticket"
                              className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "active" : ""
                              }
                            >
                              Group Ticket
                            </NavLink>
                          </li>
                        </ul>
                      </li>  */}
                      {/* <li className="dropdown">
                        <NavLink
                          to="/tours"
                          className={({ isActive, isPending }) =>
                            isActive ? "active" : isPending ? "pending" : ""
                          }
                        >
                          Tours
                        </NavLink>
                        <ul>
                          <li>
                            <NavLink
                              to="/tourList"
                              className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "active" : ""
                              }
                            >
                              Tours List
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              to="/tourPackages"
                              className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "active" : ""
                              }
                            >
                              Tour Packages
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              to="/tourDetails"
                              className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "active" : ""
                              }
                            >
                              Tour Details
                            </NavLink>
                          </li>
                          {/* <li>
                            <NavLink to="#">Activities</NavLink>
                          </li>
                          <li>
                            <NavLink to="#">Activity Details</NavLink>
                          </li> 
                        </ul>
                      </li> */}
                      <li>
                        <NavLink
                          to="/tourList"
                          className={({ isActive, isPending }) =>
                            isActive ? "active" : isPending ? "pending" : ""
                          }
                        >
                          Tours
                        </NavLink>
                      </li>
                      {/* <li className="dropdown">
                        <NavLink to="#">Destination</NavLink>
                        <ul>
                          <li>
                            <NavLink to="#">All Destinations</NavLink>
                          </li>
                          <li>
                            <NavLink to="#">Destination Single</NavLink>
                          </li>
                          <li>
                            <NavLink to="#">Hotels</NavLink>
                          </li>
                          <li>
                            <NavLink to="#">Hotel Details</NavLink>
                          </li>
                        </ul>
                      </li> */}
                      <li>
                        <NavLink
                          to="/about"
                          className={({ isActive, isPending }) =>
                            isActive ? "active" : isPending ? "pending" : ""
                          }
                        >
                          About
                        </NavLink>
                      </li>
                      {/* <li className="dropdown">
                        <NavLink
                          to="/news"
                          className={({ isActive, isPending }) =>
                            isActive ? "active" : isPending ? "pending" : ""
                          }
                        >
                          News
                        </NavLink>
                        <ul>
                          <li>
                            <NavLink
                              to="/blog"
                              className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "active" : ""
                              }
                            >
                              Our Blog
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              to="/blogDetails"
                              className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "active" : ""
                              }
                            >
                              Blog Details
                            </NavLink>
                          </li>
                        </ul>
                      </li> */}
                      <li>
                        <NavLink
                          to="/contact"
                          className={({ isActive, isPending }) =>
                            isActive ? "active" : isPending ? "pending" : ""
                          }
                        >
                          Contact
                        </NavLink>
                      </li>
                    </ul>
                  </nav>
                  {/* <!-- .main-menu --> */}
                </div>
                {/* <!--Nav Outer End--> */}
              </div>

              {/* <!-- Hidden Nav Toggler --> */}
              <div className="nav-toggler">
                <button className="hidden-bar-opener" onClick={handleNav}>
                  <span className="icon">
                    <img src={menuIcon} alt="" />
                  </span>
                </button>
              </div>

              {/* ----------- */}
              <div className="links-box clearfix">
                <div className="link login">
                  {userInfo ? (
                    <Dropdown menu={{ items }}>
                      <a onClick={(e) => e.preventDefault()}>
                        <Space>
                          {userInfo.data.name}
                          <DownOutlined />
                        </Space>
                      </a>
                    </Dropdown>
                  ) : (
                    <NavLink to="/login">Login / Signup</NavLink>
                  )}
                </div>
                {/* <div className="link lang-box hidden">
                  <div className="lang-btn clearfix">
                    <span className="txt">En</span>
                    <span className="icon far fa-angle-down"></span>
                  </div>
                  <ul className="lang-list">
                    <li>
                      <NavLink to="#">Tur</NavLink>
                    </li>
                    <li>
                      <NavLink to="#">Esp</NavLink>
                    </li>
                    <li>
                      <NavLink to="#">Rus</NavLink>
                    </li>
                    <li>
                      <NavLink to="#">Hin</NavLink>
                    </li>
                  </ul>
                </div> */}
                <div className="link social">
                  <ul className="social-links clearfix">
                    <li>
                      <NavLink to="#" className="facebook">
                        <i className="fab fa-facebook-f"></i>
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="#" className="twitter">
                        <i className="fab fa-twitter"></i>
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="#" className="linkedin">
                        <i className="fab fa-linkedin-in"></i>
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="#" className="youtube">
                        <i className="fab fa-youtube"></i>
                      </NavLink>
                    </li>
                  </ul>
                </div>
                <div className="link call-to">
                  <NavLink to="tel:+8809611677947">
                    <i className="icon fa-solid fa-phone"></i> Call Us
                    <span className="nmbr">+88-09611677947</span>
                  </NavLink>
                </div>
              </div>
              {/* --------- */}
            </div>
          </div>
          {/* safasf */}
        </div>
        {/* <!-- End Header Upper --> */}
      </header>

      {/* // <!-- Main Header End--> */}

      {/* <!--Menu Backdrop--> */}
      {nav && <div className="menu-backdrop" />}

      {/* Hidden Navigation Bar */}
      {
        nav && (
          <div className="hidden-bar visible-sidebar">
            {/* Hidden Bar Wrapper */}
            <div className="hidden-bar-wrapper">
              <div className="hidden-bar-closer" onClick={handleNav}>
                <span className="icon">
                  <svg
                    className="icon-close"
                    role="presentation"
                    viewBox="0 0 16 14"
                  >
                    <path
                      d="M15 0L1 14m14 0L1 0"
                      stroke="currentColor"
                      fill="none"
                      fillRule="evenodd"
                    />
                  </svg>
                </span>
              </div>
              <div className="nav-logo-box">
                {/* logo will be copied here ! */}

                <div className="logo">
                  <NavLink to="/" title="Flyingbird">
                    <img
                      src={flyingBirdLogo}
                      alt="FlyingBird"
                      title="FlyingBird"
                    />
                  </NavLink>
                </div>
              </div>

              {/* .Side-menu */}

              <nav className="side-menu">
                {/* main-menu will be copied here! */}

                <ul className="navigation clearfix">
                  <li className="dropdown current">
                    <NavLink
                      to="/"
                      className={({ isActive, isPending }) =>
                        isActive ? "active" : isPending ? "pending" : ""
                      }
                    >
                      Home
                    </NavLink>
                  </li>

                  <li>
                    <NavLink
                      to="/tourList"
                      className={({ isActive, isPending }) =>
                        isActive ? "active" : isPending ? "pending" : ""
                      }
                    >
                      Tours
                    </NavLink>
                  </li>

                  <li>
                    <NavLink
                      to="/about"
                      className={({ isActive, isPending }) =>
                        isActive ? "active" : isPending ? "pending" : ""
                      }
                    >
                      About
                    </NavLink>
                  </li>

                  <li>
                    <NavLink
                      to="/contact"
                      className={({ isActive, isPending }) =>
                        isActive ? "active" : isPending ? "pending" : ""
                      }
                    >
                      Contact
                    </NavLink>
                  </li>
                  {userInfo && (
                    <>
                      <li>
                        <NavLink to="/dashboard">Dashboard</NavLink>
                      </li>
                    </>
                  )}
                </ul>
              </nav>
              {/* .side-menu */}

              <div className="links-box clearfix">
                <div className="clearfix">
                  <div className="link">
                    {userInfo ? (
                      <>
                        <NavLink
                          to=""
                          className="theme-btn btn-style-one"
                          onClick={logoutHandler}
                        >
                          <span>Logout</span>
                        </NavLink>
                      </>
                    ) : (
                      // <NavLink to="/login">Login / Signup</NavLink>
                      <NavLink to="/login" className="theme-btn btn-style-one">
                        <span>Login / Signup</span>
                      </NavLink>
                    )}
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- Hidden Bar Wrapper */}
          </div>
        )
        /* Hidden Bar */
      }
    </>
  );
};

export default Navbar3;
