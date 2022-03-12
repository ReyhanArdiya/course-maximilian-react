import React from 'react';
import AddUser from './components/main/Users/AddUser.js';
import UsersList from './components/main/Users/UsersList.js';
import { useState } from "react";

function App() {
  const [users, setUsers] = useState([]);

  // let usersList;
  // if (users.length) {
  //   usersList = <UsersList usersArr={users} />;np
  // }

  return (
    <div>
      <AddUser addUser={u => setUsers(prevUsers => ([u, ...prevUsers]))} />
      {/* {users.length && UsersList({usersArr : users})} */}
      <UsersList usersArr={users} />
    </div>
  );
}

export default App;