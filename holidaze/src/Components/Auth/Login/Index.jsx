import Login from "./Login";
import { Img, ImgContainer, Side, Section, LoginDiv } from "./styles";

const LoginIndex = () => {
    return (
<Section >
        <Side>
          <LoginDiv>
              <h1>Login</h1>
            <Login />
          </LoginDiv>
        </Side>

        <ImgContainer>
            <Img src="/photo-1535827841776-24afc1e255ac.avif" alt="hey"/>
        </ImgContainer>
    </Section>
    )
};

export default LoginIndex;