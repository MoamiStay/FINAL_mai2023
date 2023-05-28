import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../Redux/LoggedSlice";
import AllListings from "../Components/Listings/Index";
import Customer from "../Components/SideProfile/Customer/Customer";
import VenueManager from "../Components/SideProfile/VenueManager/VenueManager";
import ViewBookings from "../Components/SideProfile/Customer/ViewBookings";
import CreateVenue from "../Components/SideProfile/VenueManager/CRUD/CreateVenue";
import ViewVenues from "../Components/SideProfile/VenueManager/CRUD/ViewVenues";
import { Layout, theme, Button } from 'antd';
import React from 'react';
const { Content, Sider } = Layout;

const Home = () => {
  const {
      token: { colorBgContainer },
  } = theme.useToken();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [ toggleCreate, setToggleCreate ] = useState(false);
  const [ toggleVenues, setToggleVenues ] = useState(false);
  const [ isToggled, setIsToggled ] = useState(false);


  if (localStorage.getItem("authenticate") !== null && localStorage.getItem("venueManager") === "false") {
      return (
    <Layout>
      <Sider style={{ minHeight: "100vh"}}
        breakpoint="lg"
        collapsedWidth="0"
      >
        <div className="demo-logo-vertical" />
      <Customer />
      <div style={{display: "flex", flexDirection: "column", justifyContent: "flex-start" }}>
      <Button type="text" className="menuText" style={{textAlign: "left"}} onClick={() => setIsToggled(false)}>Home</Button>
      <Button type="text" className="menuText" style={{textAlign: "left"}} onClick={() => setIsToggled(true)}>My bookings</Button>
      <Button type="link" style={{textAlign: "left"}} onClick={() => dispatch(logout())}><Link to="/Logout">Log out</Link></Button>
      </div>
      </Sider>

      <Layout>
        <Content
          style={{
            margin: '24px 16px 0',
          }}
        >
          <div
            style={{
              padding: 24,
              minHeight: 360,
              background: colorBgContainer,
            }}
          >
           <div>
             <h1>CUSTOMER</h1>
             {isToggled && <ViewBookings />}
             {!isToggled && <AllListings />}
           </div>
          </div>
        </Content>
      </Layout>
    </Layout>
      )
      } 
      else if (localStorage.getItem("authenticate") !== null && localStorage.getItem("venueManager") === "true") {

        const onCreateClick = () => {
          setToggleCreate(!toggleCreate);
          setToggleVenues(false);
        }

        const onVenuesClick = () => {
          setToggleVenues(!toggleVenues);
          setToggleCreate(false);
        }

        const goHome = () => {
          setToggleCreate(false);
          setToggleVenues(false);
        }

        return (
    <Layout>
      <Sider style={{ minHeight: "100vh"}}
        breakpoint="lg"
        collapsedWidth="0"
      >
        <div className="demo-logo-vertical" />
       <VenueManager />
       <div style={{display: "flex", flexDirection: "column", justifyContent: "flex-start" }}>
       <Button type="text" className="menuText" style={{textAlign: "left"}} onClick={() => {goHome()}}>Home</Button>
       <Button type="text" className="menuText" style={{textAlign: "left"}} onClick={() => {onCreateClick()}}>Create venue</Button>
       <Button type="text" className="menuText" style={{textAlign: "left"}} onClick={() => {onVenuesClick()}}>My venues</Button>
       <Button type="link" style={{textAlign: "left"}} onClick={() => dispatch(logout())}><Link to="/Logout">Log out</Link></Button>
       </div>
      </Sider>

      <Layout>
        <Content
          style={{
            margin: '24px 16px 0',
          }}
        >
          <div
            style={{
              padding: 24,
              minHeight: 360,
              background: colorBgContainer,
            }}
          >
           <div>
             <h1>VENUE MANAGER</h1>
             {!toggleVenues && !toggleCreate && <AllListings />}
             {toggleCreate && <CreateVenue /> }
             {toggleVenues && <ViewVenues />}
           </div>
          </div>
        </Content>
      </Layout>
    </Layout>
        )
  } else return (
      <Layout>
        <Content
          style={{
            margin: '24px 16px 0',
            minHeight: "100vh"
          }}
        >
          <div
            style={{
              padding: 24,
              minHeight: 360,
              background: colorBgContainer,
            }}
          >
           <div>
              <h1>HOME -logged out content</h1>
              <AllListings />
           </div>
          </div>
        </Content>
      </Layout>
    )
};

export default Home;
