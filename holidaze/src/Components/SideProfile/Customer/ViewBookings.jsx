import { URL } from "../../../Utils/constants";
import useApiAuth from "../../../Hooks/useApiAuth";
// const username = localStorage.getItem("username");
const myBookingsUrl = "/api/v1/holidaze/bookings/{id}";
// const myBookingsUrlName = username + "/bookings";
// const profile = "/api/v1/holidaze/profiles/";


const ViewBookings = () => {

        const { data, isLoading, isError } = useApiAuth(URL + myBookingsUrl + myBookingsUrlName);
        // const { data, isLoading, isError } = useApiAuth(URL + profile + username);
        console.log(data);
        
        return (
            <>
            <h1>Hi! I'm your bookings</h1>
            {data.map((item, idx) => {
                return (
                    <>
                    <div key={idx}>
                        <p>Guests: {item.guests}</p>
                    </div>
                    </>
                )
            })}
            </>
        )
};

export default ViewBookings;