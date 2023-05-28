import { useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, Controller } from "react-hook-form";
import { createVenueSchema } from "../../../../Validation/createVenueSchema";
import { URL } from "../../../../Utils/constants";
import { useDispatch } from "react-redux";
import { Row, Col, Button, Input } from "antd";
const { TextArea } = Input;

const createVenueURL = "/api/v1/holidaze/venues";

const CreateVenue = () => {
  const dispatch = useDispatch();

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm({
    resolver: yupResolver(createVenueSchema)
  });

  const [successMsg, setSuccessMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const onFormSubmit = async (data) => {
    const token = localStorage.getItem("authenticate");

    try {
      const response = await fetch(URL + createVenueURL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token
        },
        body: JSON.stringify(data)
      });
      console.log(data);
      const json = await response.json();
      console.log(json);
      console.log(response);

      if (response.ok) {
        reset();
        setErrorMsg("");
        setSuccessMsg("Venue successfully created")
      } else {
        setErrorMsg((json.errors[0].message));
        setSuccessMsg("");
      }
    } catch (error) {
      setErrorMsg(error)
    } finally {
      reset();
    }
  };

  return (
    <section>
      <form onSubmit={handleSubmit(onFormSubmit)}>
        <Row gutter={[16,16]}>
          <Col xs={24} sm={24} md={8} lg={8}>
            <h3>Required</h3>
            <Controller 
              control={control}
              name="name"
              render={({ field }) => (
                <Input style={{marginTop: "10px"}} {...field} placeholder="Venue name" type="text" />
              )}
            />
            <span>{errors.name?.message}</span>

            <Controller
              control={control}
              name="description"
              render={({ field }) => (
                <TextArea allowClear rows={4} style={{marginTop: "10px"}} {...field} placeholder="Description" />
              )}
            />
            <span>{errors.description?.message}</span>

            <Controller
              control={control}
              name="media"
              render={({ field }) => (
                <Input 
                style={{marginTop: "10px"}}
                allowClear
                {...field} 
                placeholder="Image" 
                type="text"
                onChange={(e) => {
                    const mediaArray = [e.target.value];
                    field.onChange(mediaArray);
                }}
                />
              )}
            />
            <span>{errors.media?.message}</span>

            <Controller
              control={control}
              name="price"
              render={({ field }) => (
                <Input style={{marginTop: "10px"}} {...field} placeholder="Price" type="number" />
              )}
            />
            <span>{errors.price?.message}</span>

            <Controller
              control={control}
              name="maxGuests"
              render={({ field }) => (
                <Input
                style={{marginTop: "10px"}}
                  {...field}
                  placeholder="Maximum number of guests"
                  type="number"
                  min={1}
                  max={100}
                />
              )}
            />
            <span>{errors.maxGuests?.message}</span>

            <Controller
              control={control}
              name="rating"
              render={({ field }) => (
                <Input style={{marginTop: "10px"}} {...field} placeholder="Rating" type="number" />
              )}
            />
            <span>{errors.rating?.message}</span>
          </Col>

          <Col xs={24} sm={24} md={8} lg={8}>
            <h3>Meta</h3>
            <label>Wifi</label>
            <Controller
              control={control}
              name="meta.wifi"
              render={({ field }) => ( <Input {...field} placeholder="wifi" type="checkbox" />)} />
            
            <label>Pets</label>
            <Controller
              control={control}
              name="meta.pets"
              render={({ field }) => <Input {...field} type="checkbox" />}
            />

            <label>Breakfast</label>
            <Controller
              control={control}
              name="meta.breakfast"
              render={({ field }) => <Input {...field} type="checkbox" />}
            />

            <label>Parking</label>
            <Controller
              control={control}
              name="meta.parking"
              render={({ field }) => <Input {...field} type="checkbox" />}
            />
          </Col>

          <Col xs={24} sm={24} md={8} lg={8}>
            <h3>Location</h3>
            <Controller
              control={control}
              name="location.address"
              render={({ field }) => (
                <Input style={{marginTop: "10px"}} {...field} placeholder="Address" type="text" />
              )}
            />
            <span>{errors.location?.address?.message}</span>

            <Controller
              control={control}
              name="location.city"
              render={({ field }) => (
                <Input style={{marginTop: "10px"}} {...field} placeholder="City" type="text" />
              )}
            />
            <span>{errors.location?.city?.message}</span>

            <Controller
              control={control}
              name="location.zip"
              render={({ field }) => (
                <Input style={{marginTop: "10px"}} {...field} placeholder="ZIP code" type="text" />
              )}
            />
            <span>{errors.location?.zip?.message}</span>

            <Controller
              control={control}
              name="location.country"
              render={({ field }) => (
                <Input style={{marginTop: "10px"}} {...field} placeholder="Country" type="text" />
              )}
            />
            <span>{errors.location?.country?.message}</span>
          </Col>
        </Row>
        <div style={{display: "flex", flexDirection: "column"}}>
        <span style={{margin: "15px 0 15px 0", fontSize: "larger", color: "green", textAlign: "center"}}>{successMsg}</span>
        <span style={{margin: "15px 0 15px 0", fontSize: "larger", color: "red", textAlign: "center"}}>{errorMsg}</span>
        <Button style={{marginTop: "10px", width: "10%"}} type="primary" htmlType="submit">
          Register
        </Button>
        </div>
      </form>
    </section>
  );
};

export default CreateVenue;

