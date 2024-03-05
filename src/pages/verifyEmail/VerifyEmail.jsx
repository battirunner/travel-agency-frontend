import { Button, Form, message } from "antd";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import Loader from "../../components/loader/Loader";

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

const VerifyEmail = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const token = searchParams.get("token");
  const userId = searchParams.get("userId");

  //   console.log(token, userId);

  const [otp, setOtp] = useState("");
    const [error, setError] = useState(false);
  // const [verifyEmailApiCall, { isLoading }, error] = useVerifyEmailMutation();

  // async  ()=> {
  //   try {
  //     //   console.log(password);

  //     const res = await verifyEmailApiCall({
  //       token,
  //       userId,
  //     }).unwrap();
  //     toast.success("Email verified successfully!");
  //     navigate("/login");
  //   } catch (error) {
  //     console.log(error);
  //     toast.error(error.data.errors);
  //   }
  // }

  //   verify();
  useEffect(() => {
    // async () => {
    //     console.log("huda");
    //   try {
    //     const res = await verifyEmailApiCall({
    //       token,
    //       userId,
    //     }).unwrap();
    //     toast.success("Email Verified! Please Login!");
    //     navigate("/login", { replace: true });
    //   } catch (error) {
    //     // console.log(error);
    //     toast.error(error.data.errors);
    //     navigate("/login", { replace: true });
    //   }
    // };
    // verify();
  }, []);

  const onFinish = async (values) => {
    setLoading(true);

    try {
      // const res = await verifyEmailApiCall({
      //   token,userId
      // }).unwrap();

      const res = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/user/verify-email`,
        {
          token,
          userId,
        }
      );
      setLoading(false);
      message.success("Email Verified! Please Login!");
      navigate("/login", { replace: true });
    } catch (error) {
      setLoading(false);
      console.log(error);
      message.error(error?.response?.data?.errors);
    }
  };
  return (
    <div className="page-wrapper">
      {loading ? (
        <Loader />
      ) : error ? (
        <div className="d-flex flex-column justify-content-center align-items-center">
          <h1 className="text-center text-3xl text-gray-500 mb-3 mt-25">
            {error.data.errors}
          </h1>
        </div>
      ) : (
        <div className="d-flex flex-column justify-content-center align-items-center">
          <h1 className="text-center text-3xl text-gray-500 mb-3 mt-25">
            {" "}
            Verify Email
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
            {/* <Form.Item
              name="otp"
              label="OTP"
              rules={[
                {
                  type: "text",
                  message: "The input is not valid otp!",
                },
                {
                  required: true,
                  message: "OTP must not be empty!",
                },

                {
                  validator: (_, value) =>
                    value && /^[0-9]{1,6}$/.test(value)
                      ? Promise.resolve()
                      : Promise.reject("Please Input Valid OTP!"),
                },
              ]}
              hasFeedback
            >
              <Input
                size="large"
                placeholder=""
                onChange={(e) => setOtp(e.target.value)}
              />
            </Form.Item> */}

            <Form.Item {...tailFormItemLayout}>
              <Button
                type="button"
                htmlType="submit"
                // block
                size="large"
                className="theme-btn btn-style-one"
              >
                Verify Email
              </Button>
            </Form.Item>
          </Form>
        </div>
      )}
    </div>
  );
};

export default VerifyEmail;
