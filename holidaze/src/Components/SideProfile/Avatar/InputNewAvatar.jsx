import { useState } from "react";
import { URL } from "../../../Utils/constants";
import { changeAvatar, errorHandler } from "../../../Redux/AvatarSlice";
import { useDispatch } from "react-redux";

const InputNewAvatar = () => {
    const dispatch = useDispatch();
    const [ state, setState ] = useState({
        query: "",
        avatarUrl: localStorage.getItem("avatar")
    });
    const [ errorMsg, setErrorMsg ] = useState("");

    const NewImg = (e) => {
        setState({
            query: e.target.value,
            avatarUrl: e.target.value
        })
    };


const requestImg = async () => {
    event.preventDefault();
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
        const json = await response.json();
        console.log(response);
        console.log(json);

        // it accepts broken links too... cant use yup to find valid links. Broken?
    if(response.ok && state.query !== "") {
        setErrorMsg("");
        dispatch(
        changeAvatar({
            profileImg: state.query,
        })
    )
     } else {
       setErrorMsg("Invalid img link")
        dispatch(
            errorHandler()
        )
    }

      } catch (error) {
console.log(error);
      } finally {
        setState({
            query: "",
        })
      };
}

    return (
        <form>
            <input onChange={NewImg} value={state.query} type="text" placeholder="Img URL" />
            <button onClick={requestImg}>Change Img</button>
            <span>{errorMsg}</span>
        </form>
    )
  }  

export default InputNewAvatar;