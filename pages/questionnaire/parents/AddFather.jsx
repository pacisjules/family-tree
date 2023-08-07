import React, { useState } from 'react';
import styles from "@/styles/forms/App.module.css"
import Link from 'next/link';
import { useSelector, useDispatch } from "react-redux";
import { adduserfather } from "@/features/userdetails/userdetails.js"
import { useRouter } from "next/router";

const AddFather = () => {
    const dispatch = useDispatch();
    const router = useRouter();
    const [firstName, setFirstName] = useState("");
    const [LastName, setLastName] = useState("");
    const [msg, setMsg] = useState("");


    const handleAddtoList = () => {

        if (firstName === "") {
            setMsg('Please add Father First name');
        } else if (LastName === "") {
            setMsg('Please add Father Last name');
        } else {
            dispatch(adduserfather({ firstName, LastName }));
            router.push('/questionnaire/parents/AddMother');
        }
    }

    const skip  = ()=>{
        setFirstName('')
        setLastName('')
        dispatch(adduserfather({ firstName, LastName }));
        router.push('/questionnaire/parents/AddMother');
    }

    return (
        <div className={styles.container}>

            <div className={styles.leftSide}>

                <div className={styles.navigations}>
                    <p>
                        <Link href={"/questionnaire/AddBornPlace"} >
                            {"<"} Back
                        </Link>
                    </p>

                    <p>
                        1/2
                    </p>

                </div>

                <br />
                <h1 style={{
                    fontWeight: "bold",
                    fontSize: 22
                }}>Do you want to add your Father?</h1>
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

                <label>Maiden name or last name</label>
                <br />
                <input
                    type="text"
                    placeholder="Maiden name or last name"
                    className="border border-gray-300  py-2 px-4 transition-all w-full mb-6 focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-green-500"
                    value={LastName}
                    onChange={(e) => setLastName(e.target.value)}
                ></input>
                <br />


                <button
                    className="bg-green-600 hover:bg-green-800 h-12 text-white font-normal py-1.5 px-6 rounded-full  transition-all mr-5 w-full flex justify-center items-center"
                    onClick={handleAddtoList}
                >
                    Save
                </button>


                <button
                    className="bg-orange-600 hover:bg-orange-800 h-12 text-white font-normal py-1.5 px-6 rounded-full mt-5  transition-all mr-5 w-full flex justify-center items-center"
                    onClick={skip}
                >
                    Skip
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

export default AddFather;
