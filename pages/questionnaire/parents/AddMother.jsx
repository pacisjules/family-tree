import React, { useState } from 'react';
import styles from "@/styles/forms/App.module.css"
import Link from 'next/link';
import { useSelector, useDispatch } from "react-redux";
import { addusermother } from "@/features/userdetails/userdetails.js"
import { useRouter } from "next/router";
import { AiFillCloseCircle } from 'react-icons/ai'
import axios from "axios";
import Image from 'next/image';
import config from  '@/utils/config'; 

const AddMother = () => {
    const dispatch = useDispatch();
    const router = useRouter();
    const [firstName, setFirstName] = useState("");
    const [LastName, setLastName] = useState("");
    const [msg, setMsg] = useState("");
    const [show, setShow] = useState("none");
    const [btnMsg, setBtnMsg] = useState("Finish Setup!");
    const [SignLoad, setSignLoad] = useState(false);
    const [showErrorMsg, setShowErrorMsg] = useState("");

    const { registerInfos } = useSelector((state) => state.userdetails);




    const skip = () => {
        setFirstName('')
        setLastName('')
        dispatch(addusermother({ firstName, LastName }));
        router.push('/questionnaire/parents/AddMother');
    }

    const closeHover = () => {
        setShow("none");
    }


    const addPersonInformation = ()=>{
        router.push('/Completed')
    }


    const showaddmother = ()=>{
        if (firstName === "") {
            setMsg('Please add Father First name');
        } else if (LastName === "") {
            setMsg('Please add Father Last name');
        } else {
            dispatch(addusermother({ firstName, LastName }));
            setShow("flex");
        }
        
    }


    //Sign Up
    const handleCreateAccount = async (e) => {

        setShowErrorMsg("");
        e.preventDefault();


        setBtnMsg("");
        setSignLoad(true);


        const data = {
            first_name: registerInfos[0].first_name,
            last_name: registerInfos[0].last_name,
            gender: registerInfos[0].gender,
            born_date: registerInfos[0].birthDate,
            Birthplace: registerInfos[0].birthPlace,
            is_living: "true",
            father_ID: registerInfos[0].father_ID,
            mother_ID: registerInfos[0].mother_ID,
            User_ID: registerInfos[0].User_ID
        };


        const configs = {
            headers: {
                "Content-Type": "application/json",
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': 'X-Requested-With, Content-Type, Accept',
            },
        };

        console.log(data);


        await axios
            .post(
                config.API_BASE_URLS+"person/register",
                data,
                configs
            )
            .then((response) => {
                router.push("/Completed");
            })
            .catch((error) => {
                setBtnMsg("Finish Setup!");
                setSignLoad(false);
                setShowErrorMsg("Register failed.. Please try again later Error:" + error);
            });

    };




    return (
        <div className={styles.container}>

            <div className={styles.leftSide}>

                <div className={styles.navigations}>
                    <p>
                        <Link href={"/questionnaire/parents/AddFather"} >
                            {"<"} Back
                        </Link>
                    </p>

                    <p>
                        2/2
                    </p>

                </div>

                <br />
                <h1 style={{
                    fontWeight: "bold",
                    fontSize: 22
                }}>Do you want to add your Mother?</h1>
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
                    onClick={showaddmother}
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


            <div className={styles.ov} style={{
                display: show
            }}>
                <div className={styles.in}>
                    <AiFillCloseCircle className={styles.icon} onClick={closeHover} />
                    <h3 style={{
                        fontWeight: "bold",
                        color: "green"
                    }}>Done!</h3><br />

                    <p className={styles.msgText}>
                        Hey {registerInfos[0].first_name + " " + registerInfos[0].last_name} Great job on completing the setup!
                        🎉 Before you proceed, take a moment to confirm that the agreement is okay. Read through it carefully to ensure you understand the terms and conditions. Your agreement signifies your commitment, so make sure you are comfortable with all aspects. If everything checks out, go ahead and embrace this exciting opportunity with confidence! Happy journey ahead! 🌟
                    </p>
                    <br /><br />
                    <button className="bg-green-600 hover:bg-green-800 h-12 text-white font-normal py-1.5 px-6 rounded-md  transition-all mr-5 w-full flex justify-center items-center"
                        onClick={handleCreateAccount}
                    >

                        {SignLoad ? (
                            <Image src="/load.gif" alt="My Image" width={20} height={20} />
                        ) : btnMsg}


                    </button>

                    {showErrorMsg}

                </div>


            </div>


        </div>
    );
}

export default AddMother;
