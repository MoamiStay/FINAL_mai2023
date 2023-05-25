import { logout } from "../../../Redux/LoggedSlice";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import ChangeImg from "../Avatar/ChangeImg";
import { Img, User } from "./CRUD/styles";
import { Button } from "antd";

const VenueManager = () => {
  const dispatch = useDispatch();
  const avatar = useSelector(state => state.avatar.avatar);
  const username = localStorage.getItem("username");
    return (
        <>
        <Img src={avatar} alt="profile image" />
        <ChangeImg />
        <User className="menuText" style={{marginTop: "1rem"}}>{username}</User>
        </>
    )
};

export default VenueManager;