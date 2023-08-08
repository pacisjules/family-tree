import React, {useState} from 'react';
import styles from "../../styles/forms/App.module.css"
import Link from 'next/link';

import { useSelector, useDispatch } from "react-redux";
import { adduserbirthdate } from "@/features/userdetails/userdetails.js"
import { useRouter } from "next/router";


const AddBorn = () => {
    const dispatch = useDispatch();
    const router = useRouter();

    const [day, setDay] = useState("");
    const [month, setMonth] = useState("");
    const [year, setYear] = useState("");
    const [msg, setMsg] = useState("");


    const addbirth = ()=>{

        if(day===""){
            setMsg('Please add your day birth');
        }else if(month===""){
            setMsg('Please add your month birth');
        }else if(year===""){
            setMsg('Please add your year birth');
        }else{
            dispatch(adduserbirthdate(year+month+day))
            router.push("/questionnaire/AddBornPlace");
        }
        
    }


    return (
        <div className={styles.container}>

            <div className={styles.leftSide}>

                <div className={styles.navigations}>
                    <p>
                        <Link href={"/questionnaire/AddGender"} >
                            {"<"} Back
                        </Link>
                    </p>

                    <p>
                        3/4
                    </p>

                </div>

                <br />
                <h1 style={{
                    fontWeight: "bold",
                    fontSize: 22
                }}>When were you born?</h1>
                <br />


                <div className={styles.birth}>

                    <input
                        type="number"
                        placeholder="Day"
                        max={31}
                        min={1}
                        className="border border-gray-300  py-2 px-4 transition-all w-20 mb-6 focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-green-500"
                        value={day}
                        onChange={(e)=>setDay(e.target.value)}
                    ></input>


<input
                        type="number"
                        placeholder="Month"
                        max={12}
                        min={1}
                        className="border border-gray-300  py-2 px-4 transition-all w-24 mb-6 focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-green-500"
                        value={month}
                        onChange={(e)=>setMonth(e.target.value)}
                    ></input>



<input
                        type="number"
                        placeholder="Year"
                        max={3000}
                        min={1900}
                        className="border border-gray-300  py-2 px-4 transition-all w-32 mb-6 focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-green-500"
                        value={year}
                        onChange={(e)=>setYear(e.target.value)}
                    ></input>

                </div>



                <br />

                <Link href={"/questionnaire/AddBornPlace"}>
              
                </Link>

                <button
                    className="bg-green-600 hover:bg-green-800 h-12 text-white font-normal py-1.5 px-6 rounded-md  transition-all mr-5 w-full flex justify-center items-center"
                    onClick={addbirth}
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

export default AddBorn;
