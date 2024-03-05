import { LockOutlined, MailOutlined } from "@ant-design/icons";
import { Button, Form, Input, message } from "antd";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import {
  useResetPasswordMutation,
  useVerifyTokenQuery,
} from "../../redux/slices/userApiSlice";
import { toast } from "react-toastify";
import Loader from "../../components/loader/Loader";
import useSWR from "swr";
import axios from "axios";

const fetcher = async (...args) => {
  try {
    const res = await axios.get(...args);
    return res.data;
  } catch (error) {
    return error;
  }
};

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

const ResetPassword = () => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();

  const token = searchParams.get("token");
  const userId = searchParams.get("id");

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const { data, error:tokenError, isLoading } = useSWR(
    `${
      import.meta.env.VITE_BASE_URL
    }/user/verify-token?token=${token}&id=${userId}`,
    fetcher
  );
  // const { data, isLoading, error } = useVerifyTokenQuery({ token, userId });

  //   console.log(error);

  const [password, setPassword] = useState("");

  // const [resetPasswordApiCall, { isLoading: loadingResetPassword }] =
  //   useResetPasswordMutation();

  const onFinish = async (values) => {
    setLoading(true);
    const pass = values.password;
    try {
      //   console.log(password);

      // const res = await resetPasswordApiCall({
      //   password,
      //   token,
      //   userId,
      // }).unwrap();
      const res = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/user/reset-password?token=${token}&id=${userId}`,
        {
          password,
          token,
          userId,
        }
      );

      setLoading(false);

      message.success("Password reset successfully!");
      navigate("/login", {replace: true});
    } catch (error) {
      setLoading(false);
      setError(error?.response?.data?.errors);
      message.error(error?.response?.data?.errors);
    }
  };

  return (
    <div className="page-wrapper">
      {isLoading ? (
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
            {" "}
            Reset Password
          </h1>

          <Form
            {...formItemLayout}
            autoComplete="off"
            // form={form}
            name="resetPassword"
            onFinish={onFinish}
            style={{
              maxWidth: 600,
            }}
            scrollToFirstError
          >
            <Form.Item
              name="password"
              label="Password"
              rules={[
                {
                  required: true,
                  message: "Please input your password!",
                },
                {
                  validator: (_, value) =>
                    value &&
                    /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,20}$/.test(
                      value
                    )
                      ? Promise.resolve()
                      : Promise.reject(
                          "Password must have 8 to 20 characters with at least a symbol, upper and lower case letters and a number"
                        ),
                },
              ]}
              hasFeedback
            >
              <Input.Password
                size="large"
                prefix={<LockOutlined />}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Item>

            <Form.Item
              name="confirm"
              label="Confirm Password"
              dependencies={["password"]}
              hasFeedback
              rules={[
                {
                  required: true,
                  message: "Please confirm your password!",
                },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue("password") === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject(
                      new Error(
                        "The new password that you entered does not match!"
                      )
                    );
                  },
                }),
              ]}
            >
              <Input.Password
                size="large"
                prefix={<LockOutlined />}
                onChange={(e) => setPassword(e.target.value)}
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
                Reset Password
              </Button>
            </Form.Item>
          </Form>
        </div>
      )}
    </div>
  );
};

export default ResetPassword;
