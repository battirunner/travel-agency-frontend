import React from "react";
import TicketDetailStoppage from "./TicketDetailStoppage";
import "../GroupTicket.css";

const ticketBox = {
  first: {
    departure: {
      place: "Dhaka",
      date: "10 February, Saturday",
      time: "11:00 AM",
      airport: "Hajrat Shajalal Intl.",
      airlines: "Biman Bangladesh",
      shortcode: "DAC",
      timetaken: "02h50m",
      flight: "Flight no : 2A447",
      seat: "Class : ECONOMY-Y (T)-20B",
      aircraft: "Boeing 777",
    },
    arrival: {
      place: "Cox's Bazar",
      date: "10 February, Saturday",
      time: "1:50 PM",
      airport: "Cox's Bazar intl",
      airlines: "Biman Bangladesh",
      shortcode: "CXB",
      timetaken: "02h50m",
      flight: "Flight no : 2A447",
      seat: "Class : ECONOMY-Y (T)-20B",
      aircraft: "Boeing 777",
    },
  },
  return: {
    departure: {
      place: "Cox's Bazar",
      date: "14 February, Tuseday",
      time: "4:50 PM",
      airport: "Cox's Bazar intl",
      airlines: "Biman Bangladesh",
      shortcode: "CXB",
      timetaken: "02h50m",
      flight: "Flight no : 347B",
      seat: "Class : ECONOMY-Y (T)-29D",
      aircraft: "airbus 303",
    },
    arrival: {
      place: "Dhaka",
      date: "14 February, Tuseday",
      time: "7:40 PM",
      airport: "Hajrat Shahjalal airport",
      airlines: "Biman Bangladesh",
      shortcode: "DAC",
      timetaken: "02h50m",
      flight: "Flight no : 347B",
      seat: "Class : ECONOMY-Y (T)-29D",
      aircraft: "airbus 303",
    },
  },
};

const TicketDetailBox = ({ ticketBoxInfo }) => {
  return (
    <>
      {ticketBoxInfo && (
        <div className="col-12 mt-4">
          <TicketDetailStoppage
            ticketBoxInfo={ticketBoxInfo}
            ticketBox={ticketBox}
          />
        </div>
      )}
    </>
  );
};

export default TicketDetailBox;
