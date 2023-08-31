// import React, { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { createUser } from "../store/users/user";
// import { TextField, Button, Container, Typography, Box } from '@mui/material';
// export function CreateUser({ onCreate }) {
//   const dispatch = useDispatch();

//   const isCreatingUser = useSelector((state) => state.user.isCreatingUser);

//   const apiError = useSelector((state) => state.user.error);

//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [number, setNumber] = useState("");
//   const [error, setError] = useState("");
//   const [hasSubmitButtonbeenClicked, setHasSubmitButtonBeenClicked] =
//     useState(false);

//   useEffect(() => {
//     if (hasSubmitButtonbeenClicked && !isCreatingUser && !error) {
//       onCreate();
//     }
//   }, [hasSubmitButtonbeenClicked, isCreatingUser]);

//   const onFormSubmit = (event) => {
//     event.preventDefault();
//     if (!name || !email || !number) {
//       setError("All the fields are required");
//       return;
//     }
//     if (
//       !email ||
//       !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
//     ) {
//       setError("Email is invalid");
//       return;
//     }

//     dispatch(
//       createUser({
//         name,
//         email,
//         phone: number,
//       })
//     );

//     setHasSubmitButtonBeenClicked(true);
//   };

//   const onInputChange = (event) => {
//     if (event.target.id === "id-name") {
//       setName(event.target.value);
//     } else if (event.target.id === "id-email") {
//       setEmail(event.target.value);
//     } else {
//       setNumber(event.target.value);
//     }
//   };

//   return (
//     <div>
    
//       <form onSubmit={onFormSubmit}>
        
//         <label htmlFor="id-name">Name</label>
//         <input type="text" id="id-name" value={name} onChange={onInputChange} />

//         <label htmlFor="id-email">Email</label>
//         <input
//           type="email"
//           id="id-email"
//           value={email}
//           onChange={onInputChange}
//         />

//         <label htmlFor="id-number">Phone Number</label>
//         <input
//           type="number"
//           id="id-number"
//           value={number}
//           onChange={onInputChange}
//         />

//         <button type="submit" disabled={isCreatingUser}>
//           SUBMIT
//         </button>
//       </form>
//       {error && <p>{error}</p>}
//     </div>
//   );
// }

// ***********************************************
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createUser } from "../store/users/user";
import { TextField, Button, Container, Typography, Box } from '@mui/material';
export function CreateUser({ onCreate }) {
  const dispatch = useDispatch();

  const isCreatingUser = useSelector((state) => state.user.isCreatingUser);

  const apiError = useSelector((state) => state.user.error);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [error, setError] = useState("");
  const [hasSubmitButtonbeenClicked, setHasSubmitButtonBeenClicked] =
    useState(false);

  useEffect(() => {
    if (hasSubmitButtonbeenClicked && !isCreatingUser && !error) {
      onCreate();
    }
  }, [hasSubmitButtonbeenClicked, isCreatingUser]);

  const onFormSubmit = (event) => {
    event.preventDefault();
    if (!name || !email || !number) {
      setError("All the fields are required");
      return;
    }
    if (
      !email ||
      !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
    ) {
      setError("Email is invalid");
      return;
    }

    dispatch(
      createUser({
        name,
        email,
        phone: number,
      })
    );

    setHasSubmitButtonBeenClicked(true);
  };

  const onInputChange = (event) => {
    if (event.target.id === "id-name") {
      setName(event.target.value);
    } else if (event.target.id === "id-email") {
      setEmail(event.target.value);
    } else {
      setNumber(event.target.value);
    }
  };

  return (
   
<Container maxWidth="sm">
      <form onSubmit={onFormSubmit}>
        <TextField
          label="Name"
          id="id-name"
          value={name}
          onChange={onInputChange}
          fullWidth
          margin="normal"
          variant="outlined"
          helperText={error && "Please enter your name"}
          error={error && !name}
        />
        <TextField
          label="Email"
          id="id-email"
          value={email}
          onChange={onInputChange}
          fullWidth
          margin="normal"
          variant="outlined"
          helperText={error && "Please enter a valid email"}
          error={error && (!email || !/\S+@\S+\.\S+/.test(email))}
        />
        <TextField
          label="Phone Number"
          id="id-number"
          value={number}
          onChange={onInputChange}
          fullWidth
          margin="normal"
          variant="outlined"
          helperText={error && "Please enter your phone number"}
          error={error && !number}
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          disabled={isCreatingUser}
        >
          SUBMIT
        </Button>
      </form>
      {error && <Typography color="error">{error}</Typography>}
    </Container>
        
  );
}

