import { logout } from "../../../Redux/LoggedSlice";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import ChangeImg from "../Avatar/ChangeImg";

const Customer = () => {
     const dispatch = useDispatch();
     const avatar = useSelector(state => state.avatar.avatar)
     const username = localStorage.getItem("username");
    return (
        <>
        <img src={avatar} alt="profile img" />
        <ChangeImg />
        <p>{username}</p>
        <p>View bookings</p>
      <button onClick={() => dispatch(logout())}><Link to="/Logout">LoggedOut</Link></button>
        </>
    )
};

export default Customer;

