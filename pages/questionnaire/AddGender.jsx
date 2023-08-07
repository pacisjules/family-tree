import React, {useState} from 'react';
import styles from "@/styles/forms/App.module.css"
import Link from 'next/link';
import { useSelector, useDispatch } from "react-redux";
import { addusergender } from "@/features/userdetails/userdetails.js"
import { useRouter } from "next/router";

const AddGender = () => {
    const dispatch = useDispatch();
    
    return (
        <div className={styles.container}>

            <div className={styles.leftSide}>

                <div className={styles.navigations}>
                    <p>
                        <Link href={"/questionnaire/AddNames"} >
                            {"<"} Back
                        </Link>
                    </p>

                    <p>
                        2/4
                    </p>

                </div>

                <br />
                <h1 style={{
                    fontWeight: "bold",
                    fontSize: 22
                }}>Select your gender</h1>


                <br />
                <Link href={"/questionnaire/AddBorn"}>
                    <button
                        className="bg-green-600 hover:bg-green-800 h-12 text-white font-normal py-1.5 px-6 rounded-md  transition-all mr-5 w-full flex justify-center items-center"
                        onClick={()=>dispatch(addusergender('Female'))}
                    >
                        Female
                    </button></Link>


                <br />
                <Link href={"/questionnaire/AddBorn"}>
                    <button
                        className="bg-green-600 hover:bg-green-800 h-12 text-white font-normal py-1.5 px-6 rounded-md  transition-all mr-5 w-full flex justify-center items-center"
                        onClick={()=>dispatch(addusergender('Male'))}
                   >
                        Male
                    </button></Link>



            </div>


            <div className={styles.rightSide}>
                <h1>Explains</h1>
            </div>


        </div>
    );
}

export default AddGender;
