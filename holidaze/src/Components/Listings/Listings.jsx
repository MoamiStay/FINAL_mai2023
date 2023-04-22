import useApi from "../../Hooks/useApi";
import { useState } from "react";
import { URL } from "../../Utils/constants";
import { venuesURL } from "../../Utils/constants";

const Listings = () => {
    const { data, isLoading, isError } = useApi(URL + venuesURL);
    const [ state, setState ] = useState({
        query: "",
        list: []
    })

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
    }

    console.log(state.list);

    return (
        <>
        <form>
        <input onChange={handleChange} value={state.query}  type="search"/>
        </form>
        <ul>
            {(state.query === ' ' ? "Found no matching results" : !state.list.length ? "Your query did not return any results" : state.list.map(item => {
                return <li key={item.id}>{item.name}</li>
            }))}
        </ul>
        </>
    )
};

// state.query === ' ' ? "Found no matching results" : 

export default Listings;