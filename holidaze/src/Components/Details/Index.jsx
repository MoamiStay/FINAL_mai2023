import CustomerDetails from "./Customer/Index";
import VenueManagerDetails from "./Venuemanager/Index";


const Details = (props) => {
const data = props.data;

      if (localStorage.getItem("authenticate") !== null && localStorage.getItem("venueManager") === "false") {
      return (
        <>
          <div>
            <CustomerDetails data={data}/>
          </div>
        </>
      )
       } else return (
      <>
      <div>
      <VenueManagerDetails data={data}/>
      </div>
      </>
    )
};

export default Details;