import { useState } from "react";
import { URL,  } from "../../../Utils/constants";

const InputNewAvatar = () => {
    const [ state, setState ] = useState({
        query: "",
        avatarUrl: localStorage.getItem("avatar")
    })

    const NewImg = (e) => {
        setState({
            query: e.target.value,
            avatarUrl: e.target.value
        })
    }


const requestImg = async () => {
    event.preventDefault();
    // img = state.avatarUrl;
        let newAvatar = {
            avatar: state.avatarUrl,
    };
    const username = localStorage.getItem("username");
        try{
            const postData = {
            method: "PUT",
            headers: {
            "content-Type": "application/json",
            "Authorization": "Bearer " + localStorage.getItem("authenticate"),
            },
        body: JSON.stringify(newAvatar),
        };
        const response = await fetch(URL + "/api/v1/holidaze/profiles/" + username + "/media", postData)
        console.log(response);
        const json = await response.json();
        console.log(json);
        localStorage.setItem("avatar", json.avatar)
        // update img using state in redux probably
      } catch (error) {
        console.log(error);
      } finally {
        console.log("Finally");
      };
}

    return (
        <form>
            <input onChange={NewImg} value={state.query} type="text" placeholder="Img URL" />
            <button onClick={requestImg}>Change Img</button>
        </form>
    )
  }  

export default InputNewAvatar;