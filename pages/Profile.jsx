import React, { useState } from "react";
import { useSession } from "next-auth/react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import styles from "@/styles/Profile/App.module.css";
import { useSelector, useDispatch } from "react-redux";

function Profile(){
  const { data: session, status } = useSession();
  const router = useRouter();

  const { sign_status, userNames, username } = useSelector((state) => state.user_infosred);

  React.useEffect(() => {

    if (status === "unauthenticated") {
      router.push("/");
    }
  }, [status, router]);

  if (status === "authenticated") {
    return (

      <div className="flex justify-between w-full h-screen">
        <div style={{
           width: "100%",
           backgroundColor: "gray",
           display:"flex",
           justifyContent:"flex-start",
           flexDirection:"column"
        }}>

          <div
          style={{
            width: "80%",
            backgroundColor: "#333333",
            height: 400,
            borderRadius: 10,
            margin: 20,
            color: "white",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
            padding: 10,
          }}
        >
          <div
            style={{
              height: "100%",
              width: "48%",
              padding: 10,
              display: "flex",
              alignContent: "center",
              paddingTop: 50,
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
                  textAlign:"center"
                }}
              >
                You {userNames}
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
              width: "48%",
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
              Explore the world’s largest online family history resource —
              Complete needed information.
            </h3>

            <p
              style={{
                marginTop: 20,
              }}
            >
              Or grow your family tree and follow the leaves to learn more. To
              continue building, select a family member.
            </p>
          </div>
        </div>
        {/* {isCompleteinfos} */}
        {/* <h2>{isCompleteinfos = 1 ? "Yes" : "No"}</h2> */}
        
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
          <br />

          <label>First name</label>
          <br />
          <input
            type="text"
            placeholder="First name"
            className="border border-gray-300  py-2 px-4 transition-all w-full mb-6 focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-green-500"
          ></input>
          <br />

          <label>Last name</label>
          <br />
          <input
            type="text"
            placeholder="Last name"
            className="border border-gray-300  py-2 px-4 transition-all w-full mb-6 focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-green-500"
          ></input>
          <br />

          <label>Estimated birth year</label>
          <br />
          <input
            type="text"
            placeholder="Year"
            className="border border-gray-300  py-2 px-4 transition-all w-full mb-6 focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-green-500"
          ></input>
          <br />

          <label>Possible location</label>
          <br />
          <input
            type="text"
            placeholder="City, Country, State"
            className="border border-gray-300  py-2 px-4 transition-all w-full mb-6 focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-green-500"
          ></input>
          <br />
        </div>
      </div>
    );
  }
};

export default Profile;
