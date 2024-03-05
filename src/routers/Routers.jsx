import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/home/Home";
import TourList from "../pages/tourList/TourList";
import TourPackages from "../pages/tourPackages/TourPackages";
import TourDetails from "../pages/tourDetails/TourDetails";
import Visa from "../pages/visa/Visa";
import Flight from "../pages/flight/Flight";
import Hotels from "../pages/hotels/Hotels";
import Hajj from "../pages/hajj/Hajj";
import Insurance from "../pages/insurance/Insurance";
import GroupTicket from "../pages/groupticket/GroupTicket";
import About from "../pages/about/About";
import Blog from "../pages/blog/Blog";
import BlogDetails from "../pages/blogDetails/BlogDetails";
import Contact from "../pages/contact/Contact";
// import Dashboard from "../pages/user/Dashboard";
import Login from "../pages/login/Login";
import Signup from "../pages/signup/Signup";
import NotFound from "../pages/notFound/NotFound";
import Sample from "../pages/sample/Sample";
import Dashboard from "../pages/dashboard/Dashboard";
import DashboardTest from "../pages/dashboard/DashboardTest";
import UpdateContent from "../pages/dashboard/UpdateContent";
// import Tables from "../pages/dashboard/Tables";
import "../assets/styles/main.css";
import "../assets/styles/responsive.css";
import Navbar3 from "./../components/navbar/Navbar3";
import ProtectedRoute from "./ProtectedRoute";
import ResetPassword from "../pages/resetPassword/ResetPassword";
import ForgotPassword from "../pages/forgotPassword/ForgotPassword";
import VerifyEmail from "../pages/verifyEmail/VerifyEmail";
import Loader from "../components/loader/Loader";

const Routers = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Suspense fallback={<Loader />}>
            <Home />
          </Suspense>
        }
      />
      <Route path="/tourList" element={<TourList />} />
      <Route path="/tourpackages" element={<TourPackages />} />

      <Route
        path="/tourdetails/:id"
        element={
          <Suspense fallback={<Loader />}>
            <TourDetails />
          </Suspense>
        }
      />

      <Route path="/visa" element={<Suspense fallback={<Loader />}><Visa /></Suspense>} />
      <Route path="/flight" element={<Flight />} />
      <Route path="/hotels" element={<Hotels />} />
      <Route
        path="/hajj"
        element={
          <Suspense fallback={<Loader />}>
            <Hajj />
          </Suspense>
        }
      />
      <Route path="/services/hajj/:id" element={<Hajj />} />
      <Route path="/insurance" element={<Insurance />} />
      <Route path="/groupticket" element={<Suspense fallback={<Loader/>}><GroupTicket /></Suspense>} />
      <Route path="/about" element={<About />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/blogdetails" element={<BlogDetails />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/reset-password" element={<ResetPassword />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/verify-email" element={<VerifyEmail />} />

      {/* protected route starts */}
      <Route path="" element={<ProtectedRoute />}>
        <Route path="/dashboard" element={<Dashboard active={"home"} />} />

        <Route
          path="/dashboardtest"
          element={<DashboardTest active={"home"} />}
        />

        <Route
          path="/dashboard/tables"
          element={<Dashboard active={"tables"} />}
        />
        <Route
          path="/dashboard/billing"
          element={<Dashboard active={"billing"} />}
        />
        {/* <Route path="/dashboard/rtl" element={<Dashboard active={"rtl"} />} /> */}
        <Route
          path="/dashboard/profile"
          element={<Dashboard active={"profile"} />}
        />
        <Route
          path="/dashboard/profilenew"
          element={<Dashboard active={"profilenew"} />}
        />
        <Route
          path="/dashboard/updatecontent"
          element={<Dashboard active={"updatecontent"} />}
        />
      </Route>
      {/* protected route ends */}

      <Route path="/login" element={<Suspense fallback={<Loader/>}><Login /></Suspense>} />
      <Route path="/signup" element={<Suspense fallback={<Loader/>}><Signup /></Suspense>} />
      <Route path="*" element={<NotFound />} />
      <Route path="/sample" element={<Sample />} />
    </Routes>
  );
};

export default Routers;
