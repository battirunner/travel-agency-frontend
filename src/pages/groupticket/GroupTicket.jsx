import React, { useState } from "react";
import Navbar3 from "./../../components/navbar/Navbar3";
import WhatsAppChat from "./../../components/whatsapp/WhatsappChat";
import ScrollToTop from "./../../components/scroll-to-top/ScrollToTop";
import Footer3 from "./../../components/footer/Footer3";
import SearchArea from "../../components/groupticket/SearchArea";
import TicketArea from "../../components/groupticket/TicketArea";
import { Table, message } from "antd";
import { useSearchParams } from "react-router-dom";
import { useGetGroupTicketQuery } from "../../redux/slices/groupTicketApiSlice";
import Loader from "./../../components/loader/Loader";
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

const GroupTicket = () => {

  const [searchParams, setSearchParams] = useSearchParams();
  const [country, setCountry] = useState(searchParams.get("country"));
  const [page, setPage] = useState(searchParams.get("page"));
  const [limit, setLimit] = useState(searchParams.get("limit"));
  // const [startDate, setStartDate] = useState(searchParams.get("start"));
  const [from, setFrom] = useState(searchParams.get("from"));
  const [to, setTo] = useState(searchParams.get("to"));
  const [inDate, setInDate] = useState(searchParams.get("inDate"));
  const [outDate, setOutDate] = useState();
  const onFromChange = (e) => {
    setFrom(e);
  };
  const onToChange = (e) => {
    setTo(e);
  };
  const onInDateChange = (e) => {
    setInDate(e);
  };
  const onOutDateChange = (e) => {
    setOutDate(e);
  };

  const onSearch = () => {
    console.log(from, to, inDate, outDate);
  }

  const { data, error, isLoading } = useSWR(
    `${
      import.meta.env.VITE_BASE_URL
    }/groupticket?country=${country}&page=${page}&limit=${limit}&start_date=${inDate}&from=${from}&to=${to}`,
    fetcher,
    {
      suspense: true,
    }
  );
  if (error) {
    message.error(error);
  } else {
    console.log("check data", data);
  
  }

  // console.log(country);

  // const { data, isLoading, error } = useGetGroupTicketQuery({
  //   country,
  //   page,
  //   limit,
  // });

  return (
    <div className="page-wrapper">
      <Navbar3 />
      <WhatsAppChat />
      <ScrollToTop />
      <div className="container" style={{ marginTop: "200px" }}>
        <h4 className="text-center mb-4 mt-4">Group Ticket </h4>
        <div className="container text-center px-4">
          <div className="row gx-5">
            {/* <div class="col-sm-3 bg-primary text-white">
              <div class="p-3">1 of 3</div>
            </div> */}
            <SearchArea
              onFromChange={onFromChange}
              onToChange={onToChange}
              onInDateChange={onInDateChange}
              onOutDateChange={onOutDateChange}
              onSearch={onSearch}
            />
            {error ? (
              <>{error}</>
            ) : isLoading ? (
              <>
                <Loader />
              </>
            ) : data.data.length > 0 ? (
              <>
                <TicketArea ticketItems={data.data} />
              </>
            ) : (
              <div className="text-center">No Tickets Found</div>
            )}
          </div>
        </div>
        {/* <Table
          columns={columns}
          expandable={{
            expandedRowRender: (record) => (
              <p
                style={{
                  margin: 0,
                }}
              >
                {record.description}
              </p>
            ),
            rowExpandable: (record) => record.name !== "Not Expandable",
          }}
          dataSource={data}
        /> */}
      </div>

      <Footer3 />
    </div>
  );
};

export default GroupTicket;
