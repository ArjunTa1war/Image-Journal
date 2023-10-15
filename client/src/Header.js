import {Link} from "react-router-dom";
import {useContext, useEffect, useState} from "react";
import {UserContext} from "./UserContext";

export default function Header() {
  const {setUserInfo,userInfo} = useContext(UserContext);
  useEffect(() => {
    fetch('http://localhost:4000/profile', {
      credentials: 'include',
    }).then(response => {
      response.json().then(userInfo => {
        setUserInfo(userInfo);
      });
    });
  }, []);

  function logout() {
    fetch('http://localhost:4000/logout', {
      credentials: 'include',
      method: 'POST',
    });
    setUserInfo(null);
  }

  const username = userInfo?.username;

  return (
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top" style={{backgroundColor:"#d2601a"}}>
            <div className="container-fluid">
                <Link className="navbar-brand" style={{fontWeight:"bold"}} to="/">📔Image Journal</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                   
                </ul>
                {username ? (
                 <>
                <Link className="btn btn-secondary mx-1 font-weight-bold custom-button" to="/create">
                  Create new post
                </Link>
                <a className="btn btn-secondary mx-1 font-weight-bold custom-button" onClick={logout}>
                  Logout ({username})
                </a>
              </>
            ) : (
              <>
                <Link className="btn btn-secondary mx-1 custom-button" to="/login">
                  Login
                </Link>
                <Link className="btn btn-secondary mx-1 custom-button" to="/register">
                  Register
                </Link>
              </>
            )}

                </div>
            </div>
            </nav>
  );
}