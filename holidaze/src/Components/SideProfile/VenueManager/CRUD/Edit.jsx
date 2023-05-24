import { useParams, useNavigate, Navigate } from "react-router-dom";
import { URL } from "../../../../Utils/constants";
import { useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { editVenueSchema } from "../../../../Validation/editVenueSchema";
import useApi from "../../../../Hooks/useApi";
const editEndpoint = "/api/v1/holidaze/venues/"; 

const Edit = () => {
    const { id } = useParams();
    const { data, isLoading, isError } = useApi(URL + editEndpoint + id )
    // console.log(data)

    const dispatch = useDispatch();
    const navigate = useNavigate();

const { register, handleSubmit, formState: { errors }, reset } = useForm(
    {
        resolver: yupResolver(editVenueSchema),
    }
);

const [ name, setVenueName ] = useState("");
const [ description, setDescription ] = useState("");
const [ media, setMedia ] = useState([])
const [ price, setPrice ] = useState(0);
const [ maxGuests, setMaxGuests ] = useState(100);
const [ rating, setRating ] = useState(0);
const [ meta, setMeta ] = useState({
    breakfast: false,
    parking: false,
    pets: false,
    wifi: false,
});
const [ wifiChecked, setWifiChecked ] = useState(false);
const [ parkingChecked, setParkingChecked ] = useState(false);
const [ breakfastChecked, setBreakfastChecked ] = useState(false);
const [ petsChecked, setPetsChecked ] = useState(false);

const [ location, setLocation ] = useState({
    address: "",
    city: "",
    zip: "",
    country: "",
    continent: "",
})

  useEffect(() => {
    if (data) {
        setVenueName(data.name || "");
        setDescription(data.description || "");
        setMedia(data.media || []);
        setPrice(data.price || 0);
        setMaxGuests(data.maxGuests || 0);
        setRating(data.rating || 0);

      setWifiChecked(data.meta?.wifi || false);
      setParkingChecked(data.meta?.parking || false);
      setBreakfastChecked(data.meta?.breakfast || false);
      setPetsChecked(data.meta?.pets || false);

    setMeta({
        breakfast: breakfastChecked,
        parking: parkingChecked,
        pets: petsChecked,
        wifi: wifiChecked,
    })
      
      setLocation({
      address: data.location?.address || "",
      city: data.location?.city || "",
      zip: data.location?.zip || "",
      country: data.location?.country || "",
      continent: data.location?.continent || "",
      })
    }
  }, [data]);

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
    setPrice(Number(e.target.value));
}
const onMaxGuestsChange = (e) => {
    setMaxGuests(Number(e.target.value));
}
const onRatingChange = (e) => {
    setRating(Number(e.target.value));
}
const onMetaWifiChange = (e) => {
  const checked = e.target.checked;
  setWifiChecked(checked);
  setMeta((prevState) => ({
    ...prevState,
    wifi: checked,
  }));
}
const onMetaParkingChange = (e) => {
  const checked = e.target.checked;
  setParkingChecked(checked);
  setMeta((prevState) => ({
    ...prevState,
    parking: checked,
  }));
}
const onMetaBreakfastChange = (e) => {
  const checked = e.target.checked;
  setBreakfastChecked(checked);
  setMeta((prevState) => ({
    ...prevState,
    breakfast: checked,
  }));
}
const onMetaPetsChange = (e) => {
  const checked = e.target.checked;
  setPetsChecked(checked);
  setMeta((prevState) => ({
    ...prevState,
    pets: checked,
  }));
};
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
    const isValid = await editVenueSchema.isValid(bodyContent);
    console.log("Validation: " + isValid)
    const token = localStorage.getItem("authenticate");

      try {
        const postData = {
          method: "PUT",
          headers: {
            "content-Type": "application/json",
            "Authorization": "Bearer " + token,
          },
          body: JSON.stringify(bodyContent),
        };
        const response = await fetch(URL + editEndpoint + id, postData);
        // console.log(response);
        const json = await response.json();
        // console.log(json);

        if(response.ok) {
            reset();
            setErrorMsg("Venue changes successfully registered ! =)")
        } else {
            setErrorMsg("Something went wrong..")
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
        <button onClick={() => {navigate(-1)}}>Homepage</button>
      </div>
        <div>
            <form onSubmit={handleSubmit(onFormSubmit)}>
                <input {...register("name")} name="name" value={name} placeholder="Venue name" type="text" onChange={onVenueNameChange}></input>
                <span>{errors.name?.message}</span>
                <input {...register("description")} name="description" value={description} placeholder="Description" type="text" onChange={onDescriptionChange} ></input>
                <span>{errors.description?.message}</span>
                <input {...register("media")} name="media" type="text" value={media} placeholder="Change image" onChange={onMediaChange} ></input>
                <span>{errors.media?.message}</span>
                <input {...register("price")} name="price" value={price} placeholder="0" type="number" onChange={onPriceChange} ></input>
                <span>{errors.price?.message}</span>
                <input {...register("maxGuests")} name="maxGuests" value={maxGuests} placeholder="Maximum amount of guests" type="number" onChange={onMaxGuestsChange} ></input>
                <span>{errors.maxGuests?.message}</span>
                <input {...register("rating")} name="rating" value={rating} placeholder="Rating" type="number" onChange={onRatingChange}></input>
                <span>{errors.rating?.message}</span>
                <h3>Meta:</h3>
                <label>Wifi</label>
                <input {...register("wifi")} type="checkbox" name="wifi" checked={wifiChecked} onChange={onMetaWifiChange}></input>
                <label>Parking</label>
                <input {...register("parking")} type="checkbox" name="parking" checked={parkingChecked} onChange={onMetaParkingChange}></input>
                <label>Breakfast</label>
                <input {...register("breakfast")} type="checkbox" name="Breakfast" checked={breakfastChecked} onChange={onMetaBreakfastChange}></input>
                <label>Pets</label>
                <input {...register("pets")} type="checkbox" name="pets" checked={petsChecked} onChange={onMetaPetsChange}></input>
                <h3>Location:</h3>
                <input {...register("address")} name="address" value={location.address} placeholder={data.location?.address} type="text" onChange={onLocationAddressChange}></input>
                <span>{errors.location?.message}</span>
                <input {...register("city")} name="city" value={location.city} placeholder={data.location?.city} type="text" onChange={onLocationCityChange}></input>
                <span>{errors.location?.message}</span>
                <input {...register("zip")} name="zip" value={location.zip} placeholder={data.location?.zip} type="text" onChange={onLocationZipChange}></input>
                <span>{errors.location?.message}</span>
                <input {...register("country")} name="country" value={location.country} placeholder={data.location?.country} type="text" onChange={onLocationCountryChange}></input>
                <span>{errors.location?.message}</span>
                <input {...register("continent")} name="continent" value={location.continent} placeholder={data.location?.continent} type="text" onChange={onLocationContinentChange}></input>
                <span>{errors.location?.message}</span>
                
                <span>{errorMsg}</span>

                <button type="submit">Save Changes</button>
            </form>
        </div>
    </section>
)
}

export default Edit;