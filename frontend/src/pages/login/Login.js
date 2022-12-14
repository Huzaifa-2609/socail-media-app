import { useContext, useRef } from "react";
import { loginCall } from "../../apiCalls";
import { AuthContext } from "../../Context/AuthContext";
import { CircularProgress } from '@mui/material'
import "./login.css";

export default function Login() {
  const email= useRef();
  const password= useRef();

  const {user, isFetching, error, dispatch}= useContext(AuthContext)
  const handleClick=(e)=>{
    e.preventDefault();
   loginCall({email:email.current.value, password:password.current.value}, dispatch)
  }
  console.log(user)
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">HS-book</h3>
          <span className="loginDesc">
            Connect with friends and the world around you on HS-book.
          </span>
        </div>
        <div className="loginRight">
          <form className="loginBox" onSubmit={handleClick}>
            <input placeholder="Email" type="email" className="loginInput" ref={email} minLength={6} required />
            <input placeholder="Password" type="password" className="loginInput" ref={password} minLength={6} required/>
            <button className="loginButton">{isFetching? <CircularProgress size={"20px"} style={{zIndex:1, color:"white"}}/> :"Log In"}</button>
            <span className="loginForgot">Forgot Password?</span>
            <button className="loginRegisterButton">
              Create a New Account
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}