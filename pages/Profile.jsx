import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import styles from "../styles/profiles/App.module.css";
import { useSelector, useDispatch } from "react-redux";
import { RiCloseCircleFill } from "react-icons/ri";
import { GrAddCircle } from "react-icons/gr";
import { BsChevronDown } from "react-icons/bs";
import { BiEdit, BiPlus } from "react-icons/bi";
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Box from '@mui/material/Box';
import Popper from '@mui/material/Popper';
import { List, ListItem, ListItemText, Typography, Paper } from '@mui/material';

function Profile() {
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

  //Popup menu
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popper' : undefined;


  const handleClose = () => {
    setAnchorEl(null);
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
          <div className={styles.upside}>
            <div className={styles.inside}>

              <div className={styles.photo}>
                <Image
                  src="/man.svg"
                  alt="My Image"
                  width={0}
                  height={0}
                  style={{
                    borderRadius: "10px",
                    margin: 5,
                  }}
                />
              </div>

              <div className={styles.infos}>
                <h1>
                  {first_name} {last_name}
                </h1>

                <p> <span style={{
                  fontWeight: "bold"
                }}>BIRTH 1977</span> .Nairobi Area, Kenya</p>
                <p> <span style={{
                  fontWeight: "bold"
                }}>DEATH</span> Living</p>

                <button
                  onClick={() => {
                    router.push("/Userprofile");
                  }}
                  style={{
                    width: 50,
                    backgroundColor: "white",
                    padding: 5,
                    color: "black",
                    borderRadius: 20,
                    marginTop: 10,
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-around"
                  }}><BiPlus style={{
                    fontSize: 20
                  }} /> <BiEdit style={{
                    fontSize: 20
                  }} /> </button>
              </div>

              <div
                onClick={() => {
                  setOpenEditModal(true);
                }}
                className={styles.infosQuickEdit}
              >
                <span>Edit </span> <BsChevronDown style={{
                  fontSize: 20,
                  marginLeft: 10
                }} />
              </div>






            </div>
          </div>

          <div className={styles.menu}>
            <div className={styles.inside}>
              <ul>
                {/* <li><Link href={"tab:lifeStory"} onClick={ShowLifeStoryOn}>LifeStory</Link> </li> */}
                <li><Link href={"tab:lifeFact"} onClick={ShowFactsOn}>Facts</Link></li>
                {/* <li><Link href={"tab:lifeGallery"} onClick={ShowGalleryOn}>Gallery</Link></li>
                <li><Link href={"tab:lifeHint"} onClick={ShowHintsOn}>Hints</Link></li> */}
              </ul>
            </div>
          </div>


          <div className={styles.downside}>
            <div className={styles.lifeStory} style={{
              display: showLifeStory ? "flex" : "none"
            }}>
              <h1>LifeStory</h1>
            </div>

            <div className={styles.Facts} style={{
              display: showFact ? "flex" : "none"
            }}>

              <div className={styles.sideFact}>

                <div style={{
                  display: "flex",
                  justifyContent: "space-between",
                }}>
                  <h1 style={{
                    fontWeight: "bold"
                  }}>Facts</h1>

                  <div style={{
                    display: "flex",
                    justifyContent: "center",
                  }}>
                    <div style={{
                      width: 90,
                      height: 25,
                      display: "flex",
                      justifyContent: "space-around",
                      alignItems: "center",
                      fontSize: 14,
                      fontWeight: "bold",
                      cursor: "pointer",
                      backgroundColor: "#d1d1d1",
                      borderRadius: "50px 0px 0px 50px"
                    }}>
                      Filter <BsChevronDown style={{
                        fontSize: 20,
                      }} />
                    </div>
                    <div
                      onClick={() => setOpenFactModal(true)}
                      style={{
                        width: 90,
                        height: 25,
                        display: "flex",
                        justifyContent: "space-around",
                        alignItems: "center",
                        fontSize: 14,
                        fontWeight: "bold",
                        cursor: "pointer",
                        backgroundColor: "#d1d1d1",
                        marginLeft: 1,
                        borderRadius: "0px 50px 50px 0px"
                      }}>
                      <GrAddCircle style={{
                        fontSize: 20,
                      }} /> Add
                    </div>
                  </div>
                </div>

                <div style={{
                  display: "flex",
                  flexDirection: "column",
                  padding: 2,
                  borderRadius: 5,
                  alignItems: "flex-start",
                  width: "100%",
                  justifyContent: "flex-start",
                  cursor: "pointer",
                  backgroundColor: "#00071c",
                  padding: 5,
                  marginTop: 20
                }}>
                  <h1 style={{
                    fontWeight: "bold",
                    fontSize: 15,
                    color: "white"
                  }}>Birth</h1>
                  <h1 style={{
                    fontWeight: "normal",
                    fontSize: 14,
                    color: "white"
                  }}>1 Aug 1994 • Rwanda</h1>

                </div>



                <div style={{
                  display: "flex",
                  flexDirection: "row",
                  border: "2px gray dashed",
                  padding: 2,
                  borderRadius: 5,
                  alignItems: "center",
                  width: "100%",
                  justifyContent: "center",
                  padding: 10,
                  marginTop: 10,
                  backgroundColor: "#e0f6ff"
                }}>
                  <h1 style={{
                    fontWeight: "bold",
                    fontSize: 15
                  }}>Possible marriage records</h1>
                  <h1 style={{
                    fontWeight: "bold",
                    fontSize: 14,
                    color: "white",
                    backgroundColor: "#00071c",
                    paddingLeft: 15,
                    paddingRight: 15,
                    paddingTop: 5,
                    paddingBottom: 5,
                    borderRadius: 50,
                    marginLeft: 20,
                    cursor: "pointer",
                  }}>Search</h1>

                </div>


                <div
                  onClick={() => setOpenFactModal(true)}
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    border: "1px gray dashed",
                    padding: 2,
                    borderRadius: 5,
                    alignItems: "center",
                    width: "100%",
                    justifyContent: "flex-start",
                    backgroundColor: "white",
                    padding: 10,
                    marginTop: 10,
                    cursor: "pointer"
                  }}>
                  <GrAddCircle style={{
                    fontSize: 20,
                  }} />

                  <h1 style={{
                    fontWeight: "bold",
                    fontSize: 14,
                    marginLeft: 10,
                    cursor: "pointer",
                  }}>Add fact</h1>

                </div>

              </div>


              {/* <div className={styles.sideSource}>
                <h1>Sources</h1>
              </div> */}


              <div className={styles.sideFamily}>

                <div className={styles.top} style={{
                  display: "flex",
                  justifyContent: "space-between",
                }}>
                  <h1 style={{
                    fontWeight: "bold"
                  }}>Family</h1>

                  <div
                    id="basic-button"
                    aria-describedby={id} 
                    onClick={handleClick}
                    style={{
                      width: 110,
                      height: 30,
                      display: "flex",
                      justifyContent: "space-around",
                      alignItems: "center",
                      backgroundColor: "#d1d1d1",
                      paddingLeft: 13,
                      paddingRight: 13,
                      borderRadius: 25,
                      fontSize: 14,
                      fontWeight: "bold",
                      cursor: "pointer"
                    }}>
                    <GrAddCircle style={{
                      fontSize: 20,
                    }} /> Add <BsChevronDown style={{
                      fontSize: 20,
                    }} />
                  </div>
                </div>

        <Popper id={id} open={open} anchorEl={anchorEl}>


        <div className={styles.popMenu} >
          
          <h2 style={{
            fontSize:14
          }}>Add family member
          </h2>

          <ul>
            <li onClick={handleClick}>Father</li>
            <li onClick={handleClick}>Mother</li>
            <li onClick={handleClick}>Spouse</li>
            <li onClick={handleClick}>Son</li>
            <li onClick={handleClick}>Spouse</li>
            <li onClick={handleClick}>Daughter</li>
            <li onClick={handleClick}>Brother</li>
            <li onClick={handleClick}>Sister</li>
          </ul>
        </div>

      </Popper>

                <h2 style={{
                  fontSize: 15,
                  marginTop: 10
                }}>Parents</h2>

                <div style={{
                  marginTop: 20
                }}>

                  <div
                    onClick={() => setopenAddNewPersonModal(true)}
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      border: "1px gray dashed",
                      padding: 2,
                      borderRadius: 5,
                      alignItems: "center",
                      width: 200,
                      justifyContent: "flex-start",
                      cursor: "pointer"
                    }}>
                    <Image
                      src="/man.svg"
                      alt="My Image"
                      width={20}
                      height={20}
                      style={{
                        borderRadius: "50px 0px 50px 50px",
                        margin: 5,
                      }}
                    />
                    <h2 style={{
                      fontSize: 14,
                      fontWeight: "bold"
                    }}>Add father</h2>
                  </div>


                  <div style={{
                    display: "flex",
                    flexDirection: "row",
                    border: "1px gray dashed",
                    padding: 2,
                    borderRadius: 5,
                    alignItems: "center",
                    width: 200,
                    justifyContent: "flex-start",
                    marginTop: 10,
                    cursor: "pointer"
                  }}>
                    <Image
                      src="/woman.svg"
                      alt="My Image"
                      width={20}
                      height={20}
                      style={{
                        borderRadius: "50px 0px 50px 50px",
                        margin: 5,
                      }}
                    />
                    <h2 style={{
                      fontSize: 14,
                      fontWeight: "bold"
                    }}>Add mother</h2>
                  </div>



                  <h2 style={{
                    fontSize: 15,
                    marginTop: 10
                  }}>Spouse</h2>

                  <div
                    onClick={() => setopenAddNewPersonModal(false)}
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      border: "1px gray dashed",
                      padding: 2,
                      borderRadius: 5,
                      alignItems: "center",
                      width: 200,
                      justifyContent: "flex-start",
                      marginTop: 10,
                      cursor: "pointer"
                    }}>
                    <GrAddCircle style={{
                      fontSize: 25,
                    }} />
                    <h2 style={{
                      fontSize: 14,
                      fontWeight: "bold",
                      marginLeft: 10
                    }}>Add Spouse</h2>
                  </div>


                  <div style={{
                    display: "flex",
                    flexDirection: "row",
                    border: "1px gray dashed",
                    padding: 2,
                    borderRadius: 5,
                    alignItems: "center",
                    width: 200,
                    justifyContent: "flex-start",
                    marginTop: 10,
                    cursor: "pointer"
                  }}>
                    <GrAddCircle style={{
                      fontSize: 25,
                    }} />
                    <h2 style={{
                      fontSize: 14,
                      fontWeight: "bold",
                      marginLeft: 10
                    }}>Add Family</h2>
                  </div>

                </div>


              </div>



            </div>

            <div className={styles.Gallery} style={{
              display: showGallery ? "flex" : "none"
            }}>
              <h1>Gallery</h1>
            </div>

            <div className={styles.Hints} style={{
              display: showHints ? "flex" : "none"
            }}>
              <h1>Hints</h1>
            </div>

          </div>



        </div>


        <div className={styles.EditModal} style={{
          display: openEditModal ? "flex" : "none"
        }}>
          <div className={styles.box}>
            <div className={styles.boxTitle}>
              <h1 style={{
                fontWeight: "bold"
              }}>Quit edit</h1>

              <RiCloseCircleFill
                onClick={() => {
                  setOpenEditModal(false);
                }}
                style={{
                  fontSize: 25,
                  color: "gray",
                  cursor: "pointer"
                }} />
            </div>

            <div style={{
              padding: 20,
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-around",
              height: "85%"
            }}>


              <div style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "flex-start"
              }}>

                <div style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-start"
                }}>
                  <label style={{
                    fontSize: 15,
                    fontWeight: "bold",
                    marginBottom: 5
                  }}>First and middle name</label>
                  <input type="text" placeholder="First names" style={{
                    //width:250,
                    height: 33,
                    padding: 10,
                    outline: "none",
                    border: "1px solid #bababa",
                    backgroundColor: "white"
                  }} />
                </div>


                <div style={{
                  display: "flex",
                  flexDirection: "column",
                  marginLeft: 10
                }}>
                  <label style={{
                    fontSize: 15,
                    fontWeight: "bold",
                    marginBottom: 5
                  }}>Last name</label>
                  <input type="text" placeholder="Last name" style={{
                    // width:250,
                    height: 33,
                    padding: 10,
                    outline: "none",
                    border: "1px solid #bababa",
                    backgroundColor: "white"
                  }} />
                </div>


                <div style={{
                  display: "flex",
                  flexDirection: "column",
                  marginLeft: 10
                }}>
                  <label style={{
                    fontSize: 15,
                    fontWeight: "bold",
                    marginBottom: 5
                  }}>Suffix</label>
                  <input type="text" placeholder="Suffix" style={{
                    width: 150,
                    height: 33,
                    padding: 10,
                    outline: "none",
                    border: "1px solid #bababa",
                    backgroundColor: "white"
                  }} />
                </div>
              </div>

              <br />
              <div style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "flex-start"
              }}>

                <div style={{
                  display: "flex",
                  flexDirection: "column",
                  width: "80%",
                  justifyContent: "flex-start"
                }}>
                  <label style={{
                    fontSize: 15,
                    fontWeight: "bold",
                    marginBottom: 2
                  }}>Gender</label>

                  <div style={{
                    width: "100%",
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}>
                    <label>
                      <input
                        type="radio"
                        name="gender"
                        value="Male"
                        checked={selectedGender === 'Male'}
                        onChange={handleGenderChange}
                      />
                      Male
                    </label>

                    <label>
                      <input
                        type="radio"
                        name="gender"
                        value="Female"
                        checked={selectedGender === 'Female'}
                        onChange={handleGenderChange}
                      />
                      Female
                    </label>

                    <label>
                      <input
                        type="radio"
                        name="gender"
                        value="Unknown"
                        checked={selectedGender === 'Unknown'}
                        onChange={handleGenderChange}
                      />
                      Unknown
                    </label>

                  </div>



                </div>
              </div>
              <br />
              <div style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "flex-start"
              }}>

                <div style={{
                  display: "flex",
                  flexDirection: "column",
                  width: "80%",
                  justifyContent: "flex-start"
                }}>
                  <label style={{
                    fontSize: 15,
                    fontWeight: "bold",
                    marginBottom: 2
                  }}>Status</label>

                  <div style={{
                    width: "100%",
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "flex-start"
                  }}>
                    <label>
                      <input
                        type="radio"
                        name="lifeStatus"
                        value="Deceased"
                        checked={selectedStatus === 'Deceased'}
                        onChange={handleStatusChange}
                      />
                      Deceased
                    </label>

                    <label>
                      <input
                        type="radio"
                        name="lifeStatus"
                        value="Living"
                        checked={selectedStatus === 'Living'}
                        onChange={handleStatusChange}
                        style={{
                          marginLeft: 20
                        }}
                      />
                      Living
                    </label>
                  </div>



                </div>
              </div>



              <div style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "flex-start",
                marginTop: 20
              }}>

                <div style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-start"
                }}>
                  <label style={{
                    fontSize: 15,
                    fontWeight: "bold",
                    marginBottom: 5
                  }}>Birthdate</label>
                  <input type="text" placeholder="Birth date" style={{
                    //width:250,
                    height: 33,
                    padding: 10,
                    outline: "none",
                    border: "1px solid #bababa",
                    backgroundColor: "white"
                  }} />
                </div>


                <div style={{
                  display: "flex",
                  flexDirection: "column",
                  marginLeft: 10
                }}>
                  <label style={{
                    fontSize: 15,
                    fontWeight: "bold",
                    marginBottom: 5
                  }}>Birthplace</label>
                  <input type="text" placeholder="Birthplace" style={{
                    // width:250,
                    height: 33,
                    padding: 10,
                    outline: "none",
                    border: "1px solid #bababa",
                    backgroundColor: "white"
                  }} />
                </div>

              </div>
              <div style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "flex-start",
                marginTop: 20
              }}>
                <div className={styles.mybtns} style={{
                  backgroundColor: "green",
                  color: "white"
                }}>Save</div>


                <div
                  onClick={() => setOpenEditModal(false)}
                  className={styles.mybtns}
                  style={{
                    backgroundColor: "#bababa",
                    color: "black",
                    marginLeft: 25
                  }}>Cancel</div>
              </div>
            </div>
          </div>
        </div>



        <div className={styles.EditModal} style={{
          display: openFactModal ? "flex" : "none"
        }}>
          <div className={styles.box} style={{
            width: '35%',
            height: 'auto',
          }}>
            <div className={styles.boxTitle}>
              <h1 style={{
                fontWeight: "bold"
              }}>Add fact or event</h1>

              <RiCloseCircleFill
                onClick={() => {
                  setOpenFactModal(false);
                }}
                style={{
                  fontSize: 25,
                  color: "gray",
                  cursor: "pointer"
                }} />
            </div>
            <div style={{
              padding: 10
            }}>
              <select id="addFactSelect" name="addFactSelect" style={{
                width: "100%",
                position: "relative",
                fontFamily: "Arial",
                outline: "none",
                padding: 10,
                borderBottom: "2px solid black",
                border: "1px solid gray"
              }}>
                <option value="Select an event type">Select an event type</option>
                <option id="birth" value="Birth">Birth</option>
                <option id="death" value="Death">Death</option>
                <option id="marriage" value="Marriage">Marriage</option>
                <option id="customevent" value="Custom Event">Custom Event</option>
                <optgroup label="Other facts">
                  <option id="address" value="Address">Address</option>
                  <option id="adoption" value="Adoption">Adoption</option>
                  <option id="adultchristening" value="Adult Christening">Adult Christening</option>
                  <option id="aka" value="Also Known As">Also Known As</option>
                  <option id="annulment" value="Annulment">Annulment</option>
                  <option id="arrival" value="Arrival">Arrival</option>
                  <option id="baptism" value="Baptism">Baptism</option>
                  <option id="baptismlds" value="Baptism (LDS)">Baptism (LDS)</option>
                  <option id="barmitzvah" value="Bar Mitzvah">Bar Mitzvah</option>
                  <option id="blessing" value="Blessing">Blessing</option>
                  <option id="burial" value="Burial">Burial</option>
                  <option id="caste" value="Caste">Caste</option>
                  <option id="causeofdeath" value="Cause of Death">Cause of Death</option>
                  <option id="census" value="Census">Census</option>
                  <option id="christening" value="Christening">Christening</option>
                  <option id="circumcision" value="Circumcision">Circumcision</option>
                  <option id="confirmation" value="Confirmation">Confirmation</option>
                  <option id="confirmationlds" value="Confirmation (LDS)">Confirmation (LDS)</option>
                  <option id="cremation" value="Cremation">Cremation</option>
                  <option id="degree" value="Degree">Degree</option>
                  <option id="departure" value="Departure">Departure</option>
                  <option id="description" value="Description">Description</option>
                  <option id="destination" value="Destination">Destination</option>
                  <option id="divorce" value="Divorce">Divorce</option>
                  <option id="divorcefiled" value="Divorce Filed">Divorce Filed</option>
                  <option id="dna" value="DNA Markers">DNA Markers</option>
                  <option id="education" value="Education">Education</option>
                  <option id="elected" value="Elected">Elected</option>
                  <option id="email" value="Email">Email</option>
                  <option id="emigration" value="Emigration">Emigration</option>
                  <option id="employment" value="Employment">Employment</option>
                  <option id="endowmentlds" value="Endowment">Endowment</option>
                  <option id="engagement" value="Engagement">Engagement</option>
                  <option id="excommunication" value="Excommunication">Excommunication</option>
                  <option id="firstcommunion" value="First Communion">First Communion</option>
                  <option id="funeral" value="Funeral">Funeral</option>
                  <option id="gender" value="Gender">Gender</option>
                  <option id="graduation" value="Graduation">Graduation</option>
                  <option id="height" value="Height">Height</option>
                  <option id="immigration" value="Immigration">Immigration</option>
                  <option id="initiatorylds" value="Initiatory">Initiatory</option>
                  <option id="marriagebann" value="Marriage Bann">Marriage Bann</option>
                  <option id="marriagecontract" value="Marriage Contract">Marriage Contract</option>
                  <option id="marriagelicense" value="Marriage License">Marriage License</option>
                  <option id="marriagesettlement" value="Marriage Settlement">Marriage Settlement</option>
                  <option id="medical" value="Medical">Medical</option><option id="military" value="Military">Military</option>
                  <option id="militaryid" value="Military Serial Number">Military Serial Number</option>
                  <option id="mission" value="Mission">Mission</option>
                  <option id="name" value="Name">Name</option>
                  <option id="namesake" value="Namesake">Namesake</option>
                  <option id="nationality" value="Nationality">Nationality</option>
                  <option id="naturalization" value="Naturalization">Naturalization</option>
                  <option id="occupation" value="Occupation">Occupation</option>
                  <option id="ordinance" value="Ordinance">Ordinance</option>
                  <option id="ordination" value="Ordination">Ordination</option>
                  <option id="origin" value="Origin">Origin</option>
                  <option id="phone" value="Phone">Phone</option>
                  <option id="probate" value="Probate">Probate</option>
                  <option id="property" value="Property">Property</option>
                  <option id="religion" value="Religion">Religion</option>
                  <option id="residence" value="Residence">Residence</option>
                  <option id="retirement" value="Retirement">Retirement</option>
                  <option id="sealchildlds" value="Sealing to Parents">Sealing to Parents</option>
                  <option id="sealspouselds" value="Sealing to Spouse">Sealing to Spouse</option>
                  <option id="separation" value="Separation">Separation</option>
                  <option id="ssn" value="Social Security Number">Social Security Number</option>
                  <option id="title" value="Title">Title</option>
                  <option id="webaddress" value="Web Address">Web Address</option>
                  <option id="weight" value="Weight">Weight</option>
                  <option id="will" value="Will">Will</option>
                </optgroup>
              </select>

            </div>

            {/* Here the body form */}
          </div>
        </div>



        <div className={styles.EditModal} style={{
          display: openAddNewPersonModal ? "flex" : "none"
        }}>
          <div className={styles.box} style={{
            width: '73%',
            height: 'auto',
          }}>
            <div className={styles.boxTitle}>
              <h1 style={{
                fontWeight: "bold"
              }}>Add a father for  {first_name} {last_name}</h1>

              <RiCloseCircleFill
                onClick={() => {
                  setopenAddNewPersonModal(false);
                }}
                style={{
                  fontSize: 25,
                  color: "gray",
                  cursor: "pointer"
                }} />
            </div>

            <div style={{
              padding: 10,
              display: "flex",
              height: "400px"
            }}>

              <div
                style={{
                  width: "30%",
                  height: "100%",
                }}>
                <h2 style={{
                  color: "gray",
                  width: 150
                }}>
                  Choose someone from your tree</h2>
                <div
                  onClick={() => alert("For test")}
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    borderLeft: "3px green solid",
                    padding: 2,
                    alignItems: "center",
                    width: "70%",
                    justifyContent: "flex-start",
                    backgroundColor: "white",
                    padding: 10,
                    marginTop: 10,
                  }}>
                  <GrAddCircle style={{
                    fontSize: 20,
                  }} />

                  <h1 style={{
                    fontWeight: "bold",
                    fontSize: 14,
                    marginLeft: 10,
                    cursor: "pointer",
                  }}>Add new person</h1>

                </div>
              </div>


              <div
                style={{
                  width: "70%",
                  height: "100%",
                  padding: 10
                }}>


                <div style={{
                  padding: 10,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-around",
                  height: "100%"
                }}>


                  <div style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "flex-start"
                  }}>

                    <div style={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "flex-start"
                    }}>
                      <label style={{
                        fontSize: 15,
                        fontWeight: "bold",
                        marginBottom: 5
                      }}>First and middle name</label>
                      <input type="text" placeholder="First names" style={{
                        //width:250,
                        height: 33,
                        padding: 10,
                        outline: "none",
                        border: "1px solid #bababa",
                        backgroundColor: "white"
                      }} />
                    </div>


                    <div style={{
                      display: "flex",
                      flexDirection: "column",
                      marginLeft: 10
                    }}>
                      <label style={{
                        fontSize: 15,
                        fontWeight: "bold",
                        marginBottom: 5
                      }}>Last name</label>
                      <input type="text" placeholder="Last name" style={{
                       
                        height: 33,
                        padding: 10,
                        outline: "none",
                        border: "1px solid #bababa",
                        backgroundColor: "white"
                      }} />
                    </div>


                    <div style={{
                      display: "flex",
                      flexDirection: "column",
                      marginLeft: 10
                    }}>
                      <label style={{
                        fontSize: 15,
                        fontWeight: "bold",
                        marginBottom: 5
                      }}>Suffix</label>
                      <input type="text" placeholder="Suffix" style={{
                        width: 150,
                        height: 33,
                        padding: 10,
                        outline: "none",
                        border: "1px solid #bababa",
                        backgroundColor: "white"
                      }} />
                    </div>
                  </div>

                  <br />
                  <div style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "flex-start"
                  }}>

                    <div style={{
                      display: "flex",
                      flexDirection: "column",
                      width: "80%",
                      justifyContent: "flex-start"
                    }}>
                      <label style={{
                        fontSize: 15,
                        fontWeight: "bold",
                        marginBottom: 2
                      }}>Gender</label>

                      <div style={{
                        width: "100%",
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                      }}>
                        <label>
                          <input
                            type="radio"
                            name="gender"
                            value="Male"
                            checked={selectedGender === 'Male'}
                            onChange={handleGenderChange}
                          />
                          Male
                        </label>

                        <label>
                          <input
                            type="radio"
                            name="gender"
                            value="Female"
                            checked={selectedGender === 'Female'}
                            onChange={handleGenderChange}
                          />
                          Female
                        </label>

                        <label>
                          <input
                            type="radio"
                            name="gender"
                            value="Unknown"
                            checked={selectedGender === 'Unknown'}
                            onChange={handleGenderChange}
                          />
                          Unknown
                        </label>

                      </div>



                    </div>
                  </div>
                  <br />
                  <div style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "flex-start"
                  }}>

                    <div style={{
                      display: "flex",
                      flexDirection: "column",
                      width: "80%",
                      justifyContent: "flex-start"
                    }}>
                      <label style={{
                        fontSize: 15,
                        fontWeight: "bold",
                        marginBottom: 2
                      }}>Status</label>

                      <div style={{
                        width: "100%",
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "flex-start"
                      }}>
                        <label>
                          <input
                            type="radio"
                            name="lifeStatus"
                            value="Deceased"
                            checked={selectedStatus === 'Deceased'}
                            onChange={handleStatusChange}
                          />
                          Deceased
                        </label>

                        <label>
                          <input
                            type="radio"
                            name="lifeStatus"
                            value="Living"
                            checked={selectedStatus === 'Living'}
                            onChange={handleStatusChange}
                            style={{
                              marginLeft: 20
                            }}
                          />
                          Living
                        </label>
                      </div>
                    </div>
                  </div>



                  <div style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "flex-start",
                    marginTop: 5,
                  }}>

                    <div style={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "flex-start"
                    }}>
                      <label style={{
                        fontSize: 15,
                        fontWeight: "bold",
                        marginBottom: 5
                      }}>Birthdate</label>
                      <input type="text" placeholder="Birth date" style={{
                        //width:250,
                        height: 33,
                        padding: 10,
                        outline: "none",
                        border: "1px solid #bababa",
                        backgroundColor: "white"
                      }} />
                    </div>


                    <div style={{
                      display: "flex",
                      flexDirection: "column",
                      marginLeft: 10
                    }}>
                      <label style={{
                        fontSize: 15,
                        fontWeight: "bold",
                        marginBottom: 5
                      }}>Birthplace</label>
                      <input type="text" placeholder="Birthplace" style={{
                        // width:250,
                        height: 33,
                        padding: 10,
                        outline: "none",
                        border: "1px solid #bababa",
                        backgroundColor: "white"
                      }} />
                    </div>

                  </div>
                  <div style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "flex-start",
                    marginTop: 20
                  }}>
                    <div className={styles.mybtns} style={{
                      backgroundColor: "green",
                      color: "white"
                    }}>Save</div>


                    <div
                      onClick={() => setopenAddNewPersonModal(false)}
                      className={styles.mybtns}
                      style={{
                        backgroundColor: "#bababa",
                        color: "black",
                        marginLeft: 25
                      }}>Cancel</div>
                  </div>
                </div>


              </div>
            </div>
          </div>
        </div>

      </>
    )
  }
}

export default Profile