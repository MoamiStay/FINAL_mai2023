import { useNavigate } from "react-router-dom";
import { Spin } from "antd";

const Logout = () => {
    const navigate = useNavigate();

    if (localStorage.getItem("authenticate") === null) {
        console.log("authenticate gone");
    setTimeout(() => {
        navigate("/")
    }, 3000);
    }

    return (
        <section style={{minHeight: "100vh", display: "flex", justifyContent: "center", alignItems: "center"}}>
        <div style={{textAlign: "center", }}>
            <h1>You have successfully logged out</h1>
            <Spin style={{padding: "10px"}} />
            <p>Redirecting back to homepage..</p>
        </div>
        </section>
    )
}

export default Logout;