import { useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { URL } from "../../../Utils/constants";
import { loginURL } from "../../../Utils/constants";
import { loginSchema } from "../../../Validation/loginSchema";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { onLogin } from "../../../Redux/AvatarSlice";
import { useNavigate } from "react-router-dom";
import { Button, Form, Input, Spin } from 'antd';

const UserToLogin = () => {
const navigate = useNavigate();
const { register, handleSubmit, formState: { errors }, reset } = useForm(
    {
        resolver: yupResolver(loginSchema),
    }
);

const [ email, setEmail ] = useState("");
const [ password, setPassword ] = useState("");
const [ errorMsg, setErrorMsg ] = useState("");
const dispatch = useDispatch();
const statuss = useSelector((state) => state.logged.statuss);
const avatar = useSelector((state) => state.avatar.avatar);

const onEmailChange = (e) => {
    setEmail(e.target.value);
}
const onPasswordChange = (e) => {
    setPassword(e.target.value);
}

const onFormSubmit = async () => {
    let bodyContent = {
        email,
        password
    };
    console.log(bodyContent);
    const isValid = await loginSchema.isValid(bodyContent);
    console.log("Validation: " + isValid)

      try {
        const postData = {
          method: "POST",
          headers: {
            "content-Type": "application/json",
          },
          body: JSON.stringify(bodyContent),
        };
        const response = await fetch(URL + loginURL, postData);
        // console.log(response);
        const json = await response.json();
        // console.log(json);

        if(response.ok) {
            localStorage.setItem("authenticate", json.accessToken)
            localStorage.setItem("venueManager", json.venueManager)
            localStorage.setItem("username", json.name)
            localStorage.setItem("avatar", json.avatar)
            setErrorMsg(
            <div style={{display: "flex", justifyContent: "center", padding: "15px 0 30px 0" }}>
              <Spin />
            </div>
              );
            dispatch(
                onLogin({
                    avatarImg: json.avatar,
            }))
        setTimeout(() => {
          navigate("/");
        }, 1500);
        }

        for(let item of json.errors) {
            if (item) {
            setErrorMsg("Invalid email or password");
            }
      }
      } catch (error) {
        console.log(error);
      } finally {
        reset();
        // console.log("statuss: " + statuss);
      };
}

return (
    // <section>
    //     <div>
    //         <form onSubmit={handleSubmit(onFormSubmit)}>
    //             {/* <Input {...register("email", { required: true })} name="email" placeholder="email" type="text" required onChange={onEmailChange} /> */}
    //             <input {...register("email", { required: true })} name="email" placeholder="email" type="text" required onChange={onEmailChange} ></input>
    //             <span>{errors.email?.message}</span>
    //             {/* <Input {...register("password")} name="password" placeholder="password" type="password" required onChange={onPasswordChange} /> */}
    //             <input {...register("password")} name="password" placeholder="password" type="password" required onChange={onPasswordChange} ></input>
    //             <span>{errors.password?.message}</span>
    //             <span>{errorMsg}</span>

    //             <Button type="primary">Login</Button>

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

<Form.Item label="Email" name="email">
<Input {...register("email", { required: true })} name="email" placeholder="email" type="text" required onChange={onEmailChange} />
</Form.Item>
<span>{errors.email?.message}</span>

    <Form.Item label="Password" name="password">
<Input {...register("password")} name="password" placeholder="password" type="password" required onChange={onPasswordChange} />
    </Form.Item>
<span>{errors.password?.message}</span>

    <span>{errorMsg}</span>

    <div style={{display: "flex", justifyContent: "center"}}>
    <Form.Item
      wrapperCol={{
        offset: 0,
        span: 16,
      }}
    >
      <Button type="primary" htmlType="submit">
        Login
      </Button>
    </Form.Item>

        <Form.Item
      wrapperCol={{
        offset: 0,
        span: 16,
      }}
    >
      <Button type="text" htmlType="button">
        <Link to="/Register" style={{fontSize: "smaller"}}>Register</Link>
      </Button>
    </Form.Item>
    </div>
  </Form>
)

};

export default UserToLogin;