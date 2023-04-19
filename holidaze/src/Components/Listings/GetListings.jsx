import useApi from "../../Hooks/useApi";
import { URL, venuesURL } from "../../Utils/constants";
import Searchbar from "./Searchbar";
// import { useSelector } from "react-redux";

const GetListings = () => {
    const { data, isLoading, isError } = useApi(URL + venuesURL);
    // console.log(data);
    // const searchInput = useSelector(state => state.input);

  if (isLoading) {
    return (
      <div className="spinner">
        <img className="spinner" src="/loaderi.gif" alt="" />
      </div>
    );
  }

   if (isError) {
    return <h1>An error occured</h1>;
  }

  // if(searchInput !== "") {
    return (
        <>
            {data.map((venue, idx) => {
                return (
                  <h3 key={idx} >{venue.name}</h3>
                )
            }
            )}
        </>
    )
  // } else { <Searchbar />}
};

export default GetListings;