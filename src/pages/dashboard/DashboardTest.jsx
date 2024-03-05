import React from "react";
import Navbar3 from "./../../components/navbar/Navbar3";
import Navbar from "./Navbar";
// import WhatsAppChat from "./../../components/whatsapp/WhatsappChat";
import ScrollToTop from "./../../components/scroll-to-top/ScrollToTop";
import Footer3 from "./../../components/footer/Footer3";
import SearchArea from "../../components/groupticket/SearchArea";
import TicketArea from "../../components/groupticket/TicketArea";
// import { Table } from "antd";

const DashboardTest = ({ active }) => {
  return (
    <div className="page-wrapper">
      <Navbar3 />
      {/* <WhatsAppChat /> */}
      <ScrollToTop />
      <div className="container" style={{ marginTop: "200px" }}>
        <h4 className="text-center mb-4 mt-4">Group Ticket </h4>
        <div className="container text-center px-4">
          <div className="row gx-5">
            {/* <div class="col-sm-3 bg-primary text-white">
              <div class="p-3">1 of 3</div>
            </div> */}
            <Navbar />
            {/* <TicketArea /> */}
          </div>
        </div>
      </div>

      {/* <Footer3 /> */}
    </div>
  );
};

export default DashboardTest;
