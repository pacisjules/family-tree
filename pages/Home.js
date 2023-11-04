import React, { useState } from "react";

import Link from "next/link";
import Image from "next/image";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import styles from "../styles/home/App.module.css";
import { useSelector, useDispatch } from "react-redux";

function Home(){
  const { data: session, status } = useSession();
  const router = useRouter();

  const { sign_status, first_name, last_name, username } = useSelector((state) => state.user_infosred);

  React.useEffect(() => {

    if (status === "unauthenticated") {
      router.push("/");
    }
  }, [status, router]);

  if (status === "authenticated") {
    return (
      <div className="flex justify-between w-full h-screen">
        <div
          style={{
            width: "100%",
            backgroundColor: "#f0f0f0",
            display: "flex",
            justifyContent: "flex-start",
            flexDirection: "column",
          }}
        >
          <div>
            <div
              style={{
                width: "80%",
                backgroundColor: "#333333",
                height: 400,
                borderRadius: 10,
                margin: 20,
                color: "white",
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
                padding: 20,
              }}
            >
              <div>
                <div
                  style={{
                    width: "100%",
                    height: 50,
                  }}
                >
                  <p
                    style={{
                      fontSize: 14,
                    }}
                  >
                    {last_name} Family Tree
                  </p>
                </div>
              </div>

              <div
                style={{
                  padding: 15,
                  display: "flex",
                }}
              >
                <div
                  style={{
                    height: "100%",
                    width: "100%",
                    display: "flex",
                    alignContent: "center",
                  }}
                >
                  <Link href={"/questionnaire/Intro"}>
                    <div className={styles.addings}>
                      <Image
                        src="/man.svg"
                        alt="My Image"
                        width={70}
                        height={30}
                        style={{
                          borderRadius: "100px 0px 100px 100px",
                          margin: 5,
                        }}
                      />

                      <p
                        style={{
                          fontSize: 14,
                        }}
                      >
                        Add Father
                      </p>
                    </div>
                  </Link>

                  <div
                    className={styles.addings}
                    style={{
                      marginLeft: 230,
                    }}
                  >
                    <Image
                      src="/woman.svg"
                      alt="My Image"
                      width={70}
                      height={30}
                      style={{
                        borderRadius: "100px 0px 100px 100px",
                        margin: 5,
                      }}
                    />

                    <p
                      style={{
                        fontSize: 14,
                      }}
                    >
                      Add Mother
                    </p>
                  </div>

                  <div
                    className={styles.addings}
                    style={{
                      marginLeft: 115,
                      marginTop: 115,
                    }}
                  >
                    <Image
                      src="/you.svg"
                      alt="My Image"
                      width={70}
                      height={30}
                      style={{
                        borderRadius: "100px 0px 100px 100px",
                        margin: 5,
                      }}
                    />

                    <p
                      style={{
                        fontSize: 14,
                        textAlign: "center",
                      }}
                    >
                      You {first_name} {last_name}
                    </p>
                  </div>

                  <svg
                    style={{
                      marginLeft: 100,
                    }}
                  >
                    <line x1="64" y1="96" x2="64" y2="114" stroke="gray"></line>
                    <line
                      x1="128"
                      y1="92"
                      x2="66"
                      y2="92"
                      class="parentLine femaleLine"
                      stroke="magenta"
                    ></line>
                    <line
                      x1="62"
                      y1="92"
                      x2="0"
                      y2="92"
                      class="parentLine maleLine"
                      stroke="blue"
                    ></line>
                    <g color="#999">
                      <circle
                        cx="64"
                        cy="92"
                        r="3"
                        stroke="gray"
                        fill="none"
                        stroke-width="2"
                      ></circle>
                    </g>
                  </svg>
                </div>

                <div
                  style={{
                    height: "100%",
                    width: "100%",
                    padding: 10,
                    fontSize: 15,
                  }}
                >
                  <h3
                    style={{
                      fontWeight: "bold",
                      textAlign: "left",
                    }}
                  >
                    Explore the Africa largest online family history resource —
                    Complete needed information.
                  </h3>

                  <p
                    style={{
                      marginTop: 20,
                    }}
                  >
                    Or grow your family tree and follow the leaves to learn
                    more. To continue building, select a family member.
                  </p>
                </div>
              </div>
            </div>
            {/* {isCompleteinfos} */}
            {/* <h2>{isCompleteinfos = 1 ? "Yes" : "No"}</h2> */}
          </div>

          <div
            style={{
              width: "80%",
              height: "auto",
              backgroundColor: "white",
              marginLeft: 20,
              borderRadius: 10,
              padding: 10,
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div style={{
              marginBottom:10
            }}>  
              <h2 style={{
                 fontSize:14,
                 fontWeight:"bold"
              }}>Continue to building your tree </h2>
            </div>

            <div style={{
               display: "flex",
               flexDirection: "row",
            }}>
              <div style={{
                 display: "flex",
                 flexDirection: "row",
                 border:"1px gray dashed",
                 padding:5,
                 borderRadius:10,
                 alignItems:"center",
                 justifyContent:"flex-start"
              }}>
                <Image
                  src="/man.svg"
                  alt="My Image"
                  width={20}
                  height={20}
                  style={{
                    borderRadius: "2px",
                    margin: 5,
                  }}
                />

                <h2 style={{
                   fontSize:14,
                }}>Add {last_name}{"'s"} father</h2>

                <Link href={"#"} style={{
                  marginLeft:25,
                  fontSize:14,
                  color:"blue",
                }}>Dismiss</Link>
              </div>

              <div style={{
                 display: "flex",
                 flexDirection: "row",
                 border:"1px gray dashed",
                 marginLeft:15,
                 padding:10,
                 borderRadius:10,
                 alignItems:"center",
                 justifyContent:"flex-start"
              }}>
                <Image
                  src="/woman.svg"
                  alt="My Image"
                  width={20}
                  height={20}
                  style={{
                    borderRadius: "2px",
                    margin: 5,
                  }}
                />

                <h2 style={{
                   fontSize:14,
                }}>Add {last_name}{"'s"} mother</h2>

                <Link href={"#"} style={{
                  marginLeft:25,
                  fontSize:14,
                  color:"blue",
                }}>Dismiss</Link>
              </div>
            </div>
          </div>
        </div>

        <div
          style={{
            width: "25%",
            backgroundColor: "#e3e3e3",
            height: "100%",
            padding: 20,
          }}
        >
          <h2
            style={{
              fontWeight: "bold",
            }}
          >
            Search people
          </h2>
          <p
            style={{
              fontSize: 15,
            }}
          >
            Explore billions of historical records.
          </p>

          <label>First name</label>

          <input
            type="text"
            placeholder="First name"
            className="border border-gray-300  py-1 px-4 transition-all w-full mb-6 focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-green-500"
          ></input>

          <label>Last name</label>

          <input
            type="text"
            placeholder="Last name"
            className="border border-gray-300  py-1 px-4 transition-all w-full mb-6 focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-green-500"
          ></input>

          <label>Estimated birth year</label>
          <br />
          <input
            type="text"
            placeholder="Year"
            className="border border-gray-300  py-1 px-4 transition-all w-full mb-6 focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-green-500"
          ></input>

          <label>Possible location</label>

          <input
            type="text"
            placeholder="City, Country, State"
            className="border border-gray-300  py-1 px-3 transition-all w-full mb-6 focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-green-500"
          ></input>
        </div>
      </div>
    );
  }
};

export default Home;
