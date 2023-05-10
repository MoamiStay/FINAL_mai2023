import useApi from "../../Hooks/useApi";
import { useState } from "react";
import { URL } from "../../Utils/constants";
import { venuesURL } from "../../Utils/constants";
import { Link } from "react-router-dom";

const Listings = () => {
    const { data, isLoading, isError } = useApi(URL + venuesURL);
    // console.log(data);
        const [ state, setState ] = useState({
        query: "",
        list: data
    })

    console.log(data);
   

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

    const handleChange = (e) => { 
        const results = data.filter(item => {
            if (e.target.value === '') return data
            return item.name.toLowerCase().includes(e.target.value.toLowerCase())
        })
        setState({
            query: e.target.value,
            list: results
        })
    };

    return (
        <>
        <form>
        <input onChange={handleChange} value={state.query} type="search"/>
        </form>
        <ul>
          {data !== [] && state.query === "" ? data.map(item => { 


            return (
              <li key={item.id}>
              <div>
              <Link to={`/VenueDetails/${item.id}`}>
                <img src={item.media[0]} alt={item.name} />
                <h3>{item.name}</h3>
                <p>Address: {item.location.address}</p>
                <p>Description: {item.description}</p>
                <p>{item.price},-</p>
                <p>Rating: {item.rating} stars</p>
              </Link>
              </div>
              </li>
            )


          }) : state.list.map(item => {
            return (
              <li key={item.id}>
              <div>
                <img src={item.media[0]} alt={item.name} />
                <h3>{item.name}</h3>
                <p>Address: {item.location.address}</p>
                <p>Description: {item.description}</p>
                <p>{item.price},-</p>
                <p>Rating: {item.rating} stars</p>
              </div>
              </li>
            )
          })}
        </ul>
        </>
    )
};

export default Listings;