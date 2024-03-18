import React from 'react';

const UserDetail = ({ user }) => {
  return (
    <div>
      <h2>User Detail</h2>
      <p>First Name: {user.first_name}</p>
      <p>Last Name: {user.last_name}</p>
      <p>Email: {user.email}</p>
      <p>Phone: {user.phone}</p>
      <p>Country: {user.country}</p>
      <p>Law Firm ID: {user.law_firm_id}</p>
    </div>
  );
};

export default UserDetail;
