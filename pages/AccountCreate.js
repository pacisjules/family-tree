import React, { useState } from "react";
import { BiSolidLogInCircle, BiShow, BiSolidHide } from "react-icons/bi";
import { FcGoogle } from "react-icons/fc";
import { FaAppleAlt } from "react-icons/fa";
import { signIn } from "next-auth/react";
import { useRouter } from "next/router";
import Image from "next/image";
import axios from "axios";
import config from  '@/utils/config'; 

import style from "@/styles/createaccount/App.module.css";
import Link from "next/link";
const AccountCreate = () => {
  const router = useRouter();
  const baseUrl = process.env.BACKEND_URL;

  const [show, setShow] = useState(false);
  const [showMsg, setShowMsg] = useState("phone");
  const [showErrorMsg, setShowErrorMsg] = useState("");

  const [username, setUsername] = useState("");
  const [phone, setphone] = useState("");
  const [Emails, setEmails] = useState("");

  const [btnMsg, setBtnMsg] = useState("Create Account");
  const [SignLoad, setSignLoad] = useState(false);

  const ShowPass = () => {
    setShowMsg("text");
    setShow(true);
  };

  const HidePass = async () => {
    setShowMsg("phone");
    setShow(false);
  };


  //Sign Up
  const handleCreateAccount = async (e) => {
    
    setShowErrorMsg("");
    e.preventDefault();

    if (username === "") {
      setBtnMsg("Create Account");
      setSignLoad(false);
      setShowErrorMsg("Please enter Username");
    } else if (phone === "") {
      setBtnMsg("Create Account");
      setSignLoad(false);
      setShowErrorMsg("Please enter phone");
    }else {
    
        setBtnMsg("");
        setSignLoad(true);


        const data = {
          username: username,
          recover_email: Emails,
          recover_phone: phone,
          role: "End User"
        };


        const configs = {
          headers: {
            "Content-Type": "application/json",
          },
        };


      await axios
      .post(
        config.API_BASE_URLS+"auth/register",
        data,
        configs
      )
      .then((response) => {
        router.push("/Accountcreated");
      })
      .catch((error) => {
        setBtnMsg("Create Account");
        setSignLoad(false);
        setShowErrorMsg("Register failed.. Please try again later Error:"+error);
      });
    }
  };





  return (
    <div className={style.logincontainer}>
      <div className={style.loginform}>
        <h1>Sign up</h1>

        <label>Username</label>
        <br />
        <input
          type="text"
          placeholder="Username"
          className="border border-gray-300  py-2 px-4 transition-all focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-green-500"
          value={username}
          onChange={(e) => {
            setUsername(e.target.value);
          }}
          onFocus={() => {
            setBtnMsg("Create Account");
            setSignLoad(false);
            setShowErrorMsg("");
          }}
        ></input>
        <br />

        <label>Email</label>
        <br />
        <input
          type="email"
          placeholder="Email address"
          className="border border-gray-300  py-2 px-4 transition-all focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-green-500"
          value={Emails}
          onChange={(e) => {
            setEmails(e.target.value);
          }}
          onFocus={() => {
            setBtnMsg("Create Account");
            setSignLoad(false);
            setShowErrorMsg("");
          }}
        ></input>
        <br />

        <label>Add phone</label>
        <br />

        <input
          type="tel"
          placeholder="Phone"
          className="border border-gray-300  py-2 px-4 transition-all focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-green-500"
          value={phone}
          onChange={(e) => {
            setphone(e.target.value);
          }}
          onFocus={() => {
            setBtnMsg("Create Account");
            setSignLoad(false);
            setShowErrorMsg("");
          }}
        ></input>
        <br />

        <div className={style.buttons}>
          <button
            onClick={handleCreateAccount}
            className="bg-green-600 hover:bg-green-800 text-white font-normal  px-6 h-10 rounded-full transition-all  w-full flex justify-center items-center"
          >
            {SignLoad ? (
              <Image src="/load.gif" alt="My Image" width={20} height={20} />
            ) : null}
            {btnMsg}
          </button>
        </div>

        <p className="text-red-600 text-xs">{showErrorMsg}</p>

        <div className="flex justify-center items-center w-full h-20">
          <p>
            Already have an account?{" "}
            <Link
              href={"Login"}
              className="text-bold text-green-700 hover:text-green-900 transition-all"
            >
              {" "}
              Sign In
            </Link>{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default AccountCreate;
