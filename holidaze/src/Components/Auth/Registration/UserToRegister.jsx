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
      } finally {
        for(let item of json.errors) {
            if (item.message === "Profile already exists")
            console.log("Profile existing");
            return setCheckProfile("Profile already exists");
        }
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
const [ confirmPassword, setConfirmPassword ] = useState("");


const onUsernameChange = (e) => {
    setUsername(e.target.value);
}
const onEmailChange = (e) => {
    setEmail(e.target.value);
}
// const onAvatarChange = (e) => {
//     setAvatar(e.target.value);
// }
const onVenueManagerChange = (e) => {
    setVenueManager(!venueManager);
}
const onPasswordChange = (e) => {
    setPassword(e.target.value);
}

const onConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
}

const onFormSubmit = async () => {
    let bodyContent = {
        name,
        email,
        avatar,
        venueManager,
        password,
        confirmPassword
    };
    console.log(bodyContent);
    const isValid = await registerSchema.isValid(bodyContent);
    // console.log("Validation: " + isValid)

    postData(bodyContent);
    reset();
}

return (
    <section>
        <div>
            <form onSubmit={handleSubmit(onFormSubmit)}>
                <input {...register("name")} name="name" placeholder="Username" type="text" required onChange={onUsernameChange}></input>
                <span>{errors.name?.message}</span>
                <input {...register("email", { required: true })} name="email" placeholder="email" type="text" required onChange={onEmailChange} ></input>
                <span>{errors.email?.message}</span>
                {/* <input {...register("avatar")} name="avatar" placeholder="avatar" type="text" onChange={onAvatarChange} ></input>
                <span>{errors.avatar?.message}</span> */}
                <label>Venue Manager</label>
                <input {...register("venueManager")} name="venueManager" type="checkbox" checked={venueManager} onChange={onVenueManagerChange} ></input>
                <span>{errors.benueManager?.message}</span>
                <input {...register("password")} name="password" placeholder="password" type="text" required onChange={onPasswordChange} ></input>
                <span>{errors.password?.message}</span>
                <input {...register("confirmPassword")} name="confirmPassword" placeholder="Confirm Password" type="text" required onChange={onConfirmPasswordChange} ></input>
                <span>{errors.confirmPassword?.message}</span>

                <button type="submit">Register</button>
            </form>
        </div>
    </section>
)

};


export default UserToRegister;