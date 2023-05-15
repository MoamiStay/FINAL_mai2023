import { useState } from "react";
import AllListings from "../Components/Listings/Index";
import Customer from "../Components/SideProfile/Customer/Customer";
import VenueManager from "../Components/SideProfile/VenueManager/VenueManager";
import ViewBookings from "../Components/SideProfile/Customer/ViewBookings";
import CreateVenue from "../Components/SideProfile/VenueManager/CRUD/CreateVenue";
import ViewVenues from "../Components/SideProfile/VenueManager/CRUD/MyVenues/ViewVenues";

const Home = () => {

  const [ toggleCreate, setToggleCreate ] = useState(false);
  const [ toggleVenues, setToggleVenues ] = useState(false);
  const [ isToggled, setIsToggled ] = useState(false);


  if (localStorage.getItem("authenticate") !== null && localStorage.getItem("venueManager") === "false") {
      return (
        <>
          <div>
            <h1>CUSTOMER - logged in content</h1>
        <button onClick={() => setIsToggled(!isToggled)}>My bookings</button>
            <Customer />
            {isToggled && <ViewBookings />}
            {!isToggled && <AllListings />}
          </div>
        </>
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
          <>
            <div>
              <h1>VENUE MANAGER - logged in content</h1>
              <button onClick={() => {goHome()}}>Home</button>
              <button onClick={() => {onCreateClick()}}>Create venue</button>
              <button onClick={() => {onVenuesClick()}}>My venues</button>
              <VenueManager />
              {!toggleVenues && !toggleCreate && <AllListings />}
              {toggleCreate && <CreateVenue /> }
              {toggleVenues && <ViewVenues />}
            </div>
          </>
        )
  } else return (
      <>
      <h1>HOME -logged out content</h1>
      <AllListings />
      </>
    )
};

export default Home;
