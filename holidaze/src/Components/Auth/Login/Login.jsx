import { useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { URL } from "../../../Utils/constants";
import { loginURL } from "../../../Utils/constants";
import { loginSchema } from "../../../Validation/loginSchema";
import { useSelector, useDispatch } from "react-redux";
// import { loggedin } from "../../../Redux/LoggedSlice";
import { onLogin } from "../../../Redux/AvatarSlice";


const UserToLogin = () => {

const { register, handleSubmit, formState: { errors }, reset } = useForm(
    {
        resolver: yupResolver(loginSchema),
    }
);

const [ email, setEmail ] = useState("");
const [ password, setPassword ] = useState("");
const [ errorMsg, setErrorMsg ] = useState("");
const dispatch = useDispatch();
const statuss = useSelector((state) => state.logged.statuss);
const avatar = useSelector((state) => state.avatar.avatar);

const onEmailChange = (e) => {
    setEmail(e.target.value);
}
const onPasswordChange = (e) => {
    setPassword(e.target.value);
}

const onFormSubmit = async () => {
    let bodyContent = {
        email,
        password
    };
    // console.log(bodyContent);
    const isValid = await loginSchema.isValid(bodyContent);
    // console.log("Validation: " + isValid)

      try {
        const postData = {
          method: "POST",
          headers: {
            "content-Type": "application/json",
          },
          body: JSON.stringify(bodyContent),
        };
        const response = await fetch(URL + loginURL, postData);
        // console.log(response);
        const json = await response.json();
        // console.log(json);

        if(response.ok) {
            localStorage.setItem("authenticate", json.accessToken)
            localStorage.setItem("venueManager", json.venueManager)
            localStorage.setItem("username", json.name)
            localStorage.setItem("avatar", json.avatar)
            setErrorMsg("Login successful");
            dispatch(
                onLogin({
                    avatarImg: json.avatar,
            }))
        //     const setTrue = () => {
        //     dispatch(loggedin()) 
        // } 

        // setTrue()
            // return redirect("/Home");
        }

        for(let item of json.errors) {
            if (item.message === "Invalid email or password") {
            setErrorMsg("Invalid email or password");
            } else if (item) {
            setErrorMsg("Invalid email or password"); 
        }
      }
      } catch (error) {
        console.log(error);
      } finally {
        reset();
        // console.log("statuss: " + statuss);
      };
}


return (
    <section>
        <div>
            <form onSubmit={handleSubmit(onFormSubmit)}>
                <input {...register("email", { required: true })} name="email" placeholder="email" type="text" required onChange={onEmailChange} ></input>
                <span>{errors.email?.message}</span>
                <input {...register("password")} name="password" placeholder="password" type="password" required onChange={onPasswordChange} ></input>
                <span>{errors.password?.message}</span>
                <span>{errorMsg}</span>

                <button type="submit">Login</button>

            </form>
        </div>
    </section>
)

};

export default UserToLogin;