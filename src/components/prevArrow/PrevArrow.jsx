import React from 'react'

const PrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "flex",
          position: "absolute",
          // right: "66px",
          // top: "-100px",
          cursor: "pointer",
          border: "1px solid rgba(0, 0, 0, 0.2)",
          borderRadius: "50%",
          width: "44px",
          height: "44px",
          textAlign: "center",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "var(--primary-color)",
          color: "var(--primary-color)",
          zIndex: "999"
        }}
        onClick={onClick}
      >
        <i className="fa-solid fa-angle-left" />
      </div>
    );
}

export default PrevArrow