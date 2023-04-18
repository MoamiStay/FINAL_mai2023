import { Link } from "react-router-dom";

const Header = () => {
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
      </nav>
    </header>
  );
};

export default Header;
