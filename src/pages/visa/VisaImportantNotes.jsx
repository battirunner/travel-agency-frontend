import React from "react";

const VisaImportantNotes = ({ visaImportantNotes }) => {
  console.log("check important notes", visaImportantNotes);
  return (
    <>
      <div className="i-block clearfix">
        {/* <div className="i-title">{visaData.category_name}</div> */}
        {/* {Array.isArray(item)&& item.map((it) =>(<div className="i-content">{it}</div>))} */}
        {/* <div className="i-content">{item}</div> */}
        {/* <div className="i-title">{item.item}</div> */}
        <div className="i-content"></div>
        <div className="i-content">
          <ul className="styled-list-two">
            {Array.isArray(visaImportantNotes) &&
              visaImportantNotes.map((note, k) => <li key={k}>{note}</li>)}
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
    </>
  );
};

export default VisaImportantNotes;
