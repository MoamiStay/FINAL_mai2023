import useApiAuth from "../../../../../Hooks/useApiAuth";
import { URL } from "../../../../../Utils/constants";
import { Link } from "react-router-dom";
import DeleteMe from "./Delete";
const username = localStorage.getItem("username");
const getMyVenues = "/api/v1/holidaze/profiles/";
const nameParam = username + "/venues?_bookings=true&_owner=true";


const ViewVenues = () => {
    const { data, isLoading, isError } = useApiAuth(URL + getMyVenues + nameParam)
    console.log(data);


    return (
        <>
        <h1>MY VENUES - update/delete/view bookings</h1>
        {data.map((item, idx) => {
            return (
                <div key={idx}>
                    <button><Link to="/EditDelete/:id">Edit</Link></button>
                    <button onClick={() => {DeleteMe(data)}}>Delete</button>
                    <h3>{item.name}</h3>
                </div>
            )
        })}
        </>
    )
};

export default ViewVenues;

// HERE: View list of venues and see their bookings
// new "page" with a single venue and possibility for updating it
// add "edit" link from the venues' details page