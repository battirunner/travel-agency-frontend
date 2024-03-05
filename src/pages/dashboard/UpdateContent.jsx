/*!
  =========================================================
  * Muse Ant Design Dashboard - v1.0.0
  =========================================================
  * Product Page: https://www.creative-tim.com/product/muse-ant-design-dashboard
  * Copyright 2021 Creative Tim (https://www.creative-tim.com)
  * Licensed under MIT (https://github.com/creativetimofficial/muse-ant-design-dashboard/blob/main/LICENSE.md)
  * Coded by Creative Tim
  =========================================================
  * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/
import { useState } from "react";

import {
  Row,
  Col,
  Card,
  Button,
  List,
  Descriptions,
  Avatar,
  Radio,
  Switch,
  Upload,
  message,
  // Button,
  Cascader,
  Checkbox,
  ColorPicker,
  DatePicker,
  Form,
  Input,
  InputNumber,
  // Radio,
  Select,
  Slider,
  // Switch,
  TreeSelect,
  Dropdown,
  Space,
  Segmented,
  // Upload,
} from "antd";

import {
  FacebookOutlined,
  TwitterOutlined,
  InstagramOutlined,
  VerticalAlignTopOutlined,
  PlusOutlined,
  UserOutlined,
  UsergroupAddOutlined,
  PhoneOutlined,
  PhoneFilled,
  CalendarFilled,
  DownOutlined,
  HomeOutlined,
  MailFilled,
  MailOutlined,
  BookOutlined,
} from "@ant-design/icons";
import { BsPassport, BsGenderFemale, BsGenderMale } from "react-icons/bs";
import CountryList from "../../components/dashboard/CountryList";
import countries from "i18n-iso-countries";
import enLocale from "i18n-iso-countries/langs/en.json";

import BgProfile from "../../assets/images/bg-profile.jpg";
import profilavatar from "../../assets/images/face-1.jpg";
import convesionImg from "../../assets/images/face-3.jpg";
import convesionImg2 from "../../assets/images/face-4.jpg";
import convesionImg3 from "../../assets/images/face-5.jpeg";
import convesionImg4 from "../../assets/images/face-6.jpeg";
import convesionImg5 from "../../assets/images/face-2.jpg";
import project1 from "../../assets/images/home-decor-1.jpeg";
import project2 from "../../assets/images/home-decor-2.jpeg";
import project3 from "../../assets/images/home-decor-3.jpeg";

import TourPackage from "./updatecontent/TourPackage";
import HajjPackage from "./updatecontent/HajjPackage";
import Insurance from "./updatecontent/Insurance";
import Visa from "./updatecontent/Visa";

const { RangePicker } = DatePicker;
const { TextArea } = Input;
const normFile = (e) => {
  if (Array.isArray(e)) {
    return e;
  }
  return e?.fileList;
};
countries.registerLocale(enLocale);

// const Countries = require("i18n-iso-countries");
const updateContent = {
  tour: <TourPackage />,
  hajj: <HajjPackage />,
  insurance: <Insurance />,
  visa: <Visa />,
};

function UpdateContent() {
  const [imageURL, setImageURL] = useState(false);
  const [, setLoading] = useState(false);

  const getBase64 = (img, callback) => {
    const reader = new FileReader();
    reader.addEventListener("load", () => callback(reader.result));
    reader.readAsDataURL(img);
  };

  const beforeUpload = (file) => {
    const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";
    if (!isJpgOrPng) {
      message.error("You can only upload JPG/PNG file!");
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
      message.error("Image must smaller than 2MB!");
    }
    return isJpgOrPng && isLt2M;
  };

  const handleChange = (info) => {
    if (info.file.status === "uploading") {
      setLoading(false);
      return;
    }
    if (info.file.status === "done") {
      getBase64(info.file.originFileObj, (imageUrl) => {
        setLoading(false);
        setImageURL(false);
      });
    }
  };

  const pencil = [
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      key={0}
    >
      <path
        d="M13.5858 3.58579C14.3668 2.80474 15.6332 2.80474 16.4142 3.58579C17.1953 4.36683 17.1953 5.63316 16.4142 6.41421L15.6213 7.20711L12.7929 4.37868L13.5858 3.58579Z"
        className="fill-gray-7"
      ></path>
      <path
        d="M11.3787 5.79289L3 14.1716V17H5.82842L14.2071 8.62132L11.3787 5.79289Z"
        className="fill-gray-7"
      ></path>
    </svg>,
  ];

  const uploadButton = (
    <div className="ant-upload-text font-semibold text-dark">
      {<VerticalAlignTopOutlined style={{ width: 20, color: "#000" }} />}
      <div>Upload New Project</div>
    </div>
  );

  const data = [
    {
      title: "Sophie B.",
      avatar: convesionImg,
      description: "Hi! I need more information…",
    },
    {
      title: "Anne Marie",
      avatar: convesionImg2,
      description: "Awesome work, can you…",
    },
    {
      title: "Ivan",
      avatar: convesionImg3,
      description: "About files I can…",
    },
    {
      title: "Peterson",
      avatar: convesionImg4,
      description: "Have a great afternoon…",
    },
    {
      title: "Nick Daniel",
      avatar: convesionImg5,
      description: "Hi! I need more information…",
    },
  ];

  const project = [
    {
      img: project1,
      titlesub: "Project #1",
      title: "Modern",
      disciption:
        "As Uber works through a huge amount of internal management turmoil.",
    },
    {
      img: project2,
      titlesub: "Project #2",
      title: "Scandinavian",
      disciption:
        "Music is something that every person has his or her own specific opinion about.",
    },
    {
      img: project3,
      titlesub: "Project #3",
      title: "Minimalist",
      disciption:
        "Different people have different taste, and various types of music, Zimbali Resort",
    },
  ];

  const [componentDisabled, setComponentDisabled] = useState(true);

  const [activeUpdate, setActiveUpdate] = useState("tour");

  const handleMenuClick = (e) => {
    message.info("Click on menu item.");
    console.log("click", e);
  };

  const countryListOptions = Object.entries(
    countries.getNames("en", { select: "official" })
  ).map((country) => ({
    code: country[0].toLowerCase(),
    name: country[1],
  }));

  console.log("check the country list", countryListOptions);
  const items = countryListOptions.map((country) => ({
    value: country.code,
    key: country.code,
    label: (
      <>
        <span
          className={`fi fi-${country.code}`}
          style={{ width: "24px", marginRight: "10px" }}
        ></span>
        {country.name}
      </>
    ),
  }));
  const menuProps = {
    items,
    onClick: handleMenuClick,
  };

  return (
    <>
      {/* <Row gutter={[24, 0]}>
        <Col span={24} md={16}>
          <div
            className="profile-nav-bg"
            style={{ marginBottom: "10px" }}
            // style={{ backgroundImage: "url(" + BgProfile + ")" }}
          >
            <Row align="">
              <Col span={24} md={12} className="col-info">
                <Avatar.Group>
                  <Avatar
                    size={164}
                    shape="round"
                    src={profilavatar}
                    style={{
                      margin: "22px",
                    }}
                  />
                  <div className="avatar-info">
                    <h4 className="font-semibold m-0">Sarah Jacob</h4>
                    <p className="">sarahjacob@gmail.com</p>
                  </div>
                </Avatar.Group>
              </Col>
            </Row>
          </div>
        </Col>
      </Row> */}
      <Row gutter={[24, 0]} justify="space-between" align={"middle"}>
        <Col span={24} md={16} align={"middle"}>
          <Segmented
            options={[
              {
                label: "Tour Packages",
                value: "tour",
                // disabled: true,
              },
              {
                label: "Hajj Packages",
                value: "hajj",
                // disabled: true,
              },
              {
                label: "Visa",
                value: "visa",
                // disabled: true,
              },
              {
                label: "Insurances",
                value: "insurance",
                // disabled: true,
              },


              // "Yearly",
            ]}
            onChange={(value) => {
              console.log(value); // string
              setActiveUpdate(value);
            }}
            style={{
              color: "#FFF",
              fontSize: "large",
              fontWeight: "bold",
              backgroundColor: "#60a5fa",
              margin: "10px",
              padding: "5px",
            }}
          />
        </Col>
      </Row>
      <Row gutter={[24, 0]}>
        <Col span={24} md={16} className="mb-24">
          {/* <TourPackage /> */}
          {updateContent[activeUpdate]}
        </Col>
      </Row>
    </>
  );
}

export default UpdateContent;
