import React from 'react';

const UserList = ({ users, viewUser, editUser, deleteUser }) => {
  // Access the actual user records
  const userRecords = users?.data?.records;

  if (!Array.isArray(userRecords) || userRecords.length === 0) {
    return <div>No Record Found</div>;
  }

  return (
    <div>
      <h2>User List</h2>
      <ul>
        {userRecords.map((user) => {
          console.log(user);
          return (
            <li key={user.id}>
              {user.first_name} {user.last_name} - {user.email} - {user.phone}
              <button onClick={() => viewUser(user)}>View</button>
              <button onClick={() => editUser(user)}>Edit</button>
              <button onClick={() => deleteUser(user.id)}>Delete</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default UserList;
