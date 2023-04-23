import { useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { registerSchema } from "../../../Validation/registerSchema";
import { URL } from "../../../Utils/constants";
import { registerURL } from "../../../Utils/constants";

 const postData = async (userData) => {
      try {
        const postData = {
          method: "POST",
          headers: {
            "content-Type": "application/json",
          },
          body: JSON.stringify(userData),
        };
        const response = await fetch(URL + registerURL, postData);
        console.log(response);
        const json = await response.json();
        console.log(json);
      } catch (error) {
        console.log(error);
      } finally {
        console.log("finally");
      }
    };

const UserToRegister = () => {
const { register, handleSubmit, formState: { errors }, reset } = useForm(
    {
        resolver: yupResolver(registerSchema),
    }
);

const [ name, setUsername ] = useState("");
const [ email, setEmail ] = useState("");
const [ avatar, setAvatar ] = useState("https://images.unsplash.com/photo-1548266652-99cf27701ced?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80");
const [ venueManager, setVenueManager ] = useState(false);
const [ password, setPassword ] = useState("");

const onUsernameChange = (e) => {
    setUsername(e.target.value);
}
const onEmailChange = (e) => {
    setEmail(e.target.value);
}
const onAvatarChange = (e) => {
    setAvatar(e.target.value);
}
const onVenueManagerChange = (e) => {
    setVenueManager(!venueManager);
    console.log(e.target.value);
}
const onPasswordChange = (e) => {
    setPassword(e.target.value);
}

const onFormSubmit = async () => {
    let bodyContent = {
        name,
        email,
        avatar,
        venueManager,
        password
    };
    console.log(bodyContent);
    const isValid = await registerSchema.isValid(bodyContent);
    console.log("validation: " + isValid);

    postData(bodyContent);
    reset();
    console.log(errors);
}

return (
    <section>
        <div>
            <form onSubmit={handleSubmit(onFormSubmit)}>
                <input {...register("name")} name="name" placeholder="Username" type="text" onChange={onUsernameChange}></input>
                <span>{errors.name?.message}</span>
                <input {...register("email")} name="email" placeholder="email" type="text" required onChange={onEmailChange} ></input>
                <input {...register("avatar")} name="avatar" placeholder="avatar" type="text" onChange={onAvatarChange} ></input>
                <input {...register("venueManager")} name="venueManager" type="checkbox" checked={venueManager} onChange={onVenueManagerChange} ></input>
                <input {...register("password")} name="password" placeholder="password" type="text" required onChange={onPasswordChange} ></input>
                <button type="submit">Register</button>
            </form>
        </div>
    </section>
)

};


export default UserToRegister;