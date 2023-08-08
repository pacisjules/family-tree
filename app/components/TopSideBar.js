import React, { useState } from "react";
import style from "../../styles/topsidebar/App.module.css";
import Link from "next/link";
import Image from "next/image";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/router";
import { signOut } from "next-auth/react";
import { BiBell, BiChat, BiChevronDown } from "react-icons/bi"

function TopSideBar() {
  const dispatch = useDispatch();
  const router = useRouter();
  const { sign_status, userNames, username } = useSelector((state) => state.user_infosred);


  if(sign_status==1){
    return (
      <div className={style.topbar}>
        <div className={style.left}>
          <Link href={"/"}>
            <Image src="/logo.svg" alt="My Image" width={30} height={30} />{" "}
            Iyali{" "}
          </Link>
        </div>

        <div className={style.middle}>
          <ul>
            <li>
              <Link href={"/Information"}>Trees</Link>
            </li>
            <li>
              <Link href={"#"}>Search</Link>
            </li>
            <li>
              <Link href={"Home"}>Explore</Link>
            </li>
            <li>
              <Link href={"#"}>Help Status</Link>
            </li>
          </ul>
        </div>

        <div className={style.right}>
          <ul>
            <li>
              <Link href={"Signup"}>
                <button className="bg-green-600 hover:bg-green-800 text-white font-bold py-1.5 px-6 rounded-full transition-all mr-5">
                  Subscribe
                </button>
              </Link>
            </li>

            <li>
            <Link href={"Signup"}>
                <button className="bg-black-600 hover:bg-gray-800 text-white font-bold py-1.5 px-6 rounded-full transition-all mr-5">
                  <BiBell className="text-xl"/>
                </button>
              </Link>
            </li>

            <li>
              <button
                className="bg-black-600 hover:bg-gray-800 text-white font-bold py-1.5 px-6 rounded-full transition-all mr-5"
              >
                <BiChat className="text-xl"/>
              </button>
              
            </li>


            <li>
                <Link href={"/Profile"}>{userNames===''?username:userNames}</Link>
            </li>
            <li>
              <button
                onClick={() => {
                  signOut();
                  router.push("/");
                }}
                className="bg-black-600 hover:bg-gray-800 text-white font-bold py-1.5 px-6 rounded-full transition-all mr-5"
              >
                Sign Out
              </button>
              
            </li>
          </ul>
        </div>
      </div>
    );
  }else{
    return (
      <div className={style.topbar}>
        <div className={style.left}>
          <Link href={"/"}>
            <Image src="/logo.svg" alt="My Image" width={30} height={30} />Iyali{" "}
          </Link>
        </div>
  
        <div className={style.middle}>
          <ul>
            <li>
              <Link href={"/Information"}>Trees</Link>
            </li>
            <li>
              <Link href={"#"}>Search</Link>
            </li>
            <li>
              <Link href={"Home"}>Explore</Link>
            </li>
            <li>
              <Link href={"#"}>Help Status</Link>
            </li>
          </ul>
        </div>
  
        <div className={style.right}>
          <ul>
            <li>
              <Link href={"Signup"}>
                <button className="bg-green-600 hover:bg-green-800 text-white font-bold py-1.5 px-6 rounded-full transition-all mr-5">
                  Sign Up
                </button>
              </Link>
            </li>
            <li>
              <Link href={"Login"}>
                <button className="bg-black-600 hover:bg-gray-800 text-white font-bold py-1.5 px-6 rounded-full transition-all mr-5">
                  Sign In
                </button>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    );
  }


  
}

export default TopSideBar;
