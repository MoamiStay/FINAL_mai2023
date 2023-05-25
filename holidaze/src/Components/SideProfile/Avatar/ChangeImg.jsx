import InputNewAvatar from "./InputNewAvatar";
import { useState } from "react";
import { Button } from "antd";

const ChangeImg = () => {
    const [ isToggled, setIsToggled ] = useState(false);

    return (
        <>
        <Button type="link" style={{ display: "block", width: "100%",  color: "white"}} onClick={() => setIsToggled(!isToggled)}>Edit</Button>
        {isToggled && <InputNewAvatar />}
        </>
    )
}

export default ChangeImg;