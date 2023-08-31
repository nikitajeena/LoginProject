// import React, { useState } from "react";
// import { useDispatch } from "react-redux";
// import { authActions } from "../store/auth/auth";
// import { TextField, Button, Container, Typography, Box } from '@mui/material';

// export function Login() {
//   const [email, setEmail] = useState("");
//   const dispatch = useDispatch();

//   const onEmailChange = (event) => {
//     setEmail(event.target.value);
//   };

//   const validateEmail = () => {
//     return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
//   };

//   const onButtonClick = () => {
//     dispatch(authActions.setIsAuthenticated(validateEmail())); //updating state
//   };

//   return (
//     <div className="Form">
//       {/* <label htmlFor="email-input">email</label>
//       <input
//         type="email"
//         value={email}
//         id="email-input"
//         onChange={onEmailChange}
//       /> */}

//       <TextField
//         helperText="Please enter your name"
//         id="demo-helper-text-aligned id-number email-input"
//         type="email"
//         value={email}
//         onChange={onEmailChange}
//         label="Email"
//       />
//       <Button variant="contained" onClick={onButtonClick}>Login</Button>
//     </div>
//   );
// }
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { authActions } from "../store/auth/auth";
import { TextField, Button, Card, CardMedia, Container, Typography, Box } from "@mui/material";
import loginImage from './login-3305943-2757111.webp'
export function Login() {
  const [email, setEmail] = useState("");
  const dispatch = useDispatch();

  const onEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const validateEmail = () => {
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
  };

  const onButtonClick = () => {
    dispatch(authActions.setIsAuthenticated(validateEmail())); //updating state
  };

  return (
    <>
     <Container
        // maxWidth="xs"
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "50vh",
        }}
      >

     <Card elevation={0}>
      <CardMedia
        component="img"
        alt="Image"
        image={loginImage}
        sx={{
          width: 'auto',
          height: 300,
          objectFit: "cover"
        }}
        
      />
    </Card>
      <Container
        maxWidth="xs"
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "10vh",
        }}
      >
        <TextField
          helperText="Please enter your name"
          id="demo-helper-text-aligned id-number email-input"
          type="email"
          value={email}
          onChange={onEmailChange}
          label="Email"
          margin="normal"
          fullWidth
        />
        <Button
          variant="contained"
          onClick={onButtonClick}
          sx={{ marginTop: 2, height: 50, width: 200, backgroundColor: '#974EC3'}}
        >
          Login
        </Button>
      </Container>
      </Container>

    </>
  );
}
