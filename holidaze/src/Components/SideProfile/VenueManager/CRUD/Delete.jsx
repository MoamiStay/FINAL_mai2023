import { useParams } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const token = localStorage.getItem("authenticate");
import { URL } from "../../../../Utils/constants";
const deleteEndpoint = "/api/v1/holidaze/venues/";

const Delete = () => {
        const { id } = useParams();
        let navigate = useNavigate();
        const deleteURL = URL + deleteEndpoint + id;
        const [ feedbackMsg, setFeedbackMsg ] = useState("")

        const deleteMe = async () => {
        if(confirm("Are you sure you want to delete this venue?")) {
      try {
        const postData = {
          method: "DELETE",
          headers: {
           "content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        };
        const response = await fetch(deleteURL, postData);
        // console.log(response);

        if (response.ok) {
            setFeedbackMsg("Venue was successfully deleted");
          console.log("it was not deleted..");
        };
        setTimeout(() => {
          navigate("/");
        }, 3000);

      } catch (error) {
            console.log(error);
      } finally {
        console.log("finally");
      }
    }
    };

    return (
        <>
    <button onClick={() => {deleteMe()}}>Delete</button>
    <span>{feedbackMsg}</span>
        </>
    )
};

export default Delete;