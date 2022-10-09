import axios from "axios";
import { useRef } from "react";
import "./register.css";
import {useNavigate} from "react-router-dom"

export default function Register() {
  const username= useRef();
  const email= useRef();
  const password= useRef();
  const Apassword= useRef();
  const navigate= useNavigate()

  const handleClick=async(e)=>{
    e.preventDefault();
    if(password.current.value!==Apassword.current.value){
      password.current.setCustomValidity("Passwords don't match")
    }
    else{
      const user={
        username:username.current.value,
        email:email.current.value,
        password:password.current.value,
      }
      try{
           await axios.post("/auth/register", user);
           navigate("/login")
      }catch(err){
        console.log(err)
      }
    }

  }
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
            <input placeholder="Username" ref={username} required minLength={3} className="loginInput" />
            <input placeholder="Email" type="email" ref={email} required minLength={3}  className="loginInput" />
            <input placeholder="Password"  type="password" ref={password} required minLength={3} className="loginInput" />
            <input placeholder="Password Again" type="password" required minLength={3} ref={Apassword} className="loginInput" />
            <button className="loginButton">Sign Up</button>
            <button className="loginRegisterButton">
              Log into Account
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}