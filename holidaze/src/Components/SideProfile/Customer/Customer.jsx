import { useSelector } from "react-redux";
import ChangeImg from "../Avatar/ChangeImg";
import { Img, User } from "./styles";

const Customer = () => {
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

export default Customer;

