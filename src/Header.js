import React from 'react';

function Header({ name, email, mobile, web }) {
  return (
    <header>
      <h1>{name}</h1>
      <p>Email: {email}</p>
      <p>Mobile: {mobile}</p>
      <p>Web: {web}</p>
    </header>
  );
}

export default Header;
