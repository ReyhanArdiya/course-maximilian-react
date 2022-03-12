import React, { useRef } from "react";

import Card from '../UI/Card';
import classes from './UsersList.module.css';


export let userRef;
const UsersList = (props) => {
  userRef = useRef();

  return (
    <Card className={classes.users}>
      <ul ref={userRef}>
        {props.users.map((user) => (
          <li key={user.id}>
            {user.name} ({user.age} years old)
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default UsersList;
