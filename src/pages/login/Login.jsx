import {
  FacebookFilled,
  GoogleOutlined,
  LockOutlined,
  MailOutlined,
} from "@ant-design/icons";
import { useGoogleLogin } from "@react-oauth/google";
import { Button, Form, Input, message } from "antd";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import bannerArrow from "../../assets/images/background/banner-arrow.png";
import bgGradient1 from "../../assets/images/background/bg-gradient-1.png";
import yellow1 from "../../assets/images/elements/yellow-1.png";
import manWithBag from "../../assets/images/resources/misc/man-with-bag.jpg";
import Loader from "../../components/loader/Loader";
import { setCredentials } from "../../redux/slices/authSlice";
import { useLoginMutation } from "../../redux/slices/userApiSlice";
import Footer3 from "./../../components/footer/Footer3";
import Navbar3 from "./../../components/navbar/Navbar3";
import ScrollToTop from "./../../components/scroll-to-top/ScrollToTop";
import WhatsAppChat from "./../../components/whatsapp/WhatsappChat";

import {
  getFacebookLoginStatus,
  initFacebookSdk,
  fbLogin,
} from "../../custom-hooks/FacebookSdk";
import axios from "axios";
import useSWR from "swr";

const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 8,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 16,
    },
  },
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};

const Login = () => {
  const [loading, setLoading] = useState(false);
  const [isLoggedInFb, setIsLooggedInFb] = useState(false);
  useEffect(() => {
    // console.log("Started use effect");
    initFacebookSdk().then(() => {
      getFacebookLoginStatus().then((response) => {
        if (response.status === "connected") {
          setIsLooggedInFb(true);
        } else {
          // console.log("No login status for the person");
          // console.log(response);
        }
      });
    });
  }, []);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  // const [loginApiCall, { isLoading }] = useLoginMutation();

  const { userInfo } = useSelector((state) => state.auth);

  useEffect(() => {
    //check if user is logged in
    if (userInfo) {
      navigate("/");
    }
  }, [navigate, userInfo]);

  // usual login
  const onFinish = async (values) => {
    setLoading(true);
    try {
      // console.log(email, password);
      // calling backend
      // const res = await loginApiCall({ email:email, password:password }).unwrap();
      const res = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/user/login`,
        {
          email,
          password,
        },
        { withCredentials: true }
      );

      // console.log(res);

      //set credentials to redux store and localstorage
      setLoading(false);
      dispatch(setCredentials({ ...res.data }));
      navigate("/");
    } catch (error) {
      setLoading(false);
      console.log(error);
      message.error(error?.response?.data?.errors);
    }
  };

  //google login
  const handleGoogleLoginSuccess = async (tokenResponse) => {
    setLoading(true);
    // console.log(tokenResponse);
    const googleAccessToken = tokenResponse.access_token;

    try {
      // calling backend
      // const res = await loginApiCall({ googleAccessToken }).unwrap();

      const res = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/user/login`,
        {
          googleAccessToken,
        },
        { withCredentials: true }
      );

      // console.log(res);

      //set credentials to redux store and localstorage
      setLoading(false);
      dispatch(setCredentials({ ...res.data }));

      navigate("/");
    } catch (error) {
      setLoading(false);
      message.error(error?.response?.data?.errors);
    }
  };

  const handleGoogleLoginFailure = async (tokenResponse) => {
    console.log("Failed");
  };

  const googleLogin = useGoogleLogin({
    onSuccess: handleGoogleLoginSuccess,
    onError: handleGoogleLoginFailure,
  });

  const setFbCredentials = async (fbAccessToken, fbUserId) => {
    setLoading(true);
    try {
      // calling backend
      // const res = await loginApiCall({ fbAccessToken, fbUserId }).unwrap();

      const res = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/user/login`,
        {
          fbAccessToken,
          fbUserId,
        },
        { withCredentials: true }
      );

      // console.log(res);

      //set credentials to redux store and localstorage
      dispatch(setCredentials({ ...res.data }));
      setLoading(false);
      navigate("/");
    } catch (error) {
      setLoading(false);
      message.error(error?.response?.data?.errors);
    }
  };

  // FB Login
  const handleFacebookLogin = async () => {
    // console.log("reached log in button");
    fbLogin().then((response) => {
      // console.log(response);
      if (response.status === "connected") {
        // console.log("Person is connected");
        const fbAccessToken = response.authResponse.accessToken;
        const fbUserId = response.authResponse.userID;
        // calling backend
        //set credentials to redux store and localstorage
        setFbCredentials(fbAccessToken, fbUserId);
      } else {
        console.log("Not connected");
      }
    });
  };

  return (
    <div className="page-wrapper">
      <WhatsAppChat />
      <ScrollToTop />
      <Navbar3 />
      <div className="banner-section">
        <div className="banner-container">
          <div
            className="banner-arrow wow slideInLeft"
            data-wow-delay="0ms"
            data-wow-duration="1500ms"
          >
            <img src={bannerArrow} alt="" />
          </div>
          <div className="auto-container">
            <div className="row clearfix">
              <div className="left-col col-lg-6 col-md-12">
                <div className="inner">
                  <div className="clearfix">
                    <div className="content">
                      <div className="bg-image">
                        <img src={bgGradient1} alt="" />
                      </div>
                      {/* login form starts */}
                      <h1 className="text-center">
                        <i className="d-icon">
                          <img src={yellow1} alt="" title="" />
                        </i>
                        Login
                      </h1>
                      <Form
                        {...formItemLayout}
                        autoComplete="off"
                        // form={form}
                        name="login"
                        onFinish={onFinish}
                        initialValues={{
                          prefix: "+88",
                        }}
                        style={{
                          maxWidth: 600,
                        }}
                        scrollToFirstError
                      >
                        <Form.Item
                          name="email"
                          label="E-mail"
                          rules={[
                            {
                              type: "email",
                              message: "The input is not valid E-mail!",
                            },
                            {
                              required: true,
                              message: "Please input your E-mail!",
                            },
                          ]}
                        >
                          <Input
                            size="large"
                            prefix={<MailOutlined />}
                            placeholder="Type your email"
                            onChange={(e) => setEmail(e.target.value)}
                          />
                        </Form.Item>

                        <Form.Item
                          name="password"
                          label="Password"
                          rules={[
                            {
                              required: true,
                              message: "Please input your password!",
                            },
                          ]}
                        >
                          <Input.Password
                            size="large"
                            prefix={<LockOutlined />}
                            onChange={(e) => setPassword(e.target.value)}
                          />
                        </Form.Item>
                        <div
                          className="d-flex justify-content-center align-items-center "
                          style={{ marginBottom: "10px", marginLeft: "150px" }}
                        >
                          <Link to="/forgot-password">Forgot Password?</Link>
                        </div>
                        <Form.Item {...tailFormItemLayout}>
                          <Button
                            type="button"
                            htmlType="submit"
                            // block
                            // size="large"
                            className="theme-btn btn-style-one"
                            style={{ width: "100%" }}
                          >
                            Login
                          </Button>
                        </Form.Item>
                      </Form>
                      {/* login form ends */}
                      <div
                        style={{ marginLeft: "250px", marginBottom: "15px" }}
                      >
                        or &nbsp;
                        <Button
                          icon={<GoogleOutlined />}
                          className=""
                          style={{ paddingLeft: "20px", paddingRight: "20px" }}
                          onClick={googleLogin}
                        >
                          Sign in with Google
                        </Button>
                        {/* <GoogleLogin 
                        onSuccess={(credentialResponse) => {
                          console.log(credentialResponse);
                        }}
                        onError={() => {
                          console.log("Login Failed");
                        }}
                      /> */}
                      </div>

                      <div
                        id="fb-root"
                        style={{ marginLeft: "250px", marginBottom: "15px" }}
                      >
                        or &nbsp;
                        <Button
                          onClick={handleFacebookLogin}
                          icon={<FacebookFilled />}
                          disabled={isLoggedInFb === true}
                        >
                          Sign in with Facebook
                        </Button>
                      </div>

                      {/* loader  */}
                      {loading && <Loader />}

                      <p className="text-center signup-link">
                        Don't have an account? <Link to="/signup">Signup</Link>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="right-col col-lg-6 col-md-12">
                <div
                  className="inner wow fadeInRight"
                  data-wow-delay="0ms"
                  data-wow-duration="1500ms"
                >
                  <div
                    className="image-layer"
                    style={{ backgroundImage: `url(${manWithBag})` }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer3 />
    </div>
  );
};

export default Login;
