import { URL } from "../../../Utils/constants";
import useApiAuth from "../../../Hooks/useApiAuth";
import { Link } from "react-router-dom";
const username = localStorage.getItem("username");
const myBookingsUrl = "/api/v1/holidaze/profiles/"
const myBookingsUrlName = username + "/bookings?sortOrder=desc&_venue=true";


// function getDaysBetweenDates(dateFrom, dateTo) {
//   const oneDay = 24 * 60 * 60 * 1000; // Number of milliseconds in one day
//   const fromDate = new Date(dateFrom); // Convert string to Date object
//   const toDate = new Date(dateTo); // Convert string to Date object

//   const diffInDays = Math.round(Math.abs((toDate - fromDate) / oneDay));

//   return diffInDays;
// }

const ViewBookings = () => {
        const { data, isLoading, isError } = useApiAuth(URL + myBookingsUrl + myBookingsUrlName);
        // console.log(data);
        
        return (
            <>
            <h1>Hi! I'm your bookings</h1>
            {data.map((item, idx) => {
                return (
                    <div key={idx}>
                        <img src={item.venue.media} alt={item.name}/>
                        <h3>{item.venue.name} - *RATING*</h3>
                        <p>Guests: {item.guests}</p>
                        <p>From {item.dateFrom.slice(0, 9)} until {item.dateTo.slice(0, 9)}</p>
                        <p>Address: {item.venue.location.address}, {item.venue.location.city}, {item.venue.location.country}</p>
                        <p>Total: some money..</p>
                        <button><Link to={`/VenueDetails/${item.venue.id}`}>View venue page</Link></button>
                    </div>
                )
            })}
            </>
        )
};

export default ViewBookings;