import { Link } from "react-router-dom";
import { Layout } from 'antd';
const { Header } = Layout;

const HeaderNav = () => {
  return (
      <Header style={{ display: 'flex', alignItems: 'center', backgroundColor: "brown", }}>
       <nav>
         <Link to="/">
            <img src="/Logo.png" alt="Logo" />
        </Link>
        <Link to="/Login">Login</Link>
        <Link to="/Register">Register</Link>
        <Link to="/VenueDetails">Venue</Link>
        <Link to="/Logout">LoggedOut</Link>
       </nav>
      </Header>
  );
};

export default HeaderNav;
