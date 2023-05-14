import { useState } from "react";
import AllListings from "../Components/Listings/Index";
import Customer from "../Components/SideProfile/Customer/Customer";
import VenueManager from "../Components/SideProfile/VenueManager/VenueManager";
import ViewBookings from "../Components/SideProfile/Customer/ViewBookings";
import CreateVenue from "../Components/SideProfile/VenueManager/Venues/CreateVenue";

const Home = () => {

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
        return (
          <>
            <div>
              <h1>VENUE MANAGER - logged in content</h1>
        <button onClick={() => setIsToggled(!isToggled)}>Create venue</button>
              <VenueManager />
            {isToggled && <CreateVenue />}
            {!isToggled && <AllListings />}
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
