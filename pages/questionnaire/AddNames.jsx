import React, { useState } from 'react';
import styles from "../../styles/forms/App.module.css"
import Link from 'next/link';
import { useSelector, useDispatch } from "react-redux";
import { adduserInfos } from "@/features/userdetails/userdetails.js"
import { useRouter } from "next/router";

const AddNames = () => {
    const dispatch = useDispatch();
    const router = useRouter();
    const [firstName, setFirstName] = useState("");
    const [LastName, setLastName] = useState("");
    const [msg, setMsg] = useState("");


    const handleAddtoList = () => {

        if (firstName === "") {
            setMsg('Please add your First name');
        } else if (LastName === "") {
            setMsg('Please add your Last name');
        } else {
            dispatch(adduserInfos({ firstName, LastName }));
            router.push('/questionnaire/AddGender');
        }


    }

    return (
        <div className={styles.container}>

            <div className={styles.leftSide}>

                <div className={styles.navigations}>
                    <p>
                        <Link href={"/questionnaire/Intro"} >
                            {"<"} Back
                        </Link>
                    </p>

                    <p>
                        1/4
                    </p>

                </div>

                <br />
                <h1 style={{
                    fontWeight: "bold",
                    fontSize: 22
                }}>Start with yourself</h1>
                <br />


                <label>First name</label>
                <br />
                <input
                    type="text"
                    placeholder="First name"
                    className="border border-gray-300  py-2 px-4 transition-all w-full mb-6 focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-green-500"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                ></input>
                <br />

                <label>Last name</label>
                <br />
                <input
                    type="text"
                    placeholder="Last name"
                    className="border border-gray-300  py-2 px-4 transition-all w-full mb-6 focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-green-500"
                    value={LastName}
                    onChange={(e) => setLastName(e.target.value)}
                ></input>
                <br />

                <button
                    className="bg-green-600 hover:bg-green-800 h-12 text-white font-normal py-1.5 px-6 rounded-md  transition-all mr-5 w-full flex justify-center items-center"
                    onClick={handleAddtoList}
                >
                    Next
                </button>

                <p style={{
                    color: "red"
                }}>
                    {msg}
                </p>



            </div>


            <div className={styles.rightSide}>
                <h1>Explains</h1>
            </div>


        </div>
    );
}

export default AddNames;
