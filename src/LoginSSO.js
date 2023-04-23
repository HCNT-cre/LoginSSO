import { React, useState } from "react";
import { useDispatch } from "react-redux";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import styled from "@emotion/styled";

const LoginContainer = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
`;

const LoginForm = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 400px;
  width: 100%;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3);
  text-align: center;
`;

const LoginSSO = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleClick = () => {
    if (username === "admin@quangngai.gov.vn" && password === "huynhhagiang") {
      window.location.replace("http://178.128.123.34/");
    }
  };

  const handleEnterKey = (e) => {
    if (e.key == 'Enter') {
      handleClick()
    }
  }

  return (
    <LoginContainer>
      <LoginForm>
        <Typography variant="h5" component="h2" gutterBottom>
          Hệ thống cơ quan hành chính Quảng Ngãi - Đăng nhập SSO
        </Typography>
        <TextField
          label="Tài khoản"
          variant="outlined"
          value={username}
          onChange={(event) => {
            setUsername(event.target.value);
          }}
          onKeyDown={handleEnterKey}
        />
        <TextField
          label="Mật khẩu"
          type="password"
          variant="outlined"
          value={password}
          onChange={(event) => {
            setPassword(event.target.value);
          }}
          onKeyDown={handleEnterKey}
        />
        <Button variant="contained" color="primary" onClick={handleClick}>
          Đăng nhập
        </Button>
      </LoginForm>
    </LoginContainer>
  );
};

export default LoginSSO;
