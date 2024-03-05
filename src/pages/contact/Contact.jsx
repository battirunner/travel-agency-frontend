import { Button, Form, Input } from "antd";
import { useState } from "react";
import banner4 from "../../assets/images/resources/featured/banner-4.jpg";
import Banner from "../../components/banner/Banner";
import Navbar3 from "../../components/navbar/Navbar3";
import Footer3 from "./../../components/footer/Footer3";
import ScrollToTop from "./../../components/scroll-to-top/ScrollToTop";
import WhatsAppChat from "./../../components/whatsapp/WhatsappChat";
import { useSubmitContactInfoMutation } from "../../redux/slices/contactFormApiSlice";
import Loader from "../../components/loader/Loader";
import { toast } from "react-toastify";

const Contact = () => {
  // const { initWOW } = useWOW();
  // useEffect(() => {
  //   initWOW();
  // }, []);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const [submitContactInfoApiCall, { isLoading }] =
  useSubmitContactInfoMutation();

  const onFinish = async (values) => {
    console.log(values);
    try {
      const res = await submitContactInfoApiCall({
        name,
        email,
        phone,
        subject,
        message,
      }).unwrap();
      toast.success(res.data);
    } catch (error) {
      console.log(error);
      toast.error(error.data.errors);
    }
  };
  const onFinishFailed = (error) => {
    console.log(error);
  };

  return (
    <div className="page-wrapper">
      {isLoading && <Loader />}
      <Navbar3 />
      <WhatsAppChat />
      <ScrollToTop />
      {/* Banner Section */}
      <Banner bannerImage={banner4} heading="Contact" />
      {/*End Banner Section */}

      {/*Contact Section*/}
      <section className="contact-section">
        <div className="auto-container">
          <div className="row clearfix">
            {/*Info Col*/}
            <div className="info-col col-lg-4 col-md-12 col-sm-12">
              <div
                className="inner wow fadeInLeft"
                data-wow-duration="1500ms"
                data-wow-delay="0ms"
              >
                <div className="info">
                  <ul>
                    <li className="location">
                      <i className="icon fa fa-map-marker-alt" />
                      <h5>Location</h5>
                      <div className="travilo-text">
                        20, Love Street, Muscat, Oman
                      </div>
                    </li>
                    <li className="phone">
                      <i className="icon fa-solid fa-phone" />
                      <h5>Phone</h5>
                      <div className="travilo-text">
                        <a href="tel:+96899999000">+968 99999000</a>
                      </div>
                    </li>
                    <li className="email">
                      <i className="icon fa fa-envelope" />
                      <h5>Email</h5>
                      <div className="travilo-text">
                        <a href="mailto:hello@travilo.com">hello@travilo.com</a>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/*Form Col*/}
            <div className="form-col col-lg-8 col-md-12 col-sm-12">
              <div
                className="inner wow fadeInRight"
                data-wow-duration="1500ms"
                data-wow-delay="0ms"
              >
                <h3>Send Us A Message</h3>
                <div className="form-box site-form">
                  <Form
                    name="contact-form"
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                    scrollToFirstError
                  >
                    <div className="row clearfix">
                      <div className="form-group col-xl-6 col-lg-6 col-md-12 col-sm-12">
                        <div className="field-inner">
                          <Form.Item
                            name="name"
                            // label="Full Name"
                            rules={[
                              {
                                required: true,
                                message: "Please Enter Your Name",
                              },
                              {
                                whitespace: true,
                              },
                              {
                                min: 4,
                                message: "Full name must be 4 characters",
                              },
                            ]}
                            hasFeedback
                          >
                            <Input
                              size="large"
                              placeholder="Your name"
                              onChange={(e) => setName(e.target.value)}
                            />
                          </Form.Item>
                        </div>
                      </div>

                      <div className="form-group col-xl-6 col-lg-6 col-md-12 col-sm-12">
                        <div className="field-inner">
                          <Form.Item
                            name="email"
                            // label="E-mail"
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
                            hasFeedback
                          >
                            <Input
                              size="large"
                              placeholder="Your email"
                              onChange={(e) => setEmail(e.target.value)}
                            />
                          </Form.Item>
                        </div>
                      </div>

                      <div className="form-group col-xl-6 col-lg-6 col-md-12 col-sm-12">
                        <div className="field-inner">
                          <Form.Item
                            name="phone"
                            // label="Phone Number"
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
                              placeholder="Your phone number"
                              // addonBefore={prefixSelector}
                              style={{
                                width: "100%",
                              }}
                              onChange={(e) => setPhone(e.target.value)}
                            />
                          </Form.Item>
                        </div>
                      </div>

                      <div className="form-group col-xl-6 col-lg-6 col-md-12 col-sm-12">
                        <div className="field-inner">
                          <Form.Item
                            name="subject"
                            // label="Full Name"
                            rules={[
                              {
                                required: true,
                                message: "Please Enter Subject",
                              },
                              {
                                whitespace: true,
                              },
                              {
                                min: 4,
                                message: "Subject must be 4 characters long",
                              },
                            ]}
                            hasFeedback
                          >
                            <Input
                              size="large"
                              placeholder="Subject"
                              onChange={(e) => setSubject(e.target.value)}
                            />
                          </Form.Item>
                        </div>
                      </div>
                      <div className="form-group col-xl-12 col-lg-12 col-md-12 col-sm-12">
                        <Form.Item
                          name="message"
                          // label="Full Name"
                          rules={[
                            {
                              type: "textarea",
                              message: "Please Enter Your Message",
                            },
                            {
                              required: true,
                              message: "Please Enter Your Message",
                            },
                            {
                              whitespace: true,
                            },
                            {
                              min: 10,
                              message: "Query must be 10 characters",
                            },
                          ]}
                          hasFeedback
                        >
                          <Input.TextArea
                            size="large"
                            placeholder="Start writing your message here"
                            onChange={(e) => setMessage(e.target.value)}
                          />
                        </Form.Item>
                      </div>
                      <div className="form-group col-xl-12 col-lg-12 col-md-12 col-sm-12">
                        <Form.Item>
                          <Button
                            type="button"
                            htmlType="submit"
                            // block
                            size="large"
                            className="theme-btn btn-style-one"
                          >
                            Submit Query
                          </Button>
                        </Form.Item>
                      </div>
                    </div>
                  </Form>

                  {/* <form method="post" action="" id="contact-form">
                    <div className="row clearfix">
                      <div className="form-group col-xl-6 col-lg-6 col-md-12 col-sm-12">
                        <div className="field-inner">
                          <input
                            type="text"
                            name="username"
                            defaultValue=""
                            placeholder="Your name"
                            required=""
                          />
                        </div>
                      </div>
                      <div className="form-group col-xl-6 col-lg-6 col-md-12 col-sm-12">
                        <div className="field-inner">
                          <input
                            type="email"
                            name="email"
                            defaultValue=""
                            placeholder="Your email"
                            required=""
                          />
                        </div>
                      </div>
                      <div className="form-group col-xl-6 col-lg-6 col-md-12 col-sm-12">
                        <div className="field-inner">
                          <input
                            type="text"
                            name="phone"
                            defaultValue=""
                            placeholder="Your Phone"
                            required=""
                          />
                        </div>
                      </div>
                      <div className="form-group col-xl-6 col-lg-6 col-md-12 col-sm-12">
                        <div className="field-inner">
                          <input
                            type="text"
                            name="subject"
                            defaultValue=""
                            placeholder="Subject"
                            required=""
                          />
                        </div>
                      </div>
                      <div className="form-group col-xl-12 col-lg-12 col-md-12 col-sm-12">
                        <div className="field-inner">
                          <textarea
                            name="message"
                            placeholder="Start writing your message here"
                            required=""
                            defaultValue={""}
                          />
                        </div>
                      </div>
                      <div className="form-group col-xl-12 col-lg-12 col-md-12 col-sm-12">
                        <button
                          type="submit"
                          className="theme-btn btn-style-one"
                        >
                          <span>Submit Query</span>
                        </button>
                      </div>
                    </div>
                  </form> */}
                </div>
              </div>
            </div>
          </div>
          <div className="map-box">
            {/* <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d29242.499927623165!2d58.47333640472832!3d23.628977463737897!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2som!4v1691096678627!5m2!1sen!2som"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <div className="map-icon">
              <img src="assets/images/icons/map-marker.png" alt="" />
            </div> */}
          </div>
        </div>
      </section>
      <Footer3 />
    </div>
  );
};

export default Contact;
