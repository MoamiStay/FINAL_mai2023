import InputNewAvatar from "./InputNewAvatar";
import { useState } from "react";

const ChangeImg = () => {
    const [ isToggled, setIsToggled ] = useState(false);

    // const EditImg = () => {
    //     localStorage.setItem("avatar", "this")
    // }

    return (
        <>
        <button onClick={() => setIsToggled(!isToggled)}>Edit profile image</button>
        {isToggled && <InputNewAvatar />}
        </>
    )
}

export default ChangeImg;