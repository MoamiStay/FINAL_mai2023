import { URL } from "../../../Utils/constants";
import { loginURL } from "../../../Utils/constants";
import usePostApi from "../../../Hooks/usePostApi";

const userToLogin = {
    email: "ljkasbflksjf@noroff.no",
    password: "stringst"
};

const Login = () => {
        const { data, isLoading, isError } = usePostApi(URL + loginURL, userToLogin);
        console.log(data);
        // Create userToLogin input
        // Store returned Accesstoken
        // Handle Avatar for later change
        // validation
        // errorhandling
    return (
        <>
        <h1>LOGIN</h1>
        </>
    )
};

export default Login;