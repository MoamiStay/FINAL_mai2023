import { Link } from "react-router-dom";
import { Button } from "antd";

const NotFound = () => {
    return (
        <section style={{minHeight: "100vh", display: "flex", justifyContent: "center", alignItems: "center"}}>
        <div style={{textAlign: "center", }}>
            <h1>You seem to be a bit lost</h1>
            <Link to="/">Take me back to homepage</Link>
        </div>
        </section>
    )
};

export default NotFound;