import React, { useState } from "react";
import { BiSolidLogInCircle, BiShow, BiSolidHide } from "react-icons/bi";
import { FcGoogle } from "react-icons/fc";
import { FaAppleAlt } from "react-icons/fa";
import { signIn } from "next-auth/react";
import { useRouter } from "next/router";
import Image from "next/image";

import style from "@/styles/login/App.module.css";
import Link from "next/link";


const Login = () => {
  const router = useRouter();
  const [show, setShow] = useState(false);
  const [showMsg, setShowMsg] = useState("password");
  const [showErrorMsg, setShowErrorMsg] = useState("");

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [btnMsg, setBtnMsg] = useState("Sign in");
  const [SignLoad, setSignLoad] = useState(false);

  const ShowPass = () => {
    setShowMsg("text");
    setShow(true);
  };

  const HidePass = async  () => {
    setShowMsg("password");
    setShow(false);
  };

  //Login form
  const handleLogin = async (e) => {
    setBtnMsg("")
    setSignLoad(true)
    setShowErrorMsg("")
    e.preventDefault();

    if (username === "") {
      setBtnMsg("Sign In")
      setSignLoad(false)
      setShowErrorMsg("Please enter your username");
    } else if (password === "") {
        setBtnMsg("Sign In")
        setSignLoad(false)
        setShowErrorMsg("Please enter your password");
    } else {
      const res = await signIn("credentials", {
        username,
        password,
        redirect: false,
      });

      console.log(res.error);

      if (res.ok) {
        router.push("/Success");
      } else {
        setBtnMsg("Sign In")
        setSignLoad(false)
        setShowErrorMsg("Username and Password are incorrect, and Check if your account is active")
      }
    }
  };

  return (
    <div className={style.logincontainer}>
      <div className={style.loginform}>
        <h1>Sign in Here</h1>
        <label>Email or username</label>
        <br />
        <input
          type="text"
          placeholder="Email address or username"
          className="border border-gray-300  py-2 px-4 transition-all focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-green-500"
          value={username}
          onChange={(e) => {
            setUsername(e.target.value);
          }}
          onFocus={() => {
            setBtnMsg("Sign In");
            setSignLoad(false);
            setShowErrorMsg("");
          }}
        ></input>
        <br />
        <label>Password</label>
        <br />
        {show ? (
          <BiSolidHide
            onClick={HidePass}
            className="text-xl text-red-600 mt-2 cursor-pointer hover:text-green-950 transition-all"
          />
        ) : (
          <BiShow
            onClick={ShowPass}
            className="text-xl text-green-600 mt-2 cursor-pointer hover:text-green-950 transition-all"
          />
        )}
        <input
          type={showMsg}
          placeholder="Password"
          className="border border-gray-300  py-2 px-4 transition-all focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-green-500"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          onFocus={() => {
            setBtnMsg("Sign In");
            setSignLoad(false);
            setShowErrorMsg("");
          }}
        ></input>
        <br />

        <div className={style.buttons}>
          <button
            onClick={handleLogin}
            className="bg-green-600 hover:bg-green-800 text-white font-normal py-1.5 px-6 rounded-full transition-all mr-5 w-1/2 flex justify-center items-center"
          >
            {SignLoad ? (
              <Image src="/load.gif" alt="My Image" width={20} height={20} />
            ) : (
              <BiSolidLogInCircle className="mr-2" />
            )}
            {btnMsg}
          </button>
          <Link href={"#"}>Forgot Password ?</Link>
        </div>

        <br />
        <p className="text-red-600 text-xs">{showErrorMsg}</p>
        <hr />

        <div className="border border-gray-300 w-full h-10 rounded-full flex justify-center items-center mt-2 cursor-pointer hover:bg-slate-100 transition-all">
          <FcGoogle className="text-xl" />
          <p className="ml-5">Sign in with Google</p>
        </div>

        <div className="border border-gray-300 w-full h-10 rounded-full flex justify-center items-center mt-2 cursor-pointer hover:bg-slate-100 transition-all">
          <FaAppleAlt className="text-xl" />
          <p className="ml-5">Sign in with Apple</p>
        </div>
      </div>
    </div>
  );
};

export default Login;
