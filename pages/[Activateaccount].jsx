
import { useSession } from "next-auth/react";
import Link from "next/link";
import React, { useState } from "react";
import { BiSolidLogInCircle, BiShow, BiSolidHide } from "react-icons/bi";
import { FcGoogle } from "react-icons/fc";
import { FaAppleAlt } from "react-icons/fa";
import { signIn } from "next-auth/react";
import { useRouter } from "next/router";
import Image from "next/image";
import style from "@/styles/login/App.module.css";
import axios from "axios";

const Activateaccount = () => {
  const router = useRouter();
  const { Activateaccount } = router.query;
  const updatedKey = Activateaccount ? Activateaccount.replace("Activateaccount:", "") : "";
  const baseUrl = process.env.BACKEND_URL;

  const [show, setShow] = useState(false);
  const [showMsg, setShowMsg] = useState("password");
  const [showErrorMsg, setShowErrorMsg] = useState("");

  const [password, setPassword] = useState("");
  const [password1, setPassword1] = useState("");

  const [btnMsg, setBtnMsg] = useState("Activate");
  const [SignLoad, setSignLoad] = useState(false);

  const ShowPass = () => {
    setShowMsg("text");
    setShow(true);
  };

  const HidePass = async () => {
    setShowMsg("password");
    setShow(false);
  };


  //Login form
  const handleLogin = async (e) => {

    setShowErrorMsg("")
    e.preventDefault();

    if (password === "") {
      setBtnMsg("Activate")
      setSignLoad(false)
      setShowErrorMsg("Please enter your password");
    } else if (password1 === "") {
      setBtnMsg("Activate")
      setSignLoad(false)
      setShowErrorMsg("Please enter your confirm password");
    }

    else {

      if (password1 != password) {
        setShowErrorMsg("Password are not match")
      } else {

        setBtnMsg("")
        setSignLoad(true)


        const data = {
          key: updatedKey,
          n_pass: password1,
        };

        const config = {
          headers: {
            "Content-Type": "application/json",
          },
        };


        await axios
          .post(
            "http://127.0.0.1:8000/auth/activeaccount",
            data,
            config
          )
          .then((response) => {
            router.push("/Login");
          })
          .catch((error) => {
            setBtnMsg("Create Account");
            setSignLoad(false);
            setShowErrorMsg("Register failed.. Please try again later Error:" + error);
          });




      }

    }
  };

  React.useEffect(() => {

  }, []);


  return (
    <div className={style.logincontainer}>
      <div className={style.loginform}>
        <h1>Activate your account</h1>
        <p>Fill well the password you will use.</p>
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
            setBtnMsg("Activate");
            setSignLoad(false);
            setShowErrorMsg("");
          }}
        ></input>
        <br />


        <br />
        <label>Confirm password</label>
        <br />

        <input
          type={showMsg}
          placeholder="Confirm password"
          className="border border-gray-300  py-2 px-4 transition-all focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-green-500"
          value={password1}
          onChange={(e) => {
            setPassword1(e.target.value);
          }}
          onFocus={() => {
            setBtnMsg("Activate");
            setSignLoad(false);
            setShowErrorMsg("");
          }}
        ></input>
        <br />

        <div className={style.buttons}>
          <button
            onClick={handleLogin}
            className="bg-green-600 hover:bg-green-800 text-white font-normal h-10  px-6 rounded-full transition-all w-full flex justify-center items-center"
          >
            {SignLoad ? (
              <Image src="/load.gif" alt="My Image" width={20} height={20} />
            ) : (
              null
            )}
            {btnMsg}
          </button>
        </div>

        <br />
        <p className="text-red-600 text-xs">{showErrorMsg}</p>

      </div>
    </div>
  );

};

export default Activateaccount;
