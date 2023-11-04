import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import styles from "../styles/userprofiles/App.module.css";
import { useSelector, useDispatch } from "react-redux";
import { RiCloseCircleFill } from "react-icons/ri";
import { GrAddCircle } from "react-icons/gr";
import { BsChevronDown } from "react-icons/bs";
import { BiEdit, BiPlus } from "react-icons/bi";
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

function Userprofile() {
    const { data: session, status } = useSession();
    const router = useRouter();
    const [openEditModal, setOpenEditModal] = useState(false);
    const [openFactModal, setOpenFactModal] = useState(false);
    const [openAddNewPersonModal, setopenAddNewPersonModal] = useState(false);


    //SHOW TABS
    const [showLifeStory, setShowLifeStory] = useState(false);
    const [showFact, setShowFact] = useState(true);
    const [showGallery, setShowGallery] = useState(false);
    const [showHints, setShowHints] = useState(false);


    //Open random menu
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
        setopenAddNewPersonModal(true)
    };


    //Radio buttons
    const [selectedGender, setSelectedGender] = useState(''); // State to track the selected gender

    const handleGenderChange = (event) => {
        setSelectedGender(event.target.value);
    };

    //For Radio buttons again
    const [selectedStatus, setSelectedStatus] = useState(''); // State to track the selected status

    const handleStatusChange = (event) => {
        setSelectedStatus(event.target.value);
    };



    const ShowLifeStoryOn = () => {
        setShowLifeStory(true);
        setShowFact(false);
        setShowGallery(false);
        setShowHints(false);
    }


    const ShowFactsOn = () => {
        setShowLifeStory(false);
        setShowFact(true);
        setShowGallery(false);
        setShowHints(false);
    }

    const ShowGalleryOn = () => {
        setShowLifeStory(false);
        setShowFact(false);
        setShowGallery(true);
        setShowHints(false);
    }

    const ShowHintsOn = () => {
        setShowLifeStory(false);
        setShowFact(false);
        setShowGallery(false);
        setShowHints(true);
    }

    const { sign_status, first_name, last_name, username } = useSelector((state) => state.user_infosred);


    React.useEffect(() => {

        if (status === "unauthenticated") {
            router.push("/");
        }
    }, [status, router]);

    if (status === "authenticated") {
        return (
            <>
                <div className={styles.container}>
                    <div className={styles.part1}>
                        <div style={{
                            display:"flex",
                            justifyContent:"center",
                            padding:10
                        }}>
                            <div style={{
                                width:200,
                                height:200,
                                borderRadius:200,
                                backgroundColor:"red"
                            }}>
                            
                            </div>
                        </div>

                        <div>
                            
                        </div>
                    </div>
                    <div className={styles.part2}>
                        <h1>IMAGES</h1>
                    </div>
                </div>
            </>
        )
    }
}

export default Userprofile