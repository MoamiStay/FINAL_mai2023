import { logout } from "../../../Redux/LoggedSlice";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import ChangeImg from "../Avatar/ChangeImg";

const Customer = () => {
     const dispatch = useDispatch();
     let avatar = localStorage.getItem("avatar");
    //  console.log(avatar);
    return (
        <>
        <h2>Customer profile</h2>
        <p>Profile Image</p>
        <img src={avatar} alt="profile img" />
        <ChangeImg />
        <p>Username</p>
        <p>View bookings</p>
        <p>Logout</p>
      <button onClick={() => dispatch(logout())}><Link to="/Logout">LoggedOut</Link></button>
        </>
    )
};

export default Customer;

