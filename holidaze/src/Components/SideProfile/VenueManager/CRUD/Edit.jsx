import { useParams, useNavigate } from "react-router-dom";
import { URL } from "../../../../Utils/constants";
import { useEffect, useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, Controller } from "react-hook-form";
import { useDispatch } from "react-redux";
import { editVenueSchema } from "../../../../Validation/editVenueSchema";
import useApi from "../../../../Hooks/useApi";
import { Row, Col, Form, Input, Button, Checkbox, Spin } from "antd";
const { TextArea } = Input;

const editEndpoint = "/api/v1/holidaze/venues/";

const Edit = () => {
  const { id } = useParams();
  const { data, isLoading, isError } = useApi(URL + editEndpoint + id);

  const [successMsg, setSuccessMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(editVenueSchema),
  });

  useEffect(() => {
    if (data) {
      reset(data);
    }
  }, [data, reset]);

  const onFormSubmit = async (formData) => {
    const token = localStorage.getItem("authenticate");

    try {
      const postData = {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
        body: JSON.stringify(formData),
      };
      const response = await fetch(URL + editEndpoint + id, postData);
      const json = await response.json();

      if (response.ok) {
        reset();
        setSuccessMsg("Venue successfully updated");
        setErrorMsg(<Spin />)
        setTimeout(() => {
          navigate("/VenueDetails/" + id)
        }, 3000);

      } else {
        setErrorMsg((json.errors[0].message));
        setSuccessMsg("");
      }
    } catch (error) {
      setErrorMsg(error);
    } finally {
    }
  };

  return (
    <section>
      <Form onFinish={handleSubmit(onFormSubmit)}>
        <Row gutter={[16, 16]}>
          <Col xs={24} sm={24} md={8} lg={8}>
        <Form.Item label="Venue Name" validateStatus={errors.name ? "error" : ""} help={errors.name?.message}>
          <Controller
            control={control}
            name="name"
            defaultValue={data?.name || ""}
            render={({ field }) => <Input {...field} />}
          />
        </Form.Item>

        <Form.Item label="Description" validateStatus={errors.description ? "error" : ""} help={errors.description?.message}>
          <Controller
            control={control}
            name="description"
            defaultValue={data?.description || ""}
            render={({ field }) => <TextArea allowClear rows={4} {...field} />}
          />
        </Form.Item>

        <Form.Item label="Change Image" validateStatus={errors.media ? "error" : ""} help={errors.media?.message}>
          <Controller
            control={control}
            name="media"
            defaultValue={data?.media || ""}
            render={({ field }) => (
            <Input 
            allowClear
            {...field}
            onChange={(e) => {
              const mediaArray = [e.target.value];
              field.onChange(mediaArray);
            }}
            />)}
          />
        </Form.Item>

        <Form.Item label="Price" validateStatus={errors.price ? "error" : ""} help={errors.price?.message}>
          <Controller
            control={control}
            name="price"
            defaultValue={data?.price || 0}
            render={({ field }) => <Input {...field} type="number" />}
          />
        </Form.Item>

        <Form.Item label="Maximum guests" validateStatus={errors.maxGuests ? "error" : ""} help={errors.maxGuests?.message}>
          <Controller
            control={control}
            name="maxGuests"
            defaultValue={data?.maxGuests || 0}
            render={({ field }) => (
            <Input 
            {...field} 
            type="number"
            min={1}
            max={100} 
            />
            )}
          />
        </Form.Item>

        <Form.Item label="Rating" validateStatus={errors.rating ? "error" : ""} help={errors.rating?.message}>
          <Controller
            control={control}
            name="rating"
            defaultValue={data?.rating || 0}
            render={({ field }) => (
            <Input 
            {...field} 
            type="number"
            min={0}
            max={5} 
            />
            )}
          />
        </Form.Item>
        </Col>

        <Col xs={24} sm={24} md={8} lg={8}>
          <h3>Meta</h3>
          <Form.Item label="Wifi" validateStatus={errors.wifi ? "error" : ""} help={errors.wifi?.message}>
            <Controller
              control={control}
              name="meta.wifi"
              defaultValue={data?.meta?.wifi || false}
              render={({ field }) => ( 
              <Checkbox {...field} checked={field.value} onChange={(e) => field.onChange(e.target.checked)}>
              </Checkbox>
              )} 
              />
          </Form.Item>

          <Form.Item label="Pets" validateStatus={errors.pets ? "error" : ""} help={errors.pets?.message}>
            <Controller
              control={control}
              name="meta.pets"
              defaultValue={data?.meta?.pets || false}
              render={({ field }) => ( 
              <Checkbox {...field} checked={field.value} onChange={(e) => field.onChange(e.target.checked)}>
              </Checkbox>
              )} 
              />
          </Form.Item>

          <Form.Item label="Breakfast" validateStatus={errors.breakfast ? "error" : ""} help={errors.breakfast?.message}>
            <Controller
              control={control}
              name="meta.breakfast"
              defaultValue={data?.meta?.breakfast || false}
              render={({ field }) => ( 
              <Checkbox {...field} checked={field.value} onChange={(e) => field.onChange(e.target.checked)}>
              </Checkbox>
              )} 
              />
          </Form.Item>

          <Form.Item label="Parking" validateStatus={errors.parking ? "error" : ""} help={errors.parking?.message}>
            <Controller
              control={control}
              name="meta.parking"
              defaultValue={data?.meta?.parking || false}
              render={({ field }) => ( 
              <Checkbox {...field} checked={field.value} onChange={(e) => field.onChange(e.target.checked)}>
              </Checkbox>
              )} 
              />
          </Form.Item>
        </Col>

        <Col xs={24} sm={24} md={8} lg={8}>
          <h3>Location</h3>
         <Form.Item label="Addess" validateStatus={errors.address ? "error" : ""} help={errors.address?.message}>
          <Controller
            control={control}
            name="location.address"
            defaultValue={data?.location?.address || ""}
            render={({ field }) => <Input {...field} />}
          />
        </Form.Item>

         <Form.Item label="City" validateStatus={errors.city ? "error" : ""} help={errors.city?.message}>
          <Controller
            control={control}
            name="location.city"
            defaultValue={data?.location?.city || ""}
            render={({ field }) => <Input {...field} />}
          />
        </Form.Item>

         <Form.Item label="Zip" validateStatus={errors.zip ? "error" : ""} help={errors.zip?.message}>
          <Controller
            control={control}
            name="location.zip"
            defaultValue={data?.location?.zip || ""}
            render={({ field }) => <Input {...field} />}
          />
        </Form.Item>

         <Form.Item label="Country" validateStatus={errors.country ? "error" : ""} help={errors.country?.message}>
          <Controller
            control={control}
            name="location.country"
            defaultValue={data?.location?.country || ""}
            render={({ field }) => <Input {...field} />}
          />
        </Form.Item>

         <Form.Item label="Continent" validateStatus={errors.continent ? "error" : ""} help={errors.continent?.message}>
          <Controller
            control={control}
            name="location.continent"
            defaultValue={data?.location?.continent || ""}
            render={({ field }) => <Input {...field} />}
          />
        </Form.Item>
        </Col>

        <Form.Item>

        <div style={{display: "flex", flexDirection: "column"}}>
        <span style={{margin: "15px 0 15px 0", fontSize: "larger", color: "green", textAlign: "center"}}>{successMsg}</span>
        <span style={{margin: "15px 0 15px 0", fontSize: "larger", color: "red", textAlign: "center"}}>{errorMsg}</span>
          <Button style={{backgroundColor: "#408BB6"}} type="primary" htmlType="submit">
            Save Changes
          </Button>
        </div>

        </Form.Item>
        </Row >
      </Form>
    </section>
  );
};

export default Edit;