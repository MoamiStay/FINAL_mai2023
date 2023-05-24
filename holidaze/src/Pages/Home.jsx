import { useState } from "react";
import AllListings from "../Components/Listings/Index";
import Customer from "../Components/SideProfile/Customer/Customer";
import VenueManager from "../Components/SideProfile/VenueManager/VenueManager";
import ViewBookings from "../Components/SideProfile/Customer/ViewBookings";
import CreateVenue from "../Components/SideProfile/VenueManager/CRUD/CreateVenue";
import ViewVenues from "../Components/SideProfile/VenueManager/CRUD/ViewVenues";
import { Layout, theme } from 'antd';
import React from 'react';
const { Content, Sider } = Layout;

const Home = () => {
  const {
      token: { colorBgContainer },
  } = theme.useToken();

  const [ toggleCreate, setToggleCreate ] = useState(false);
  const [ toggleVenues, setToggleVenues ] = useState(false);
  const [ isToggled, setIsToggled ] = useState(false);


  if (localStorage.getItem("authenticate") !== null && localStorage.getItem("venueManager") === "false") {
      return (
        // <>
        //   <div>
        //     <h1>CUSTOMER - logged in content</h1>
        // <button onClick={() => setIsToggled(!isToggled)}>My bookings</button>
        //     <Customer />
        //     {isToggled && <ViewBookings />}
        //     {!isToggled && <AllListings />}
        //   </div>
        // </>

    <Layout>
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={(broken) => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
      >
        <div className="demo-logo-vertical" />
      <Customer />
      <button onClick={() => setIsToggled(!isToggled)}>My bookings</button>
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
             <h1>CUSTOMER - logged in content</h1>
         {/* <button onClick={() => setIsToggled(!isToggled)}>My bookings</button> */}
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
          //   <div>
          //     <h1>VENUE MANAGER - logged in content</h1>
          //     <button onClick={() => {goHome()}}>Home</button>
          //     <button onClick={() => {onCreateClick()}}>Create venue</button>
          //     <button onClick={() => {onVenuesClick()}}>My venues</button>
          //     <VenueManager />
          //     {!toggleVenues && !toggleCreate && <AllListings />}
          //     {toggleCreate && <CreateVenue /> }
          //     {toggleVenues && <ViewVenues />}
          //   </div>
    <Layout>
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={(broken) => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
      >
        <div className="demo-logo-vertical" />
       <VenueManager />
       <button onClick={() => {goHome()}}>Home</button>
       <button onClick={() => {onCreateClick()}}>Create venue</button>
       <button onClick={() => {onVenuesClick()}}>My venues</button>
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
             <h1>CUSTOMER - logged in content</h1>
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
