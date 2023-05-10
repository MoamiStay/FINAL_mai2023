import AllListings from "../Components/Listings/Index";
import Customer from "../Components/SideProfile/Customer/Customer";
import VenueManager from "../Components/SideProfile/VenueManager/VenueManager";

const Home = () => {

  if (localStorage.getItem("authenticate") !== null && localStorage.getItem("venueManager") === "false") {
      return (
        <>
          <div>
            <h1>CUSTOMER - logged in content</h1>
            <Customer />
            <AllListings />
          </div>
        </>
      )
      } 
      else if (localStorage.getItem("authenticate") !== null && localStorage.getItem("venueManager") === "true") {
        return (
          <>
            <div>
              <h1>VENUE MANAGER - logged in content</h1>
              <VenueManager />
              <AllListings />
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
