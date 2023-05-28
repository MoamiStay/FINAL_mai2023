import { URL } from "../../../../Utils/constants";
import { Input, Card, Button, message } from "antd";
import { InputNumber, Spin } from "antd";
import Calendar from "../Calendar.jsx/Calendar";
import { useState } from "react";

const bookingURL = "/api/v1/holidaze/bookings";

const CreateBooking = (props) => {
  const [guests, setGuests] = useState(1);
  const venueId = props.data.id;
  const maxGuests = props.data.maxGuests;
  const [selectedDates, setSelectedDates] = useState([]);
  const [errorMsg, setErrorMsg] = useState("");

  const onGuestsChange = (value) => {
    setGuests(value);
  };

  const handleDateChange = (dates) => {
    setSelectedDates(dates);
  };

  const makeBooking = async (event) => {
    event.preventDefault();

    if (guests > maxGuests) {
      message.error(`Maximum number of guests allowed is ${maxGuests}`);
      return;
    }

    setErrorMsg(
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Spin />
      </div>
    );

    const token = localStorage.getItem("authenticate");
    try {
      const bodyContent = {
        dateFrom: selectedDates[0].format("YYYY-MM-DD"),
        dateTo: selectedDates[1].format("YYYY-MM-DD"),
        guests,
        venueId,
      };

      const postData = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
        body: JSON.stringify(bodyContent),
      };

      const response = await fetch(URL + bookingURL, postData);
      const json = await response.json();

      if (response.ok) {
        setErrorMsg(`You created a booking for ${guests} guests from ${bodyContent.dateFrom} until ${bodyContent.dateTo}`);
      } else {
        setErrorMsg("Something went wrong");
      }
    } catch (error) {
      console.log(error);
    } finally {
      console.log("finally");
    }
  };

  const username = localStorage.getItem("username");

  return (
    <>
      <Card title={"Book this venue"} bordered={false}>
        <p style={{fontSize: "larger"}}>Create booking for {username}</p>

        <form onSubmit={makeBooking}>
            <div style={{marginBottom: "15px"}}>
          <label htmlFor="guests">Number of guests </label>
          <InputNumber onChange={onGuestsChange} name="guests" value={guests} min={1} max={maxGuests} />
          </div>
          {/* Calendar disables all days prior to the current day, and also disables all dates where a booking is placed. */}
          <Calendar onDateChange={handleDateChange} />
          <Button style={{marginTop: "15px", backgroundColor: "#408BB6"}} type="primary" htmlType="submit">
            Make booking
          </Button>
          <span>{errorMsg}</span>
        </form>
      </Card>
    </>
  );
};

export default CreateBooking;
