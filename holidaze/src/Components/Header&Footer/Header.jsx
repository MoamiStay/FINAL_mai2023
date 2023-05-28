import { Link, useLocation } from "react-router-dom";
import { Layout } from 'antd';
import { ImgContainer, Img } from "./styles";
const { Header } = Layout;

const HeaderNav = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
      <Header style={{ display: 'flex', alignItems: 'center', backgroundColor: "orange", }}>
       <nav style={{display: "flex", justifyContent: "space-between", width: "100%", maxHeight: "100%"}}>
         <ImgContainer>
          <Link to="/">
            <Img src="/Logo.png" alt="Logo" />
          </Link>
         </ImgContainer>
         {isHomePage && !localStorage.getItem("authenticate") ? <Link to="/Login" className="link">Login</Link> : "" }

        {/* <Link to="*">404</Link> */}
        {/* <Link to="/Register">Register</Link> */}
        {/* <Link to="/VenueDetails">Venue</Link> */}
        {/* <Link to="/Logout">LoggedOut</Link> */}
       </nav>
      </Header>
  );
};

export default HeaderNav;
