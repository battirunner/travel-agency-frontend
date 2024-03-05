/*!
  =========================================================
  * Muse Ant Design Dashboard - v1.0.0.
  =========================================================
  * Product Page: https://www.creative-tim.com/product/muse-ant-design-dashboard
  * Copyright 2021 Creative Tim (https://www.creative-tim.com)
  * Licensed under MIT (https://github.com/creativetimofficial/muse-ant-design-dashboard/blob/main/LICENSE.md)
  * Coded by Creative Tim
  =========================================================
  * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/
import { useEffect, useState } from "react";

import {
  Avatar,
  Button,
  Card,
  Col,
  DatePicker,
  Form,
  Input,
  Row,
  // Radio,
  Select,
  Upload,
  message,
} from "antd";

import {
  CalendarFilled,
  HomeOutlined,
  MailOutlined,
  PhoneOutlined,
  PlusOutlined,
  UserOutlined,
  VerticalAlignTopOutlined,
} from "@ant-design/icons";
import countries from "i18n-iso-countries";
import enLocale from "i18n-iso-countries/langs/en.json";
import {
  BsGenderFemale,
  BsGenderMale,
  BsGenderNeuter,
  BsPassport,
} from "react-icons/bs";
import CountryList from "../../components/dashboard/CountryList";

import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import { toast } from "react-toastify";
import profilavatar from "../../assets/images/face-1.jpg";
import convesionImg5 from "../../assets/images/face-2.jpg";
import convesionImg from "../../assets/images/face-3.jpg";
import convesionImg2 from "../../assets/images/face-4.jpg";
import convesionImg3 from "../../assets/images/face-5.jpeg";
import convesionImg4 from "../../assets/images/face-6.jpeg";
import project1 from "../../assets/images/home-decor-1.jpeg";
import project2 from "../../assets/images/home-decor-2.jpeg";
import project3 from "../../assets/images/home-decor-3.jpeg";
import Loader from "../../components/loader/Loader";
import {
  useGetUserQuery,
  useUpdateUserMutation,
} from "../../redux/slices/userApiSlice";
import { FaAddressBook } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import UploadImage from "../../components/dashboard/UploadImage";
import { setCredentials } from "../../redux/slices/authSlice";
import axios from "axios";
import useSWR from "swr";

dayjs.extend(customParseFormat);
const dateFormat = "YYYY/MM/DD";

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

const fetcher = async (...args) => {
  try {
    const res = await axios.get(...args, { withCredentials: true });
    return res.data;
  } catch (error) {
    return error;
  }
};

function ProfileNew() {
  const { userInfo } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [editUserData, setEditUserData] = useState({});
  // const {
  //   data: userData,
  //   isFetching,
  //   refetch,
  //   isLoading,
  //   error,
  // } = useGetUserQuery();

  const {
    data: userData,
    isLoading,
    error,
    mutate,
  } = useSWR(`${import.meta.env.VITE_BASE_URL}/user/profile`, fetcher);

  // const [updateProfileApiCall, { isLoading: loadingUpdateProfile }] =
  //   useUpdateUserMutation();

  // if (userData) {
  //   setEditUserData(userData.data);
  // }
  useEffect(() => {
    if (userData) {
      setEditUserData(userData.data);
    }
  }, [userData]);

  // console.log(editUserData);

  const [imageURL, setImageURL] = useState(false);
  // const [, setLoading] = useState(false);

  const getBase64 = (img, callback) => {
    const reader = new FileReader();
    reader.addEventListener("load", () => callback(reader.result));
    reader.readAsDataURL(img);
  };

  const beforeUpload = (file) => {
    const isJpgOrPng =
      file.type === "image/jpeg" ||
      file.type === "image/png" ||
      file.type === "image/jpg";
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

  // const data = [
  //   {
  //     title: "Sophie B.",
  //     avatar: convesionImg,
  //     description: "Hi! I need more information…",
  //   },
  //   {
  //     title: "Anne Marie",
  //     avatar: convesionImg2,
  //     description: "Awesome work, can you…",
  //   },
  //   {
  //     title: "Ivan",
  //     avatar: convesionImg3,
  //     description: "About files I can…",
  //   },
  //   {
  //     title: "Peterson",
  //     avatar: convesionImg4,
  //     description: "Have a great afternoon…",
  //   },
  //   {
  //     title: "Nick Daniel",
  //     avatar: convesionImg5,
  //     description: "Hi! I need more information…",
  //   },
  // ];

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

  // console.log("check the country list", countryListOptions);
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

  const [form] = Form.useForm();

  const onFinish = async (values) => {
    // e.preventDefault();
    setLoading(true);
    // console.log("before update", editUserData);
    try {
      // const res = await updateProfileApiCall({
      //   ...editUserData,
      // }).unwrap();
      const res = await axios.put(
        `${import.meta.env.VITE_BASE_URL}/user/profile`,
        editUserData,
        {
          withCredentials: true,
        }
      );
      setLoading(false);
      // console.log("after update", res);
      const data = {
        data: {
          id: res.data.data.id,
          name: res.data.data.name,
          email: res.data.data.email,
        },
      };
      // console.log(data);
      dispatch(setCredentials(data));
      mutate();
      // console.log("userInfo", userInfo);
      message.success("Profile updated successfully!");
      // refetch();
      // navigate("/dashboard/profilenew", {replace:true});
    } catch (err) {
      setLoading(false);
      message.error(error?.response?.data?.errors);
    }
  };

  // const onFinishClick = async (e) => {
  //   e.preventDefault();
  //   setLoading(true);
  //   console.log("before update", editUserData);
  //   try {
  //     // const res = await updateProfileApiCall({
  //     //   ...editUserData,
  //     // }).unwrap();
  //     const res = await axios.put(
  //       `${import.meta.env.VITE_BASE_URL}/user/profile`,
  //       editUserData,
  //       {
  //         withCredentials: true,
  //       }
  //     );
  //     setLoading(false);
  //     console.log("after update", res);
  //     const data = {
  //       data: { id: res.data.data.id, name: res.data.data.name, email: res.data.data.email },
  //     };

  //     dispatch(setCredentials(data));
  //     mutate();
  //     console.log("userInfo", userInfo);
  //     message.success("Profile updated successfully!");
  //     // refetch();
  //     // navigate("/dashboard/profilenew", {replace:true});
  //   } catch (err) {
  //     setLoading(false);
  //     message.error(error?.response?.data?.errors);
  //   }
  // };

  const onChangeCountry = (value) => {
    setEditUserData({ ...editUserData, country: value });
  };
  return (
    <>
      {isLoading ? (
        <Loader />
      ) : error ? (
        message.error(`${error?.data?.message}`)
      ) : (
        // <Message variant="danger">
        //   {error?.data?.message || error.error}
        // </Message>
        <>
          <Row gutter={[24, 0]}>
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
                        <h4 className="font-semibold m-0">
                          {userData.data.name}
                        </h4>
                        <p className="">{userData.data.email}</p>
                      </div>
                    </Avatar.Group>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
          {/* <div
        className="profile-nav-bg"
        style={{ marginBottom: "10px" }}
        // style={{ backgroundImage: "url(" + BgProfile + ")" }}
      >
        <Row align="">
          <Col span={12} md={6} className="col-info">
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
      </div> */}
          <Row gutter={[24, 0]}>
            <Col span={24} md={16} className="mb-24">
              <Card
                bordered={false}
                className="header-solid h-full"
                title={
                  <h6 className="font-semibold m-0">Profile Information</h6>
                }
              >
                <Form
                  form={form}
                  labelCol={{
                    span: 16,
                  }}
                  wrapperCol={{
                    span: 20,
                  }}
                  fields={[
                    { name: ["name"], value: editUserData.name },
                    { name: ["gender"], value: editUserData.gender },
                    { name: ["phone"], value: editUserData.phone },
                    {
                      name: ["dob"],
                      value: editUserData.dob
                        ? dayjs(editUserData.dob, "YYYY-MM-DD")
                        : "",
                    },
                    { name: ["address"], value: editUserData.address },
                    { name: ["postal_code"], value: editUserData.postal_code },
                    { name: ["district"], value: editUserData.district },
                    { name: ["country"], value: editUserData.country },
                    {
                      name: ["passport_img_url"],
                      value: editUserData.passport_img_url,
                    },
                    { name: ["passport_no"], value: editUserData.passport_no },
                    {
                      name: ["profile_pic_url"],
                      value: editUserData.profile_pic_url,
                    },
                    {
                      name: ["visa_img_url"],
                      value: editUserData.visa_img_url,
                    },
                    {
                      name: ["passport_exp_date"],
                      value: editUserData.passport_exp_date
                        ? dayjs(editUserData.passport_exp_date, "YYYY-MM-DD")
                        : "",
                    },
                  ]}
                  layout="vertical"
                  onFinish={onFinish}
                  name="updateProfile"
                  scrollToFirstError
                >
                  <Row>
                    <Col span={12} style={{ padding: "20px" }}>
                      <Form.Item
                        label="Full Name"
                        name="name"
                        rules={[
                          {
                            required: true,
                            message: "Please input your Name!",
                          },
                        ]}
                        hasFeedback
                      >
                        <Input
                          size="large"
                          prefix={<UserOutlined />}
                          onChange={(e) =>
                            setEditUserData({
                              ...editUserData,
                              name: e.target.value,
                            })
                          }
                        />
                      </Form.Item>
                      <Row>
                        <Col span={12}>
                          <Form.Item
                            name="gender"
                            label="Gender"
                            rules={[
                              {
                                required: true,
                                message: "Please select your gender!",
                              },
                            ]}
                            hasFeedback
                          >
                            <Select
                              size="large"
                              onChange={(value) => {
                                setEditUserData({
                                  ...editUserData,
                                  gender: value,
                                });
                              }}
                            >
                              <Select.Option value="MALE">
                                <BsGenderMale
                                  style={{ margin: "0px 8px 2px 2px" }}
                                />
                                MALE
                              </Select.Option>
                              <Select.Option value="FEMALE">
                                <BsGenderFemale
                                  style={{ margin: "0px 8px 2px 2px" }}
                                />
                                FEMALE
                              </Select.Option>
                              <Select.Option value="OTHERS">
                                <BsGenderNeuter
                                  style={{ margin: "0px 8px 2px 2px" }}
                                />
                                OTHERS
                              </Select.Option>
                            </Select>
                          </Form.Item>
                        </Col>

                        <Col span={12}>
                          <Form.Item name="dob" label="Date of Birth">
                            <DatePicker
                              size="large"
                              prefix={<CalendarFilled />}
                              format={dateFormat}
                              onChange={(date, datestring) => {
                                setEditUserData({
                                  ...editUserData,
                                  dob: datestring,
                                });
                              }}
                            />
                          </Form.Item>
                        </Col>
                      </Row>

                      <Form.Item
                        name="phone"
                        label="Phone"
                        rules={[
                          {
                            required: true,
                            message: "Please input your phone number!",
                          },
                          {
                            validator: (_, value) =>
                              value &&
                              /(^(\+88|0088)?(01){1}[3456789]{1}(\d){8})$/.test(
                                value
                              )
                                ? Promise.resolve()
                                : Promise.reject("Use valid phone number"),
                          },
                          // {
                          //   min: 11,
                          //   message: "Phone number must be 11 digits",
                          // },
                        ]}
                        hasFeedback
                      >
                        <Input
                          size="large"
                          prefix={<PhoneOutlined />}
                          onChange={(e) =>
                            setEditUserData({
                              ...editUserData,
                              phone: e.target.value,
                            })
                          }
                        />
                      </Form.Item>

                      <Row>
                        <Col span={12}>
                          <Form.Item
                            name="passport"
                            label="Passport Copy (max 2MB)"
                            valuePropName="fileList"
                            getValueFromEvent={normFile}
                          >
                            <UploadImage />
                          </Form.Item>
                        </Col>
                        <Col span={12}>
                          <Form.Item
                            label="Visa Copy(max 2MB)"
                            valuePropName="fileList"
                            getValueFromEvent={normFile}
                          >
                            <Upload
                              action=""
                              listType="picture-card"
                              // style={{ background: "red" }}
                              colorBgMask={"#ff4d4f"}
                            >
                              <button
                                style={{
                                  border: 0,
                                  background: "none",
                                }}
                                type="button"
                              >
                                <PlusOutlined />
                                <div
                                  style={{
                                    marginTop: 8,
                                  }}
                                >
                                  Upload
                                </div>
                              </button>
                            </Upload>
                          </Form.Item>
                        </Col>
                      </Row>
                    </Col>

                    <Col span={12} style={{ paddingTop: "20px" }}>
                      <Row>
                        <Col span={12}>
                          <Form.Item name="address" label="Address">
                            <Input
                              size="large"
                              prefix={<FaAddressBook />}
                              onChange={(e) =>
                                setEditUserData({
                                  ...editUserData,
                                  address: e.target.value,
                                })
                              }
                            />
                          </Form.Item>
                        </Col>
                        <Col span={12}>
                          <Form.Item name="postal_code" label="Postal Code">
                            <Input
                              size="large"
                              prefix={<MailOutlined />}
                              onChange={(e) =>
                                setEditUserData({
                                  ...editUserData,
                                  postal_code: e.target.value,
                                })
                              }
                            />
                          </Form.Item>
                        </Col>
                      </Row>
                      <Row>
                        <Col span={12}>
                          <Form.Item name="district" label="District">
                            <Input
                              size="large"
                              // prefix={<MailOutlined />}
                              onChange={(e) =>
                                setEditUserData({
                                  ...editUserData,
                                  district: e.target.value,
                                })
                              }
                            />
                          </Form.Item>
                        </Col>
                        <Col span={12}>
                          <Form.Item name="country" label="Country">
                            <CountryList
                              country={editUserData.country}
                              onChangeCountry={onChangeCountry}
                            />
                          </Form.Item>
                        </Col>
                      </Row>
                      <Form.Item name="passport_no" label="Passport Number">
                        <Input
                          size="large"
                          prefix={<BsPassport />}
                          onChange={(e) => {
                            setEditUserData({
                              ...editUserData,
                              passport_no: e.target.value,
                            });
                          }}
                        />
                      </Form.Item>
                      <Form.Item
                        name="passport_exp_date"
                        label="Passport Expiry Date"
                      >
                        <DatePicker
                          size="large"
                          prefix={<CalendarFilled />}
                          format={dateFormat}
                          onChange={(date, datestring) => {
                            setEditUserData({
                              ...editUserData,
                              passport_exp_date: datestring,
                            });
                          }}
                        />
                      </Form.Item>

                      {/* </Form.Item> */}
                      {/* <Form.Item
                    label="Visa Copy(max 2MB)"
                    valuePropName="fileList"
                    getValueFromEvent={normFile}
                  >
                    <Upload action="/upload.do" listType="picture-card">
                      <button
                        style={{
                          border: 0,
                          background: "none",
                        }}
                        type="button"
                      >
                        <PlusOutlined />
                        <div
                          style={{
                            marginTop: 8,
                          }}
                        >
                          Visa
                        </div>
                      </button>
                    </Upload>
                  </Form.Item> */}
                    </Col>
                  </Row>
                  <Row>
                    <Col span={4}>
                      <Form.Item>
                        <Button
                          block
                          type="primary"
                          htmlType="submit"
                          style={{ fontSize: "large", margin: "10px" }}
                          // onClick={onFinishClick}
                        >
                          Save
                        </Button>
                      </Form.Item>
                    </Col>
                  </Row>
                </Form>
              </Card>
            </Col>
          </Row>
        </>
      )}
    </>
  );
}

export default ProfileNew;
