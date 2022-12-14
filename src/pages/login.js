import { useState } from "react";
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import {
  Container,
  ContentRight,
  ContentLeft,
  FormLogin,
  StyleLogin,
  LoginDiv,
  LabelLogin,
  Heading,
  Input,
  ContentInput,
  SpanEye,
  Button,
  SpanLogin,
} from "../styles/login/index";
import { useRouter } from "next/router";

function Login() {
  const [showPass, setShowPass] = useState(false);
  const router = useRouter();
  return (
    <Container>
      <ContentRight>
        <h1 className="typing">Welcome I'm admin !!!</h1>
      </ContentRight>
      <ContentLeft>
        <FormLogin>
          <StyleLogin>
            <LoginDiv>
              {/* <SpanLogin style={{ "--item": 1 }}>Đ</SpanLogin>
              <SpanLogin style={{ "--item": 2 }}>Ă</SpanLogin>
              <SpanLogin style={{ "--item": 3 }}>N</SpanLogin>
              <SpanLogin style={{ "--item": 4, paddingRight: 5 }}>G</SpanLogin>
              <SpanLogin style={{ "--item": 5, paddingLeft: 5 }}>N</SpanLogin>
              <SpanLogin style={{ "--item": 6 }}>H</SpanLogin>
              <SpanLogin style={{ "--item": 7 }}>Ậ</SpanLogin>
              <SpanLogin style={{ "--item": 8 }}>P</SpanLogin> */}
              ĐĂNG NHẬP
            </LoginDiv>
            <Heading>
              <LabelLogin>Địa chỉ email</LabelLogin>
              <Input placeholder="email" type="text" autoFocus />
            </Heading>
            <Heading>
              <LabelLogin>Mật khẩu</LabelLogin>
              <ContentInput>
                <Input
                  placeholder="password"
                  type={showPass ? "text" : "password"}
                />
                {showPass ? (
                  <SpanEye onClick={() => setShowPass(!showPass)}>
                    <VisibilityOffIcon />
                  </SpanEye>
                ) : (
                  <SpanEye onClick={() => setShowPass(!showPass)}>
                    <RemoveRedEyeIcon />
                  </SpanEye>
                )}
              </ContentInput>
            </Heading>
            <Button onClick={()=>router.push('/users')}>Log in</Button>
          </StyleLogin>
        </FormLogin>
      </ContentLeft>
    </Container>
  );
}

export default Login;
