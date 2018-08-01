import React from "react";

const Users = props => (
  <ul>
    {props.users.map((user, index) => (
      <li key={index}>{`Name: ${user.name} Email: ${user.email} Phone: ${
        user.phone
      }`}</li>
    ))}
  </ul>
);

export default Users;
