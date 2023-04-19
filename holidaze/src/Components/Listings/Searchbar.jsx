import { useState } from "react";
import useApi from "../../Hooks/useApi";
import { URL } from "../../Utils/constants";
import { venuesURL } from "../../Utils/constants";

const Searchbar = () => {
    const [ input, setInput ] = useState("search..");
    const { data, isLoading, isError } = useApi(URL + venuesURL);

const Search = (e) => {
    // setInput(e.target.value)
        console.log(e.target.value);

        for(let item of data) {
            if (item.name.toLowerCase().includes(e.target.value)) {
                console.log("success");
        return (
            <>
            <p>{item.name}</p>
            </>
        )
            }
        }
        }

    return (
        <>
        <input type="text" onChange={Search} placeholder="search.."></input>
        </>
    )
};

export default Searchbar;