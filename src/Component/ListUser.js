import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers, deleteUser } from "../store/users/user";
import { TextField, Button, Container, Typography, Box } from "@mui/material";

export function ListUser() {

  const dispatch = useDispatch();

  const users = useSelector((state) => state.user.users);

  useEffect(() => {
    dispatch(getUsers());
  }, []);

  const onDelete = (event) => {
    dispatch(deleteUser(event.target.id));
  }

  return (
    <div>
      {users.map((item) => (
        <li key={item.id}>
          {item.name} <Button id={item.id} onClick={onDelete}>delete</Button>
        </li>
      ))}
    </div>
  );
}
