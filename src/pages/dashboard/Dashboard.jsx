import React from "react";
import Tables from "./Tables";
import Home from "./Home";
import Billing from "./Billing";
// import Rtl from "./Rtl";
import Profile from "./Profile";
import ProfileNew from "./ProfileNew";
import Updatecontent from "./UpdateContent";
import Main from "../../components/dashboard/layout/Main";

const Dashboard = ({ active }) => {
  const dashboardContent = {
    home: <Home />,
    tables: <Tables />,
    billing: <Billing />,
    // rtl: <Rtl />,
    profile: <Profile />,
    profilenew: <ProfileNew />,
    updatecontent: <Updatecontent />,
  };
  return (
    <Main>
      {/* <Home />
      <Tables /> */}
      {dashboardContent[active]}
    </Main>
  );
};

export default Dashboard;
