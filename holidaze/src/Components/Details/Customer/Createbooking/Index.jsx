import { URL } from "../../../../Utils/constants";
const bookingURL = "/api/v1/holidaze/bookings";

import { useState } from "react";

const CreateBooking = (props) => {

const [ guests, setGuests ] = useState(1);
const [ dateFrom, setDateFrom ] = useState("");
const [ dateTo, setDateTo ] = useState("");
const venueId = props.data.id;
const [ errorMsg, setErrorMsg ] = useState(""); 

const onGuestsChange = (e) => {
    let guests = e.target.value;
    setGuests(Number(guests))
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
        <section>
        <h2>Create booking for: {username}</h2>
        <form>
        {/* <label for="guests">Number of guests</label> */}
        <input onChange={onGuestsChange} type="number" name="guests" value={guests} min="1" max="10"></input>
        <input onChange={onDateFromChange} type="date" value={dateFrom} name="start"></input>
        <input onChange={onDateToChange} type="date" value={dateTo} name="start"min={dateFrom}></input>
        <button onClick={makeBooking}>Make booking</button>
        <span>{errorMsg}</span>
        </form>
        </section>
        </>
    )
};

export default CreateBooking;