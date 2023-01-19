import React from "react";
import { Link, Outlet } from "react-router-dom";
import { users } from "../users";

const Users = () => {
  return (
    <div>
      <h2>Users</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <Link to={String(user.id)}>
              {user.id} {user.email}
            </Link>
          </li>
        ))}
      </ul>

      <Outlet />
    </div>
  );
};

export default Users;
