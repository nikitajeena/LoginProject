// import { Dashboard } from "@mui/icons-material";
import React, { useState } from "react";
import { CreateUser } from "./CreateUser";
import { ListUser } from "./ListUser";
import { TextField, Button, Container, Typography, Box } from "@mui/material";

export function Dashboard() {
  const [activeTab, setActiveTab] = useState("create");

  const onButtonClick = (event) => {
    setActiveTab(event.target.id);
  };

  const onCreate = () => {
    setActiveTab("show");
  };

  //   return (
  //     <div>
  //       <div>
  //         <Button id="create" align="center" onClick={onButtonClick}>
  //           Create User
  //         </Button>
  //         <Button id="show" align="center" onClick={onButtonClick}>
  //           Show Users
  //         </Button>
  //       </div>
  //       {activeTab === "create" ? (
  //         <CreateUser onCreate={onCreate} />
  //       ) : (
  //         <ListUser />
  //       )}
  //     </div>
  //   );

  return (
    // <Box
    //   display="flex"
    //   flexDirection="column"
    //   alignItems="center"
    //   justifyContent="center"
    // //   height="100vh"
    // // >
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        textAlign: "center",
        marginTop: "40px",
      }}
    >
      <div>
        <Button
          id="create"
          variant="contained"
          onClick={onButtonClick}
          sx={{
            backgroundColor: "#8A2BE2", // Purple color
            color: "white", // Text color
            marginRight: 10,
            minWidth: 150,
            "&:hover": {
              backgroundColor: "4477CE", // Darker shade on hover
            },
          }}
        >
          Create User
        </Button>
        <Button
          id="show"
          variant="contained"
          onClick={onButtonClick}
          sx={{
            backgroundColor: "#8A2BE2", // Purple color
            color: "white", // Text color
            minWidth: 150,
            "&:hover": {
              backgroundColor: "4477CE", // Darker shade on hover
            },
          }}
        >
          Show Users
        </Button>
      </div>
      {activeTab === "create" ? (
        <CreateUser onCreate={onCreate} />
      ) : (
        <ListUser />
      )}
    </div>
    // </Box>
  );
}
