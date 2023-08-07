import React, { useState, useRef } from 'react';
import styles from "@/styles/forms/App.module.css"
import Link from 'next/link';
import { useSelector, useDispatch } from "react-redux";
import { adduserbirthplace, adduserID } from "@/features/userdetails/userdetails.js"
import { useRouter } from "next/router";
import axios from 'axios';
import { AiFillCloseCircle } from 'react-icons/ai'



const AddBornPlace = () => {
    const dispatch = useDispatch();
    const router = useRouter();
    const [inputValue, setInputValue] = useState('');
    const [suggestions, setSuggestions] = useState([]);
    const [msg, setMsg] = useState("");
    const [show, setShow] = useState("none");
    const [showbtn, setShowBtn] = useState(false);


    const handleChange = async (e) => {
        const input = e.target.value;
        setInputValue(input);

        try {
            const response = await axios.get(`/api/places?input=${input}`);
            setSuggestions(response.data.predictions);
            console.log(suggestions)
        } catch (error) {
            console.error('Error fetching suggestions', error);
        }
    };


    const closeHover = () =>{
        setShow("none");
    }


    const handleselect = (e) => {
        console.log("selected: " + e);
        setInputValue(e)
        setSuggestions([]);
        setShowBtn(true)
    }


    const handlesetplace = () => {
        if (inputValue === "") {
            setMsg('Please select your birth place');
        } else {
            dispatch(adduserbirthplace(inputValue))
            dispatch(adduserID(localStorage.getItem("id")))
            setShow("flex");
        }
    }


    const addPersonInformation = ()=>{
        router.push('/questionnaire/parents/AddFather')
    }



    const { registerInfos } = useSelector((state) => state.userdetails);

    return (
        <div className={styles.container}>

            <div className={styles.leftSide}>

                <div className={styles.navigations}>
                    <p>
                        <Link href={"/questionnaire/AddBorn"} >
                            {"<"} Back
                        </Link>
                    </p>

                    <p>
                        4/4
                    </p>

                </div>

                <br />
                <h1 style={{
                    fontWeight: "bold",
                    fontSize: 22
                }}>Where were you born?</h1>
                <br />


                <label>Birthplace</label>
                <br /><br />
                <input
                type="text"
                placeholder="Enter a location... Ex. Kenya, Nairobi"
                className="border border-gray-300  py-2 px-4 transition-all w-full mb-6 focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-green-500"
                value={inputValue}
                onChange={handleChange}
            ></input>

            <ul>
                {suggestions.map((suggestion) => (
                    <li onClick={() => handleselect(suggestion.description)} className={styles.list} key={suggestion.place_id}>{suggestion.description}</li>
                ))}
            </ul>
                <br />
            {showbtn? <button className="bg-green-600 hover:bg-green-800 h-12 text-white font-normal py-1.5 px-6 rounded-md  transition-all mr-5 w-full flex justify-center items-center"
                onClick={handlesetplace}
                >Done</button>:""}
               

            </div>


            <div className={styles.rightSide}>
                <h1>Explains</h1>
            </div>


            <div className={styles.ov} style={{
                display:show
            }}>
                <div className={styles.in}>
                    <AiFillCloseCircle className={styles.icon}  onClick={closeHover}/>
                    <h3 style={{
                        fontWeight: "bold",
                        color: "green"
                    }}>Names</h3>
                    {registerInfos[0].first_name + " " + registerInfos[0].last_name}
                    <br /><br />
                    <h3 style={{
                        fontWeight: "bold",
                        color: "green"
                    }}>Gender</h3>
                    {registerInfos[0].gender}
                    <br /><br />
                    <h3 style={{
                        fontWeight: "bold",
                        color: "green"
                    }}>Born date</h3>
                    {registerInfos[0].birthDate}
                    <br /><br />
                    <h3 style={{
                        fontWeight: "bold",
                        color: "green"
                    }}>Born place</h3>
                    {registerInfos[0].birthPlace}
                    <br /><br />
                    <button className="bg-green-600 hover:bg-green-800 h-12 text-white font-normal py-1.5 px-6 rounded-md  transition-all mr-5 w-full flex justify-center items-center"
                    onClick={addPersonInformation}
                    >Confirm & Continue</button>
                </div>


            </div>


        </div>
    );
}

export default AddBornPlace;
