import React, { useState } from "react";
import { Card } from "antd";
import { Link } from "react-router-dom";

import bangkok from "../../../assets/images/resources/destinations/tours/bangkok.jpg";
import varenna from "../../../assets/images/resources/destinations/tours/varenna.jpg";
import egypt from "../../../assets/images/resources/destinations/tours/egypt.jpg";
import morocco from "../../../assets/images/resources/destinations/tours/morocco.jpg";
import rome from "../../../assets/images/resources/destinations/tours/rome.jpg";
import maldives from "../../../assets/images/resources/destinations/tours/maldives.jpg";

const TourPackage = () => {
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
  return (
    <>
      <Card
        bordered={false}
        className="header-solid"
        title={<h6 className="font-semibold m-0">Insurance</h6>}
      >
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
                </div>
                <div className="content-box">
                  <div className="loc-rat clearfix">
                    <div className="location">{tourPackage.location}</div>
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
                  <p className="travilo-text">{tourPackage.description}</p>
                  <div className="bottom-box clearfix">
                    <div className="duration">
                      <i className="fa-solid fa-clock" /> {tourPackage.duration}
                    </div>
                    <div className="price">
                      Start from{" "}
                      <span className="amount">${tourPackage.price}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </>
  );
};

export default TourPackage;
