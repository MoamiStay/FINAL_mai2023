import useApiAuth from "../../../../../Hooks/useApiAuth";
import { URL } from "../../../../../Utils/constants";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deleteVenue } from "../../../../../Redux/DeleteSlice";

const deleteUrl = "/api/v1/holidaze/venues/"; 
const getMyVenues = "/api/v1/holidaze/profiles/";
const username = localStorage.getItem("username");
const nameParam = username + "/venues?_bookings=true&_owner=true";
const token = localStorage.getItem("authenticate");


const ViewVenues = () => {
    const { data, isLoading, isError } = useApiAuth(URL + getMyVenues + nameParam);
    localStorage.setItem("myVenues", JSON.stringify(data));
    const parsedData = JSON.parse(localStorage.getItem("myVenues")); 
    const dispatch = useDispatch();
    const output = useSelector(state => state.output.output);

    // console.log(output);
    // console.log(parsedData);
    
    const deleteMe = async (id, index) => {
        if(confirm("Are you sure you want to delete this venue?")) {
      try {
        const postData = {
          method: "DELETE",
          headers: {
           "content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        };

        const response = await fetch(URL + deleteUrl + id, postData);
        console.log(response);

        if (response.ok) {

            console.log(parsedData);
            delete parsedData[index]
            // loop through data and find matching id for item to be deleted


        dispatch(
            deleteVenue({
            updatedList: JSON.stringify(parsedData),
            updatedOutput: parsedData,
            })
        )
        } else {
          console.log("it was not deleted..");
        };

        } catch (error) {
            console.log(error);
      } finally {
        console.log("finally");
      }
    }
    };

        return (
        <>
        <h1>MY VENUES - update/delete/view bookings</h1>
        {output.map((item, idx) => {
            return (
                <div key={idx}>
                    <button><Link to="/EditDelete/:id">Edit</Link></button>
                    <button onClick={() => {deleteMe(item.id, idx)}}>Delete</button>
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