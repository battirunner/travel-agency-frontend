import React from "react";

const VisaRequiredItem = ({ visaData }) => {
  return (
    <>
      {visaData.map((item, j) => (
        <div key={j} className="i-block clearfix">
          <div className="i-title">{item.category_name}</div>
          {/* {Array.isArray(item)&& item.map((it) =>(<div className="i-content">{it}</div>))} */}
          {/* <div className="i-content">{item}</div> */}
          {/* <div className="i-title">{item.item}</div> */}
          <div className="i-content"></div>
          <div className="i-content">
            <ul className="styled-list-two">
              {Array.isArray(item.category_items) &&
                item.category_items.map((category, k) => (
                  <li key={k}>{category}</li>
                ))}
              {/* {item.category_items.map((docs)=>(
                                <><li >{docs}</li></>
                                ))
                                } */}
              {/* {item.category_items.map((c) => (
                                  <li>{c}</li>
                                ))} */}
              {/* <li>
                            Support: 24/7 customer support, ensuring you have a
                            smooth and enjoyable travel experience.
                          </li> */}
            </ul>
          </div>
        </div>
      ))}
    </>
  );
};

export default VisaRequiredItem;
