import { logout } from "../../../Redux/LoggedSlice";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const Customer = () => {
     const dispatch = useDispatch();
    return (
        <>
        <h2>Customer profile</h2>
        <p>Profile Image</p>
        <p>Link to change pf img</p>
        <p>Username</p>
        <p>View bookings</p>
        <p>Logout</p>
      <button onClick={() => dispatch(logout())}><Link to="/Logout">LoggedOut</Link></button>
        </>
    )
};

export default Customer;