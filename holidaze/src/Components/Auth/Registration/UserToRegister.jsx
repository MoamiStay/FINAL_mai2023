import { useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, Controller } from "react-hook-form";
import { registerSchema } from "../../../Validation/registerSchema";
import { URL } from "../../../Utils/constants";
import { registerURL } from "../../../Utils/constants";
import { Link, useNavigate } from "react-router-dom";
import { Button, Form, Input, Spin } from 'antd';

const UserToRegister = () => {
  const navigate = useNavigate();

  const { control, handleSubmit, formState: { errors }, reset } = useForm({
    resolver: yupResolver(registerSchema),
  });

  const [errorMsg, setErrorMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  const onFormSubmit = async (data) => {
    setErrorMsg(
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Spin />
      </div>
    );

    try {
      const isValid = await registerSchema.isValid(data);

      if (isValid) {
        const bodyContent = {
          ...data,
          avatar: "https://images.unsplash.com/photo-1548266652-99cf27701ced?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80",
        };

        const postData = {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(bodyContent),
        };

        const response = await fetch(URL + registerURL, postData);
        const json = await response.json();
        console.log(response);
        console.log(json);

        if (response.ok) {
          setSuccessMsg("Registration successful, redirecting to login");
          setErrorMsg(<Spin />);
          setTimeout(() => {
            navigate("/Login");
          }, 3000);
        } else {
          setErrorMsg(
            <div style={{ display: "flex", justifyContent: "center", color: "red" }}>
              <p>{json.errors[0].message}</p>
            </div>
          );
        }
      }
    } catch (error) {
      setErrorMsg(error);
    } finally {
      reset();
    }
  };

  return (
    <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 10 }}
      style={{ maxWidth: 600 }}
      initialValues={{ remember: true }}
      onFinish={handleSubmit(onFormSubmit)}
      autoComplete="off"
    >
      <Form.Item label="Username" validateStatus={errors.name ? "error" : ""} help={errors.name?.message}>
        <Controller
          control={control}
          name="name"
          render={({ field }) => (
            <Input {...field} placeholder="Username" />
          )}
        />
      </Form.Item>

      <Form.Item label="Email" validateStatus={errors.email ? "error" : ""} help={errors.email?.message}>
        <Controller
          control={control}
          name="email"
          render={({ field }) => (
            <>
              <Input {...field} placeholder="@noroff.no" />
              {/* <span style={{ fontSize: "smaller" }}>Must be an @noroff.no/@stud.noroff.no email</span> */}
            </>
          )}
        />
      </Form.Item>

      <Form.Item label="Venue Manager" valuePropName="checked">
        <Controller
          control={control}
          name="venueManager"
          render={({ field }) => (
            <Input {...field} type="checkbox" />
          )}
        />
      </Form.Item>

      <Form.Item label="Password" validateStatus={errors.password ? "error" : ""} help={errors.password?.message}>
        <Controller
          control={control}
          name="password"
          render={({ field }) => (
            <>
              <Input {...field} placeholder="Password" type="password" />
              {/* <span style={{ fontSize: "smaller" }}>Min 8 characters</span> */}
            </>
          )}
        />
      </Form.Item>

      <Form.Item label="Confirm Password" validateStatus={errors.confirmPassword ? "error" : ""} help={errors.confirmPassword?.message}>
        <Controller
          control={control}
          name="confirmPassword"
          render={({ field }) => (
            <Input {...field} placeholder="Confirm Password" type="password" />
          )}
        />
      </Form.Item>

      <div style={{ margin: "15px 0", fontSize: "larger", color: "red", textAlign: "center" }}>{errorMsg}</div>
      <div style={{ margin: "15px 0", fontSize: "larger", color: "green", textAlign: "center" }}>{successMsg}</div>

      <div style={{ display: "flex", justifyContent: "center" }}>
        <Form.Item wrapperCol={{ span: 16 }}>

          <Button type="primary" htmlType="submit">
            Register
          </Button>
        </Form.Item>

        <Form.Item wrapperCol={{ span: 16 }}>
          <Button type="text" htmlType="button">
            <Link to="/Login" style={{ fontSize: "smaller" }}>Back to login</Link>
          </Button>
        </Form.Item>
      </div>
    </Form>
  );
};

export default UserToRegister;