import { useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { registerSchema } from "../../../Validation/registerSchema";
import { URL } from "../../../Utils/constants";
import { registerURL } from "../../../Utils/constants";
import { Link } from "react-router-dom";


const UserToRegister = () => {
const { register, handleSubmit, formState: { errors }, reset } = useForm(
    {
        resolver: yupResolver(registerSchema),
    }
);

const [ name, setUsername ] = useState("");
const [ email, setEmail ] = useState("");
const avatar = "https://images.unsplash.com/photo-1548266652-99cf27701ced?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80";
const [ venueManager, setVenueManager ] = useState(false);
const [ password, setPassword ] = useState("");
const [ confirmPassword, setConfirmPassword ] = useState("");
const [ errorMsg, setErrorMsg ] = useState("");


const onUsernameChange = (e) => {
    setUsername(e.target.value);
}
const onEmailChange = (e) => {
    setEmail(e.target.value);
}
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
    // console.log(bodyContent);
    const isValid = await registerSchema.isValid(bodyContent);
    // console.log("Validation: " + isValid)

      try {
        const postData = {
          method: "POST",
          headers: {
            "content-Type": "application/json",
          },
          body: JSON.stringify(bodyContent),
        };
        const response = await fetch(URL + registerURL, postData);
        console.log(response);
        const json = await response.json();
        console.log(json);

        if(response.ok) {
            setErrorMsg("Registration successful redirecting to login .. ")
            
        }

        for(let item of json.errors) {
            if (item.message === "Profile already exists") {
            setErrorMsg("Profile already exists");
            } else if (item) {
            setErrorMsg("Something went wrong"); 
        }
      }

      } catch (error) {
        console.log(error);
      } finally {
        reset();
      };

}

return (
    <section>
        <div>
            <form onSubmit={handleSubmit(onFormSubmit)}>
                <input {...register("name")} name="name" placeholder="Username" type="text" required onChange={onUsernameChange}></input>
                <span>{errors.name?.message}</span>
                <input {...register("email", { required: true })} name="email" placeholder="email" type="text" required onChange={onEmailChange} ></input>
                <span>{errors.email?.message}</span>
                <label>Venue Manager</label>
                <input {...register("venueManager")} name="venueManager" type="checkbox" checked={venueManager} onChange={onVenueManagerChange} ></input>
                <span>{errors.benueManager?.message}</span>
                <input {...register("password")} name="password" placeholder="password" type="password" required onChange={onPasswordChange} ></input>
                <span>{errors.password?.message}</span>
                <input {...register("confirmPassword")} name="confirmPassword" placeholder="Confirm Password" type="password" required onChange={onConfirmPasswordChange} ></input>
                <span>{errors.confirmPassword?.message}</span>
                <span>{errorMsg}</span>

                <button type="submit">Register</button>
            </form>
        </div>
    </section>
)
};


export default UserToRegister;




























































//  const postData = async (userData) => {
//       try {
//         const postData = {
//           method: "POST",
//           headers: {
//             "content-Type": "application/json",
//           },
//           body: JSON.stringify(userData),
//         };
//         const response = await fetch(URL + registerURL, postData);
//         console.log(response);
//         const json = await response.json();
//         console.log(json);

//         // for(let item of json.errors) {
//         //     if (item.message === "Profile already exists")
//         //     return kroll = "Profile already exists";
//         // }

//       } catch (error) {
//         return (
//             <>
//             <h1>{error}</h1>
//             <p>HELLAFUNP</p>
//             </>
//         )
//       } finally {
//         console.log("finally");
//       }
//     };






// const UserToRegister = () => {
// const { register, handleSubmit, formState: { errors }, reset } = useForm(
//     {
//         resolver: yupResolver(registerSchema),
//     }
// );

// const [ name, setUsername ] = useState("");
// const [ email, setEmail ] = useState("");
// const [ avatar, setAvatar ] = useState("https://images.unsplash.com/photo-1548266652-99cf27701ced?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80");
// const [ venueManager, setVenueManager ] = useState(false);
// const [ password, setPassword ] = useState("");
// const [ confirmPassword, setConfirmPassword ] = useState("");
// const [ errorMsg, setErrorMsg ] = useState("");


// const onUsernameChange = (e) => {
//     setUsername(e.target.value);
// }
// const onEmailChange = (e) => {
//     setEmail(e.target.value);
// }
// // const onAvatarChange = (e) => {
// //     setAvatar(e.target.value);
// // }
// const onVenueManagerChange = (e) => {
//     setVenueManager(!venueManager);
// }
// const onPasswordChange = (e) => {
//     setPassword(e.target.value);
// }

// const onConfirmPasswordChange = (e) => {
//     setConfirmPassword(e.target.value);
// }

// const onFormSubmit = async () => {
//     let bodyContent = {
//         name,
//         email,
//         avatar,
//         venueManager,
//         password,
//         confirmPassword
//     };
//     console.log(bodyContent);
//     const isValid = await registerSchema.isValid(bodyContent);
//     console.log("Validation: " + isValid)

//     postData(bodyContent);
//     reset();
// }

// return (
//     <section>
//         <div>
//             <form onSubmit={handleSubmit(onFormSubmit)}>
//                 <input {...register("name")} name="name" placeholder="Username" type="text" required onChange={onUsernameChange}></input>
//                 <span>{errors.name?.message}</span>
//                 <input {...register("email", { required: true })} name="email" placeholder="email" type="text" required onChange={onEmailChange} ></input>
//                 <span>{errors.email?.message}</span>
//                 {/* <input {...register("avatar")} name="avatar" placeholder="avatar" type="text" onChange={onAvatarChange} ></input>
//                 <span>{errors.avatar?.message}</span> */}
//                 <label>Venue Manager</label>
//                 <input {...register("venueManager")} name="venueManager" type="checkbox" checked={venueManager} onChange={onVenueManagerChange} ></input>
//                 <span>{errors.benueManager?.message}</span>
//                 <input {...register("password")} name="password" placeholder="password" type="password" required onChange={onPasswordChange} ></input>
//                 <span>{errors.password?.message}</span>
//                 <input {...register("confirmPassword")} name="confirmPassword" placeholder="Confirm Password" type="password" required onChange={onConfirmPasswordChange} ></input>
//                 <span>{errors.confirmPassword?.message}</span>
//                 <span>{errorMsg}</span>

//                 <button type="submit">Register</button>
//             </form>
//         </div>
//     </section>
// )

// };


// export default UserToRegister;
















