import React, { useState } from "react";
import { database } from "../fireBase/FirebaseConfig";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import "./PasswordLoginWithFirebase.css"
import "../App.css"

function RegisterAndLogin() {
  const [login, setLogin] = useState(false);

  const history = useNavigate();

  const handleSubmit = (e, type) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    if (type === "signup") {
      createUserWithEmailAndPassword(database, email, password)
        .then((data) => {
          console.log(data, "authData");
          history("/home");
        })
        .catch((err) => {
          alert(err.code);
          setLogin(true);
        });
    } else {
      signInWithEmailAndPassword(database, email, password)
        .then((data) => {
          console.log(data, "authData");
          history("/home");
        })
        .catch((err) => {
          alert(err.code);
        });
    }
  };

  const handleReset = ()=>{
    history("/reset");
  }
  return (
    <div className="App h-screen flex flex-col justify-center items-center bg-black">
      {/* Registration and login Screen */}
      <div className="flex justify-between gap-12 bg-slate-300 rounded-xl py-4 p-2 px-20">
        <div
          className={`p-2 bg-blue-500 rounded-lg ${login === false ? "activeColor" : "pointer"}`}
          onClick={() => setLogin(false)}
        >
          SignUp
        </div>
        <div
          className={`p-2 bg-blue-500 rounded-lg ${login === false ? "pointer" : "activeColor"}`}
          onClick={() => setLogin(true)}
        >
          LogIn
        </div>
      </div>
      <h1 className="p-2 px-32 text-xl text-white">{login ? "LogIn" : "SignUp"}</h1>
      <form className=" bg-slate-300 p-16" onSubmit={(e) => handleSubmit(e, login ? "signin" : "signup")}>
      
        <input className="py-2 p-2 bg-slate-200 rounded-lg" name="email" placeholder="Email" />
        <br />
        <input className="py-2 mt-3 p-2 bg-slate-200 rounded-lg" name="password" type="password" placeholder="Password" />
        <br />
        <p onClick={handleReset} className="hover:cursor-pointer pt-1 text-[#3041b0]">Forgot Password?</p>
        <br />
        <button className=" bg-green-700 text-white text-xl p-2 px-12 rounded-xl">{login ? "LogIn" : "SignUp"}</button>
      </form>
    </div>
  );
}
export default RegisterAndLogin;