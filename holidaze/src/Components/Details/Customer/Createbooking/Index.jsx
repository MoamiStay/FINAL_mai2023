import { URL } from "../../../../Utils/constants";
import { Input, Card, Button } from "antd";
import { InputNumber } from 'antd';
const bookingURL = "/api/v1/holidaze/bookings";

import { useState } from "react";

const CreateBooking = (props) => {

const [ guests, setGuests ] = useState(1);
const [ dateFrom, setDateFrom ] = useState("");
const [ dateTo, setDateTo ] = useState("");
const venueId = props.data.id;
const [ errorMsg, setErrorMsg ] = useState(""); 

const onGuestsChange = (value) => {
    setGuests(value);
}
const onDateFromChange = (e) => {
    setDateFrom(e.target.value)
}
const onDateToChange = (e) => {
    setDateTo(e.target.value)
}

const makeBooking = async () => {
    event.preventDefault();
    let bodyContent = {
        dateFrom,
        dateTo,
        guests,
        venueId
    };
    // console.log(bodyContent);
    const token = localStorage.getItem("authenticate")
    try {
        const postData = {
            method: "POST",
            headers: {
                "content-Type": "application/json",
                "Authorization": "Bearer " + token,
            },
            body: JSON.stringify(bodyContent),
        };
        const response = await fetch(URL + bookingURL, postData);
        const json = await response.json();
        // console.log(response);
        // console.log(json);
        if(response.ok) {
            setErrorMsg("You created a booking for ** guests from *** until ****")
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
        <Card title={"Book this venue" } bordered={false}>
        <p>Create booking for: {username}</p>

        <form>
        <label htmlFor="guests">Number of guests </label>
        <InputNumber onChange={onGuestsChange} name="guests" value={guests} min={1} max={10} />
        <Input onChange={onDateFromChange} type="date" value={dateFrom} name="start"></Input>
        <Input onChange={onDateToChange} type="date" value={dateTo} name="start"min={dateFrom}></Input>
        <Button type="primary" onClick={makeBooking}>Make booking</Button>
        <span>{errorMsg}</span>
        </form>

        </Card>
        </>
    )
};

export default CreateBooking;