import { useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { registerSchema } from "../../../Validation/registerSchema";
import { URL } from "../../../Utils/constants";
import { registerURL } from "../../../Utils/constants";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Button, Form, Input, Spin } from 'antd';


const UserToRegister = () => {
    const navigate = useNavigate();
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
  setErrorMsg(
      <div style={{display: "flex", justifyContent: "center"}}>
        <Spin />
      </div>
  )
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
    console.log("Validation: " + isValid)

      try {
        const postData = {
          method: "POST",
          headers: {
            "content-Type": "application/json",
          },
          body: JSON.stringify(bodyContent),
        };
        const response = await fetch(URL + registerURL, postData);
        // console.log(response);
        const json = await response.json();
        // console.log(json);

        if(response.ok) {
            setErrorMsg("Registration successful redirecting to login .. ")
            setTimeout(() => {
          navigate("/Login");
        }, 100); 
        } 
        else setErrorMsg(
       <div style={{display: "flex", justifyContent: "center", color: "red"}}>
        <p>Something went wrong</p>
      </div>
        )

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
        reset();
        // console.log(errors.name?.message);
      };

}

return (
    // <section>
    //     <div>
    //         <form onSubmit={handleSubmit(onFormSubmit)}>
    //             <input {...register("name")} name="name" placeholder="Username" type="text" required onChange={onUsernameChange}></input>
    //             <span>{errors.name?.message}</span>
    //             <input {...register("email", { required: true })} name="email" placeholder="email" type="text" required onChange={onEmailChange} ></input>
    //             <span>{errors.email?.message}</span>
    //             <label>Venue Manager</label>
    //             <input {...register("venueManager")} name="venueManager" type="checkbox" checked={venueManager} onChange={onVenueManagerChange} ></input>
    //             <span>{errors.benueManager?.message}</span>
    //             <input {...register("password")} name="password" placeholder="password" type="password" required onChange={onPasswordChange} ></input>
    //             <span>{errors.password?.message}</span>
    //             <input {...register("confirmPassword")} name="confirmPassword" placeholder="Confirm Password" type="password" required onChange={onConfirmPasswordChange} ></input>
    //             <span>{errors.confirmPassword?.message}</span>
    //             <span>{errorMsg}</span>

    //             <button type="submit">Register</button>
    //         </form>
    //     </div>
    // </section>


<Form
    name="basic"
    labelCol={{
      span: 8,
    }}
    wrapperCol={{
      span: 10,
    }}
    style={{
      maxWidth: 600,
    }}
    initialValues={{
      remember: true,
    }}
    onFinish={handleSubmit(onFormSubmit)}
    autoComplete="off"
  >


<Form.Item label="Venue Manager" name="venueManager">
    <Input {...register("venueManager")} name="venueManager" type="checkbox" checked={venueManager} onChange={onVenueManagerChange} />
</Form.Item>
<span>{errors.venueManager?.message}</span>


<Form.Item label="Username" name="username">
    <Input {...register("name")} name="name" placeholder="Username" type="text" required onChange={onUsernameChange} />
</Form.Item>
<span>{errors.name?.message}</span>

<Form.Item label="Email" name="email">
    <Input {...register("email", { required: true })} name="email" placeholder="@noroff.no" type="text" required onChange={onEmailChange} />
    <span style={{fontSize: "smaller"}}>Must be an @noroff.no/@stud.noroff.no email</span>
</Form.Item>
<span>{errors.email?.message}</span>

<Form.Item label="Password" name="password">
    <Input {...register("password")} name="password" placeholder="password" type="password" required onChange={onPasswordChange} />
    <span style={{fontSize: "smaller"}}>Min 8 characters</span>
</Form.Item>
<span>{errors.password?.message}</span>

<Form.Item label="Confirm password" name="confirmPassword">
    <Input  {...register("confirmPassword")} name="confirmPassword" placeholder="Confirm Password" type="password" required onChange={onConfirmPasswordChange} />
</Form.Item>
<span>{errors.confirmPassword?.message}</span>

    <span>{errorMsg}</span>

    <div style={{display: "flex", justifyContent: "center"}}>
    <Form.Item
      wrapperCol={{
        offset: 0,
        span: 16,
      }}
    >
      <Button type="primary" htmlType="submit">
        Register
      </Button>
    </Form.Item>

        <Form.Item
      wrapperCol={{
        offset: 0,
        span: 16,
      }}
    >
      <Button type="text" htmlType="button">
        <Link to="/Login" style={{fontSize: "smaller"}}>Back to login</Link>
      </Button>
    </Form.Item>
    </div>
  </Form>
)
};


export default UserToRegister;