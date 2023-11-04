import React, { useState } from "react";
import { BiSolidLogInCircle, BiShow, BiSolidHide } from "react-icons/bi";
import { FcGoogle } from "react-icons/fc";
import { FaAppleAlt } from "react-icons/fa";
import { signIn } from "next-auth/react";
import { useRouter } from "next/router";
import Image from "next/image";
import axios from "axios";
import config from "@/utils/config";

import style from "@/styles/createaccount/App.module.css";
import Link from "next/link";

const AccountCreate = () => {
  const router = useRouter();
  const baseUrl = process.env.BACKEND_URL;

  const [show, setShow] = useState(false);
  const [showMsg, setShowMsg] = useState("phone");
  const [showErrorMsg, setShowErrorMsg] = useState("");

  const [btnMsg, setBtnMsg] = useState("Create Account");
  const [SignLoad, setSignLoad] = useState(false);

  const [first_name, setFirst_name] = useState("");
  const [first_nameError, setFirst_nameError] = useState("");
  const [first_nameErrorSign, setFirst_nameErrorSign] = useState(false);

  const [last_name, setLast_name] = useState("");
  const [last_nameError, setLast_nameError] = useState("");
  const [last_nameErrorSign, setLast_nameErrorSign] = useState(false);

  const [Emails, setEmails] = useState("");
  const [EmailsError, setEmailsError] = useState("");
  const [EmailsErrorSign, setEmailsErrorSign] = useState(false);

  const [EmailsConfirm, setEmailsConfirm] = useState("");
  const [EmailsConfirmError, setEmailsConfirmError] = useState("");
  const [EmailsConfirmErrorSign, setEmailsConfirmErrorSign] = useState(false);

  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [passwordErrorSign, setPasswordErrorSign] = useState(false);

  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [passwordConfirmError, setPasswordConfirmError] = useState("");
  const [passwordConfirmErrorSign, setPasswordConfirmErrorSign] =
    useState(false);

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

    if (first_name === "") {
      setBtnMsg("Create Account");
      setSignLoad(false);
      setFirst_nameErrorSign(true);
      setFirst_nameError("Please enter First name");
    } else if (last_name === "") {
      setBtnMsg("Create Account");
      setSignLoad(false);
      setLast_nameErrorSign(true);
      setLast_nameError("Please enter Last name");
    } else if (Emails === "") {
      setBtnMsg("Create Account");
      setSignLoad(false);
      setEmailsErrorSign(true);
      setEmailsError("Please enter Email");
    } else if (EmailsConfirm === "") {
      setBtnMsg("Create Account");
      setSignLoad(false);
      setEmailsConfirmErrorSign(true);
      setEmailsConfirmError("Please rewrite email");
    } else if (password === "") {
      setBtnMsg("Create Account");
      setSignLoad(false);
      setPasswordErrorSign(true);
      setPasswordError("Please enter Password");
    } else if (passwordConfirm === "") {
      setBtnMsg("Create Account");
      setSignLoad(false);
      setPasswordConfirmErrorSign(true);
      setPasswordConfirmError("Please rewrite Password");
    } else if (Emails != EmailsConfirm) {
      setEmailsConfirmErrorSign(true);
      setEmailsConfirmError("Email not match");
    } else if (password != passwordConfirm) {
      setPasswordConfirmErrorSign(true);
      setPasswordConfirmError("Password not match");
    } else {
      setBtnMsg("");
      setSignLoad(true);
      const data = {
        first_name: first_name,
        last_name: last_name,
        password: passwordConfirm,
        recover_email: EmailsConfirm,
        role: "End User",
      };

      const configs = {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Headers":
            "X-Requested-With, Content-Type, Accept",
        },
      };

      await axios
        .post(config.API_BASE_URLS + "auth/register", data, configs)
        .then((response) => {
          localStorage.setItem("current_name", first_name + " " + last_name);
          router.push("/Accountsetup");
        })
        .catch((error) => {
          setBtnMsg("Create Account");
          setSignLoad(false);
          setShowErrorMsg(
            "Register failed.. Please try again later Error:" + error
          );
        });
    }
  };

  return (
    <div className={style.logincontainer}>
      <div
        style={{
          margin: "0 auto",
          textAlign: "center",
        }}
      >
        <h1
          style={{
            fontSize: 30,
            color: "green",
          }}
        >
          Iyali
        </h1>
        <div className={style.loginform}>
          <h1>Sign up</h1>

          <label>First name</label>
          <br />
          <input
            type="text"
            placeholder="First name"
            className="border border-gray-300  py-1.5 px-3 transition-all focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-green-500"
            value={first_name}
            onChange={(e) => {
              setFirst_name(e.target.value);
              setFirst_nameErrorSign(false);
            }}
            onFocus={() => {
              setBtnMsg("Create Account");
              setSignLoad(false);
              setShowErrorMsg("");
            }}
          ></input>

          {first_nameErrorSign ? (
            <span
              style={{
                color: first_nameErrorSign ? "red" : "green",
                fontSize: 13,
              }}
            >
              {first_nameError}
            </span>
          ) : null}

          <br />

          <label>Last name</label>
          <br />
          <input
            type="text"
            placeholder="Last name"
            className="border border-gray-300  py-1.5 px-3 transition-all focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-green-500"
            value={last_name}
            onChange={(e) => {
              setLast_name(e.target.value);
              setLast_nameErrorSign(false);
            }}
            onFocus={() => {
              setBtnMsg("Create Account");
              setSignLoad(false);
              setShowErrorMsg("");
            }}
          ></input>

          {last_nameErrorSign ? (
            <span
              style={{
                color: last_nameErrorSign ? "red" : "green",
                fontSize: 13,
              }}
            >
              {last_nameError}
            </span>
          ) : null}
          <br />

          <label>Email</label>
          <br />

          <input
            type="email"
            placeholder="Email"
            className="border border-gray-300  py-1.5 px-3 transition-all focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-green-500"
            value={Emails}
            onChange={(e) => {
              setEmails(e.target.value);
              var emailPattern =
                /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
              if (emailPattern.test(e.target.value)) {
                setEmailsError("Correct ✔️");
                setEmailsErrorSign(false);
              } else {
                setEmailsError("Email is not correct");
                setEmailsErrorSign(true);
              }
            }}
            onFocus={() => {
              setBtnMsg("Create Account");
              setSignLoad(false);
              setShowErrorMsg("");
            }}
          ></input>

          {EmailsErrorSign ? (
            <span
              style={{
                color: EmailsErrorSign ? "red" : "green",
                fontSize: 13,
              }}
            >
              {EmailsError}
            </span>
          ) : null}
          <br />

          <label>Confirm Email</label>
          <br />
          <input
            type="email"
            placeholder="Confirm Email"
            className="border border-gray-300  py-1.5 px-3 transition-all focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-green-500"
            value={EmailsConfirm}
            onChange={(e) => {
              setEmailsConfirm(e.target.value);

              var emailPattern =
                /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

              if (emailPattern.test(e.target.value)) {
                setEmailsConfirmError("Correct ✔️");
                setEmailsConfirmErrorSign(false);
              } else {
                setEmailsConfirmError("Email is not correct");
                setEmailsConfirmErrorSign(true);
              }
            }}
            onFocus={() => {
              setBtnMsg("Create Account");
              setSignLoad(false);
              setShowErrorMsg("");
            }}
          ></input>

          {EmailsConfirmErrorSign ? (
            <span
              style={{
                color: EmailsConfirmErrorSign ? "red" : "green",
                fontSize: 13,
              }}
            >
              {EmailsConfirmError}
            </span>
          ) : null}

          <br />

          <label>Create Password</label>
          <br />

          <input
            type="password"
            placeholder="Password"
            className="border border-gray-300  py-1.5 px-3 transition-all focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-green-500"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              setPasswordErrorSign(false);
            }}
            onFocus={() => {
              setBtnMsg("Create Account");
              setSignLoad(false);
              setShowErrorMsg("");
            }}
          ></input>

          {passwordErrorSign ? (
            <span
              style={{
                color: passwordErrorSign ? "red" : "green",
                fontSize: 13,
              }}
            >
              {passwordError}
            </span>
          ) : null}

          <br />

          <label>Confirm Password</label>
          <br />

          <input
            type="password"
            placeholder="Confirm Password"
            className="border border-gray-300  py-1.5 px-3 transition-all focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-green-500"
            value={passwordConfirm}
            onChange={(e) => {
              setPasswordConfirm(e.target.value);
              setPasswordConfirmErrorSign(false);
            }}
            onFocus={() => {
              setBtnMsg("Create Account");
              setSignLoad(false);
              setShowErrorMsg("");
            }}
          ></input>

          {passwordConfirmErrorSign ? (
            <span
              style={{
                color: setPasswordConfirmErrorSign ? "red" : "green",
                fontSize: 13,
              }}
            >
              {passwordConfirmError}
            </span>
          ) : null}

          <br />

          <p
            style={{
              fontSize: 12,
              textAlign: "justify",
            }}
          >
            By clicking {'"Create account"'} below, you agree to the Iyali
            <Link
              href={"#"}
              style={{
                color: "green",
                marginLeft: 15,
              }}
            >
              Terms and Conditions and Privacy Statement and agree
            </Link>{" "}
            Iyali may contact you via email about their products and services.
            You can unsubscribe or customize your email settings at any time.
          </p>

          <div className={style.buttons}>
            <button
              onClick={handleCreateAccount}
              className="bg-green-600 hover:bg-green-800 text-white font-normal  px-3 h-10 rounded-full transition-all  w-full flex justify-center items-center"
            >
              {SignLoad ? (
                <Image src="/load.gif" alt="My Image" width={20} height={20} />
              ) : null}
              {btnMsg}
            </button>
          </div>

          <p className="text-red-600 text-xs">{showErrorMsg}</p>

          <div className="flex justify-center items-center w-full h-10 font-normal">
            <p
              style={{
                fontSize: 13,
              }}
            >
              Already have an account?{" "}
              <Link
                href={"Login"}
                className="text-bold text-blue-700 hover:text-blue-900 transition-all"
              >
                {" "}
                Sign In
              </Link>{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountCreate;
