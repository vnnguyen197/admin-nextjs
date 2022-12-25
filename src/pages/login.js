import { useState } from "react";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
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
  Error,
  StyleImg
} from "../styles/login/index";
import { useRouter } from "next/router";
import { Alert, Snackbar, Stack } from '@mui/material'
import Loading from "../components/Loading";
import bgr from '../assets/admin.png';

const database = [
  {
    username: "admin",
    password: "admin",
  },
];

const errors = {
  uname: "username không hợp lệ",
  pass: "mật khẩu không hợp lệ ",
};

function Login() {
  const [showPass, setShowPass] = useState(false);
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false)
  const router = useRouter();

  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <Error className="error">{errorMessages.message}</Error>
    );

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return
    }
    setOpen(false)
  }

  const handleSubmit = (event) => {
    //Prevent page reload
    event.preventDefault();

    var { uname, pass } = document.forms[0];

    // Find user login info
    const userData = database.find((user) => user.username === uname?.value);

    // Compare user info
    if (userData) {
      if (userData.password !== pass.value) {
        // Invalid password
        setErrorMessages({ name: "pass", message: errors.pass });
      } else {
        setIsSubmitted(true);
      }
    } else {
      // Username not found
      setErrorMessages({ name: "uname", message: errors.uname });
    }
    if (isSubmitted) {
      setLoading(true);
      setOpen(true)
      setTimeout(() => {
        router.push("./users", undefined, { scroll: true });
        setLoading(false);
      }, 700);
    }
  };

  return (
    <Container>
      {loading ? <Loading /> : null}
      <ContentRight>
        <h1 className="typing">Welcome to Order Best Food !!!</h1>
        <div>
          <h2 className="admin">Hi everyone!</h2>
          <h2 className="admin">I'm Admin</h2>
        </div>
        <StyleImg src={bgr.src} width={800} height={800} />
      </ContentRight>
      <ContentLeft>
        <FormLogin onSubmit={handleSubmit}>
          <StyleLogin>
            <LoginDiv>ĐĂNG NHẬP</LoginDiv>
            <Heading>
              <LabelLogin>Địa chỉ email</LabelLogin>
              <Input placeholder="email" type="text" name="uname" required />
              {renderErrorMessage("uname")}
            </Heading>
            <Heading>
              <LabelLogin>Mật khẩu</LabelLogin>
              <ContentInput>
                <Input
                  placeholder="password"
                  type={showPass ? "text" : "password"}
                  name="pass"
                  required
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
                {renderErrorMessage("pass")}
              </ContentInput>
            </Heading>
            <Stack spacing={2} sx={{ width: '100%' }}>
              <Button type="submit">Log in</Button>
              <Snackbar
                open={open}
                autoHideDuration={5000}
                onClose={handleClose}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
              >
                {isSubmitted ? (
                  <Alert
                    onClose={handleClose}
                    severity="success"
                    sx={{ width: '100%' }}
                  >
                    Đăng nhập thành công
                  </Alert>
                ) : (
                  <></>
                )}
              </Snackbar>
            </Stack>
          </StyleLogin>
        </FormLogin>
      </ContentLeft>
    </Container>
  );
}

export default Login;
