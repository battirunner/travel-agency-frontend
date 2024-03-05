import React, { useState } from "react";
import flyingBirdLogo from "../../assets/images/flying-bird-logo3.png";
import menuIcon from "../../assets/images/icons/menu-icon.svg";
import { AiOutlineClose } from "react-icons/ai";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { Image, Menu } from "antd";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [logo, setLogo] = useState(false);
  const handleNav = () => {
    setNav((prevNav) => !prevNav);
    setLogo((prevLogo) => !prevLogo);
  };
  //   const handleLogo = () => {

  //   };
  return (
    <Menu
      mode="horizontal"
      items={[
        {
          label: "",
          key: "logo",
          // icon: {()=>{}}
        },
        {
          label: "Home",
          key: "home",
        },
        {
          label: "Tours",
          key: "tours",
        },
        {
          label: "About",
          key: "about",
        },
        {
          label: "Contact",
          key: "contact",
        },
      ]}
    />
  );
};

export default Navbar;
