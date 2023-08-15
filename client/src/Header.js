import {Link} from "react-router-dom";
import {useContext, useEffect, useState} from "react";
import {UserContext} from "./UserContext";

export default function Header() {
  const port  = process.env.REACT_APP_PORT;

  const {setUserInfo,userInfo} = useContext(UserContext);
  useEffect(() => {
    fetch(`${port}/profile`, {
    }).then(response => {
      response.json().then(userInfo => {
        setUserInfo(userInfo);
      });
    });
  }, []);
 
  function logout() {
    fetch(`${port}/logout`, {
      credentials: 'include',
      method: 'POST',
    });
    setUserInfo(null);
  }

  const username = userInfo?.username;

  return (
    <header>
      <Link to="/" className="logo">MyBlog</Link>
      <nav>
        {username && (
          <>
            <Link className="navbar-element" to="/create">Create new post</Link>
            <a className="navbar-element"onClick={logout}>Logout ({username})</a>
          </>
        )}
        {!username && (
          <>
            <Link className="navbar-element" to="/login">Login</Link>
            <Link className="navbar-element" to="/register">Register</Link>
          </>
        )}
      </nav>
    </header>
  );
}
