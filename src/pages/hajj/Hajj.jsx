import React, { Suspense, useState } from "react";
import Navbar3 from "../../components/navbar/Navbar3";
import WhatsAppChat from "../../components/whatsapp/WhatsappChat";
import ScrollToTop from "../../components/scroll-to-top/ScrollToTop";
import Footer3 from "../../components/footer/Footer3";
import bannerHajjServices from "../../assets/images/resources/featured/HajjBanner.jpg";
import { Dropdown, Space, message } from "antd";
import { DownOutlined } from "@ant-design/icons";
import hajj from "../../assets/images/resources/gallery/hajj-and-umrah.jpg";
import { Link, useParams, useSearchParams } from "react-router-dom";
import { useGetToursQuery } from "../../redux/slices/toursApiSlice";
import Loader from "../../components/loader/Loader";
import axios from "axios";
import useSWR from "swr";

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

const fetcher = async (...args) => {
  const res = await axios.get(...args);
  return res;
};

const Hajj = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  // console.log(searchParams.get("price"));
  const [limit, setLimit] = useState(1);
  const [price, setPrice] = useState(searchParams.get("price"));
  const [page, setPage] = useState(searchParams.get("page"));
  const [duration, setDuration] = useState(searchParams.get("duration"));
  const [tourType, setTourType] = useState(searchParams.get("tourType"));

  const { data, error } = useSWR(
    `${
      import.meta.env.VITE_BASE_URL
    }/tours?page=${page}&price=${price}&tourType=${tourType}&duration=${duration}`,
    fetcher,
    {
      suspense: true,
    }
  );
  if (error) {
    message.error(error);
  }

  // const {
  //   data,
  //   isLoading,
  //   isError,
  //   isUninitialized,
  //   isFetching,
  //   isSuccess,
  //   error,
  //   endpointName,
  // } = useGetToursQuery(
  //   {
  //     page,
  //     tourType,
  //     duration,
  //     price,
  //     limit,
  //   }
  // { refetchOnMountOrArgChanges: true }
  // );
  // console.log(
  //   data,
  //   isLoading,
  //   isError,
  //   isUninitialized,
  //   isFetching,
  //   isSuccess,
  //   error,
  //   endpointName
  // );
  // if (data) {
  //   setTourPackages(data.data.flatMap((a) => a.tourPackages.map((b) => b)));;
  // }
  // console.log(data.data.flatMap((a) => a.tourPackages.map((b) => b)));
  const [tourPackages, setTourPackages] = useState([]);

  // useEffect(() => {
  //   if (data.data) {
  //     setTourPackages(data.data.flatMap((a) => a.tourPackages.map((b) => b)));
  //   }
  // }, [data]);

  const onSortClick = ({ key }) => {
    console.log(`Click on item ${key}`);
  };
  return (
    <div className="page-wrapper">
      <Navbar3 />
      <WhatsAppChat />
      <ScrollToTop />
      {/* banner section */}
      <section className="inner-banner">
        <div
          className="image-layer"
          style={{
            backgroundImage: `url(${bannerHajjServices})`,
          }}
        ></div>
        <div className="auto-container">
          <div className="content-box">
            <h1>Hajj/Umrah</h1>
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

      {/* package sectio starts */}
      <section className="packages-three">
        {/*Serach One*/}
        <div className="search-one"></div>
        <div className="auto-container">
          <div className="packages">
            <div className="filter-row">
              <div className="clearfix">
                <div className="s-info">
                  {/* Showing results of <strong>1 - 9</strong> of
                        <strong> 200</strong> items */}
                </div>
                <div className="filters clearfix+">
                  <div className="sort-by">
                    <div className="drop-list-one">
                      <div className="inner clearfix">
                        <div className="dropdown-outer open">
                          {/* <Dropdown
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
                                </Dropdown> */}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="layout-links clearfix"></div>
                </div>
              </div>
            </div>
            <div className="row clearfix">
              {/*Block*/}
              {data.data.data.map((a) =>
                a.tourPackages.map((b) => (
                  <div
                    key={b.id}
                    className="package-block col-lg-4 col-md-6 col-sm-12"
                  >
                    <div className="inner-box">
                      <div className="image-box">
                        <div className="image">
                          <Link to={`/tourdetails/${b.id}`}>
                            <img src={hajj} alt="Sauid Arabia" />
                          </Link>
                        </div>
                      </div>
                      <div className="lower-box">
                        {/* <div className="p-icon">
                        <img src="assets/images/icons/t-icon-1.png" alt="" />
                        <span className="icon flaticon-adventure" />
                      </div> */}
                        <div className="location">{b.Location.name}</div>
                        <h5>
                          <Link to={`/tourdetails/${b.id}`}>{b.title}</Link>
                        </h5>
                        <div className="info clearfix">
                          <div className="duration">
                            <i className="fa-solid fa-clock" />
                            {b.duration}
                          </div>
                          <div className="persons">
                            <i className="fa-solid fa-user" /> 12
                          </div>
                        </div>
                        <div className="bottom-box clearfix">
                          <div className="rating">
                            <a href="#" className="theme-btn">
                              <i className="fa-solid fa-star" />
                              <strong>{b.rating}</strong>  
                              <span className="count">
                                &ensp;{b.reviews} Reviews
                              </span>
                            </a>
                          </div>
                          <div className="price">
                            Starts from ৳{b.price}
                            <span className="amount"></span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
            <div className="styled-pagination centered">
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
      </section>
      {/* package section ends */}

      <Footer3 />
    </div>
  );
};

export default Hajj;
