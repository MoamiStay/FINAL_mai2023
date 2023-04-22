import { URL } from "../../../Utils/constants";
import { register } from "../../../Utils/constants";
import usePostApi from "../../../Hooks/usePostApi";

const userToRegister = {
  name: "NJYIWc89j2DBPTE3Q",
  email: "ljkasbflksjf@noroff.no",
  avatar: "https://images.unsplash.com/photo-1681892012507-fad70e921802?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80",
  venueManager: false,
  password: "stringst"
}

const RegisterUser = () => {
    const { data, isLoading, isError } = usePostApi(URL + register, userToRegister);
    console.log(data);
    // Create userToRegister input
    // validation
    // errorhandling
    return (
        <>
        <h1>REGISTRATION</h1>
        </>
    )
};

export default RegisterUser;