import { useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { registerSchema } from "../../../Validation/registerSchema";
import { URL } from "../../../Utils/constants";
import { registerURL } from "../../../Utils/constants";
import { Link } from "react-router-dom";

const CreateVenue = () => {
const { register, handleSubmit, formState: { errors }, reset } = useForm(
    {
        resolver: yupResolver(registerSchema),
    }
);

const [ name, setVenueName ] = useState("");
const [ description, setDescription ] = useState("");
const [ media, setMedia ] = useState([])
const [ price, setPrice ] = useState(0);
const [ maxGuests, setMaxguests ] = useState(100);
const [ rating, setRating ] = useState(0);
const [ meta, setMeta ] = useState({
    wifi: false,
    parking: false,
    breakfast: false,
    pets: false,
});
const [ location, setLocation ] = useState({
    address: "",
    city: "",
    zip: "",
    country: "",
    continent: "",
    lat: 0,
    lng: 0,
})
const [ errorMsg, setErrorMsg ] = useState("");


const onVenueNameChange = (e) => {
    // setUsername(e.target.value);
}
const onDescriptionChange = (e) => {
    // setEmail(e.target.value);
}
const onMediaChange = (e) => {
    // setVenueManager(!venueManager);
}
const onPriceChange = (e) => {
    // setPassword(e.target.value);
}
const onMaxguestsChange = (e) => {
    // setConfirmPassword(e.target.value);
}
const onRatingChange = (e) => {
    //
}
const onMetaChange = (e) => {
    //
}
const onLocationChange = (e) => {
    //
}


const onFormSubmit = async () => {
    let bodyContent = {
        name,
        description,
        media,
        price,
        maxGuests,
        rating, 
        meta,
        location
    };
    console.log(bodyContent);
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
            reset();
            setErrorMsg("Venue successfully created ! =)")
        }

    //     for(let item of json.errors) {
    //         if (item.message === "Profile already exists") {
    //         setErrorMsg("Profile already exists");
    //         } else if (item) {
    //         setErrorMsg("Something went wrong"); 
    //     }
    //   }

      } catch (error) {
        console.log(error);
      } finally {
        // reset();
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

export default CreateVenue;