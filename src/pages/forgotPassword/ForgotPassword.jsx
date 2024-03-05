import { useState } from "react";
import Loader from "../../components/loader/Loader";
import { Button, Form, Input, message } from "antd";
import { MailOutlined } from "@ant-design/icons";
import { Link, useNavigate } from "react-router-dom";
import { useForgotPasswordMutation } from "../../redux/slices/userApiSlice";
import { toast } from "react-toastify";
import axios from "axios";

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

const ForgotPassword = () => {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");

  const navigate = useNavigate();
  // const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  // const [forgotPasswordApiCall, { isLoading }] = useForgotPasswordMutation();
  const onFinish = async (values) => {
    // console.log(email);
    setLoading(true);

    try {
      //   console.log(password);

      // const res = await forgotPasswordApiCall({
      //   email,
      // }).unwrap();
      // toast.success(
      //   "Password reset email sent successfully! Check your email for further instructions!"
      // );
      const res = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/user/forgot-password`,
        { email }
      );
      setLoading(false);
      message.success("Password reset email sent successfully! Check your email for further instructions!");
      navigate("/login");
    } catch (error) {
      setLoading(false);
      // console.log(error);
      setError(error?.response?.data?.errors);
      message.error(error?.response?.data?.errors);
      navigate("/login");
    }
  };
  return (
    <div className="page-wrapper">
      {loading ? (
        <Loader />
      ) : error ? (
        <div className="d-flex flex-column justify-content-center align-items-center">
          <h1 className="text-center text-3xl text-gray-500 mb-3 mt-25">
            {error}
          </h1>
        </div>
      ) : (
        <div className="d-flex flex-column justify-content-center align-items-center">
          <h1 className="text-center text-3xl text-gray-500 mb-3 mt-25">
            Forgot Password
          </h1>

          <Form
            {...formItemLayout}
            autoComplete="off"
            // form={form}
            name="forgotPassword"
            onFinish={onFinish}
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

            <Form.Item {...tailFormItemLayout}>
              <Button
                type="button"
                htmlType="submit"
                block
                size="large"
                className="theme-btn btn-style-one"
              >
                Send Email
              </Button>
            </Form.Item>

            <p className="text-center">
              Remembered your password? <Link to="/login">Login</Link>
            </p>
          </Form>
        </div>
      )}
    </div>
  );
};

export default ForgotPassword;
