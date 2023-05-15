import { useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { createVenueSchema } from "../../../../Validation/createVenueSchema";
import { URL } from "../../../../Utils/constants";
const createVenueURL = "/api/v1/holidaze/venues";

const CreateVenue = () => {
const { register, handleSubmit, formState: { errors }, reset } = useForm(
    {
        resolver: yupResolver(createVenueSchema),
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
    setVenueName(e.target.value);
}
const onDescriptionChange = (e) => {
    setDescription(e.target.value);
}
const onMediaChange = (e) => {
    setMedia([e.target.value]);
}
const onPriceChange = (e) => {
    // let price = e.target.value;
    setPrice(Number(e.target.value)); // must be a number
}
const onMaxGuestsChange = (e) => {
    // let guests = e.target.value;
    setMaxguests(Number(e.target.value)); // must be a number
}
const onRatingChange = (e) => {
    setRating(Number(e.target.value)); // must be a number
}
const onMetaWifiChange = () => {
    setMeta({
        wifi: !meta.wifi,
        parking: meta.parking,
        breakfast: meta.breakfast,
        pets: meta.pets,
    })
}
const onMetaParkingChange = () => {
    setMeta({
        wifi: meta.wifi,
        parking: !meta.parking,
        breakfast: meta.breakfast,
        pets: meta.pets,
    })
}
const onMetaBreakfastChange = () => {
    setMeta({
        wifi: meta.wifi,
        parking: meta.parking,
        breakfast: !meta.breakfast,
        pets: meta.pets,
    })
}
const onMetaPetsChange = () => {
    setMeta({
        wifi: meta.wifi,
        parking: meta.parking,
        breakfast: meta.breakfast,
        pets: !meta.pets,
    })
}
const onLocationAddressChange = (e) => {
    setLocation({
    address: e.target.value,
    city: location.city,
    zip: location.zip,
    country: location.country,
    continent: location.continent,
    })
}
const onLocationCityChange = (e) => {
    setLocation({
    address: location.address,
    city: e.target.value,
    zip: location.zip,
    country: location.country,
    continent: location.continent,
    })
}
const onLocationZipChange = (e) => {
    setLocation({
    address: location.address,
    city: location.city,
    zip: e.target.value,
    country: location.country,
    continent: location.continent,
    })
}
const onLocationCountryChange = (e) => {
    setLocation({
    address: location.address,
    city: location.city,
    zip: location.zip,
    country: e.target.value,
    continent: location.continent,
    })
}
const onLocationContinentChange = (e) => {
    setLocation({
    address: location.address,
    city: location.city,
    zip: location.zip,
    country: location.country,
    continent: e.target.value,
    })
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
    const isValid = await createVenueSchema.isValid(bodyContent);
    console.log("Validation: " + isValid)
    const token = localStorage.getItem("authenticate");

      try {
        const postData = {
          method: "POST",
          headers: {
            "content-Type": "application/json",
            "Authorization": "Bearer " + token,
          },
          body: JSON.stringify(bodyContent),
        };
        const response = await fetch(URL + createVenueURL, postData);
        console.log(response);
        const json = await response.json();
        console.log(json);

        if(response.ok) {
            reset();
            setErrorMsg("Venue successfully created ! =)")
        } else {
            setErrorMsg("Something went wrong")
        }

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
                <input {...register("name")} name="name" placeholder="Venue name" type="text" required onChange={onVenueNameChange}></input>
                <span>{errors.name?.message}</span>
                <input {...register("description", { required: true })} name="description" placeholder="description" type="text" required onChange={onDescriptionChange} ></input>
                <span>{errors.description?.message}</span>
                <input {...register("media")} name="media" type="text" placeholder="images" onChange={onMediaChange} ></input>
                <span>{errors.media?.message}</span>
                <input {...register("price")} name="price" placeholder="price" type="number" required onChange={onPriceChange} ></input>
                <span>{errors.price?.message}</span>
                <input {...register("maxGuests")} name="maxGuests" placeholder="Maximum number of guests" type="number" required onChange={onMaxGuestsChange} ></input>
                <span>{errors.maxGuests?.message}</span>
                <input {...register("rating")} name="rating" placeholder="rating" type="number" onChange={onRatingChange}></input>
                <span>{errors.rating?.message}</span>
                <h3>Meta:</h3>
                <label>Wifi</label>
                <input {...register("wifi")} type="checkbox" name="wifi" onChange={onMetaWifiChange}></input>
                <label>Parking</label>
                <input {...register("parking")} type="checkbox" name="parking" onChange={onMetaParkingChange}></input>
                <label>Breakfast</label>
                <input {...register("breakfast")} type="checkbox" name="Breakfast" onChange={onMetaBreakfastChange}></input>
                <label>Pets</label>
                <input {...register("pets")} type="checkbox" name="pets" onChange={onMetaPetsChange}></input>
                <h3>Location:</h3>
                <input {...register("address")} name="address" value={location.address} placeholder="address" type="text" onChange={onLocationAddressChange}></input>
                <span>{errors.location?.message}</span>
                <input {...register("city")} name="city" value={location.city} placeholder="city" type="text" onChange={onLocationCityChange}></input>
                <span>{errors.location?.message}</span>
                <input {...register("zip")} name="zip" value={location.zip} placeholder="zip" type="text" onChange={onLocationZipChange}></input>
                <span>{errors.location?.message}</span>
                <input {...register("country")} name="country" value={location.country} placeholder="country" type="text" onChange={onLocationCountryChange}></input>
                <span>{errors.location?.message}</span>
                <input {...register("continent")} name="continent" value={location.continent} placeholder="continent" type="text" onChange={onLocationContinentChange}></input>
                <span>{errors.location?.message}</span>
                {/* <input {...register("location")} name="lat" placeholder="lat" type="text" onChange={onLocationChange}></input>
                <span>{errors.location?.message}</span>
                <input {...register("location")} name="lng" placeholder="lng" type="text" onChange={onLocationChange}></input>
                <span>{errors.location?.message}</span> */}
                
                <span>{errorMsg}</span>

                <button type="submit">Register</button>
            </form>
        </div>
    </section>
)
};

export default CreateVenue;