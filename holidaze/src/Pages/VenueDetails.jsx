import useApi from "../Hooks/useApi";
import { useParams } from "react-router-dom";
import { getVenuesURL } from "../Utils/constants";
import { URL } from "../Utils/constants";
import Details from "../Components/Details/Index";


const VenueDetails = () => {
  const { id } = useParams();
  const { data, isLoading, isError } = useApi(URL + getVenuesURL + id)
  // console.log(data);
  return (
    <>
    <Details data={data}/>
    <div>
      <p>Venue Details</p>
    </div>
    </>
  );
};

export default VenueDetails;
