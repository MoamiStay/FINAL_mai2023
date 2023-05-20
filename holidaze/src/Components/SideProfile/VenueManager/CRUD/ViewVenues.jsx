import useApiAuth from "../../../../Hooks/useApiAuth";
import { URL } from "../../../../Utils/constants";
import { Link } from "react-router-dom";
const getMyVenues = "/api/v1/holidaze/profiles/";
const username = localStorage.getItem("username");
const nameParam = username + "/venues?_bookings=true&_owner=true";

const ViewVenues = () => {
    const { data, isLoading, isError } = useApiAuth(URL + getMyVenues + nameParam);
    localStorage.setItem("myVenues", JSON.stringify(data));
    const parsedData = JSON.parse(localStorage.getItem("myVenues")); 

      return (
        <>
        <h1>MY VENUES - update/delete/view bookings</h1>
        {parsedData.map((item, idx) => {
            return (
                <div key={idx}>
                    <button><Link to={`/EditDelete/${item.id}`}>Edit</Link></button>
                    <h3>{item.name}</h3>
                </div>
            )
        })}
        </>
    )
};


export default ViewVenues;