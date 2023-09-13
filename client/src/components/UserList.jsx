import React, { useEffect, useState } from "react";
import axios from "axios";

export const UserList = ({ users }) => {
  const capitalizeFirstLetter = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };
  return (
    <div className="content-users">
      <p className="title">Lista de usuarios</p>
      <ul>
        {users.map((user, index) => (
          <li key={index}>
            <p className="message">{`${capitalizeFirstLetter(
              user.name
            )} ${capitalizeFirstLetter(
              user.lastname
            )} - ${capitalizeFirstLetter(user.role)}`}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
