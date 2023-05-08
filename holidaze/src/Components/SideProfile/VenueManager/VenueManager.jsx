import { logout } from "../../../Redux/LoggedSlice";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const VenueManager = () => {
    return (
        <>
        <h2>Venue Manager profile</h2>
        <p>Profile Image</p>
        <p>Link to change pf img</p>
        <p>Create venue</p>
        <p>view venues(edit/delete)</p>
        <p>Logout</p>
      <button onClick={() => dispatch(logout())}><Link to="/Logout">LoggedOut</Link></button>
        </>
    )
};

export default VenueManager;