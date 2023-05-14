import InputNewAvatar from "./InputNewAvatar";
import { useState } from "react";

const ChangeImg = () => {
    const [ isToggled, setIsToggled ] = useState(false);

    return (
        <>
        <button onClick={() => setIsToggled(!isToggled)}>Edit profile image</button>
        {isToggled && <InputNewAvatar />}
        </>
    )
}

export default ChangeImg;