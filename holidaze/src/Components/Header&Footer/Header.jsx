import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../../Redux/LoggedSlice";

const Header = () => {
 const dispatch = useDispatch();
  return (
    <header>
      <nav>
        <Link to="/">
          <img src="/Logo.png" alt="Logo" />Home
        </Link>
        <Link to="/Login">Login</Link>
        <Link to="/Register">Register</Link>
        <Link to="/VenueDetails">Venue</Link>
        <Link to="/VenueManagerProfile">Manager</Link>
        <Link to="/CustomerProfile">Customer</Link>
        <Link to="/Logout">LoggedOut</Link>
      <button onClick={() => dispatch(logout())}><Link to="/Logout">LoggedOut</Link></button>
      </nav>
    </header>
  );
};

export default Header;
