import React, { useState } from "react";
import { BiLogoGmail } from "react-icons/bi";
import { FcGoogle } from "react-icons/fc";
import { FaAppleAlt } from "react-icons/fa";
import { signIn } from "next-auth/react";
import { useRouter } from "next/router";
import Image from "next/image";

import style from "@/styles/singup/App.module.css";
import Link from "next/link";

const Signup = () => {
    const [show, setShow] = useState(false);
    const [showMsg, setShowMsg] = useState("password");
    const [showErrorMsg, setShowErrorMsg] = useState("");

    const [btnMsg, setBtnMsg] = useState("Sign in");
    const [SignLoad, setSignLoad] = useState(false);

    return (
        <div className={style.logincontainer}>
      <div className={style.loginform}>
        <h1>Sign up</h1>
        <p>Create a free account.</p>



        <br />

        <p className="text-red-600 text-xs">{showErrorMsg}</p>
        <hr />
        <br />

        <div className="border border-gray-300 w-full h-14 rounded-full flex justify-center items-center mt-2 cursor-pointer hover:bg-gray-200 transition-all">
          <FcGoogle className="text-xl" />
          <p className="ml-5">Sign up with Google</p>
        </div>

        <div className="border border-gray-300 w-full h-14 rounded-full flex justify-center items-center mt-2 cursor-pointer hover:bg-gray-200 transition-all">
          <FaAppleAlt className="text-xl" />
          <p className="ml-5">Sign up with Apple</p>
        </div>

        <Link href={"AccountCreate"}>
        <div className="border border-gray-300 w-full h-14 rounded-full flex justify-center items-center mt-2 cursor-pointer hover:bg-gray-200 transition-all">
          <BiLogoGmail className="text-xl" />
          <p className="ml-5">Sign up with Email</p>
        </div>
        </Link>


        <div className="flex justify-center items-center w-full h-20">
             <p>Already have an account? <Link href={"Login"} className="text-bold text-green-700 hover:text-green-900 transition-all"> Sign In</Link> </p>
        </div>
       
      </div>
    </div>
    );
}

export default Signup;
