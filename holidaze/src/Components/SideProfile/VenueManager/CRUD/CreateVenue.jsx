import { useState, useEffect } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, Controller } from "react-hook-form";
import { createVenueSchema } from "../../../../Validation/createVenueSchema";
import { URL } from "../../../../Utils/constants";
import { useDispatch } from "react-redux";
import { Row, Col, Button, Input } from "antd";

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
        setErrorMsg("Venue successfully created! =)");
      } else {
        setErrorMsg("Something went wrong");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section>
      <form onSubmit={handleSubmit(onFormSubmit)}>
        <Row gutter={[16, 16]}>
          <Col xs={24} sm={24} md={8} lg={8}>
            <h3>Required</h3>
            <Controller
              control={control}
              name="name"
              render={({ field }) => (
                <Input {...field} placeholder="Venue name" type="text" />
              )}
            />
            <span>{errors.name?.message}</span>

            <Controller
              control={control}
              name="description"
              render={({ field }) => (
                <Input {...field} placeholder="Description" type="text" />
              )}
            />
            <span>{errors.description?.message}</span>

            <Controller
              control={control}
              name="media"
              render={({ field }) => (
                <Input 
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
                <Input {...field} placeholder="Price" type="number" />
              )}
            />
            <span>{errors.price?.message}</span>

            <Controller
              control={control}
              name="maxGuests"
              render={({ field }) => (
                <Input
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
                <Input {...field} placeholder="Rating" type="number" />
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
                <Input {...field} placeholder="Address" type="text" />
              )}
            />
            <span>{errors.location?.address?.message}</span>

            <Controller
              control={control}
              name="location.city"
              render={({ field }) => (
                <Input {...field} placeholder="City" type="text" />
              )}
            />
            <span>{errors.location?.city?.message}</span>

            <Controller
              control={control}
              name="location.zip"
              render={({ field }) => (
                <Input {...field} placeholder="ZIP code" type="text" />
              )}
            />
            <span>{errors.location?.zip?.message}</span>

            <Controller
              control={control}
              name="location.country"
              render={({ field }) => (
                <Input {...field} placeholder="Country" type="text" />
              )}
            />
            <span>{errors.location?.country?.message}</span>
          </Col>
        </Row>
        <span>{errorMsg}</span>
        <Button type="primary" htmlType="submit">
          Register
        </Button>
      </form>
    </section>
  );
};

export default CreateVenue;

