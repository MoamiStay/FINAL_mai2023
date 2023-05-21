import useApiAuth from "../../../../Hooks/useApiAuth";
import { URL } from "../../../../Utils/constants";
import { Link } from "react-router-dom";
const getMyVenues = "/api/v1/holidaze/profiles/";
const username = localStorage.getItem("username");
const nameParam = username + "/venues?_bookings=true&_owner=true";

const ViewVenues = () => {
    const { data, isLoading, isError } = useApiAuth(URL + getMyVenues + nameParam);
    console.log(data);
    localStorage.setItem("myVenues", JSON.stringify(data));
    const parsedData = JSON.parse(localStorage.getItem("myVenues")); 

      return (
        <>
        <h1>MY VENUES - update/delete/view bookings</h1>
        {parsedData !== [] ? parsedData.map((item, idx) => {
            return (
                <div key={idx}>
                    <button><Link to={`/EditDelete/${item.id}`}>Edit</Link></button>
                    <h3>{item.name}</h3>
                    <h3>Bookings:</h3>
                    {item.bookings.map((booking, idx) => {
                        return (
                            <div key={idx}>
                                <p>{booking.guests} guests from {booking.dateFrom.slice(0, 9)} until {booking.dateTo.slice(0, 9)}</p>
                                <p>Created: {booking.created.slice(0, 9)}</p>
                            </div>
                        )
                    })}
                </div>
            )
        }) : <h3>Loading..</h3>
        }
        </>
    )
};


export default ViewVenues;