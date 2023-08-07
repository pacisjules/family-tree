import { react, useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import { getUser_infos, add_infos, signInOrOut, setCompleteinfo } from "../features/userinfos/userinfos.js";
import { useSession, signIn, signOut } from "next-auth/react";
import Image from "next/image.js";
import axios from "axios";
import Head from "next/head";
import config from  '@/utils/config'; 


function Success() {
  
  const router = useRouter();
  const dispatch = useDispatch();

  const [info, setInfos] = useState(null);
  const [time, settime] = useState(2.5);

  const { data: session, status } = useSession({
    required: true,
  });



  const entering = async () => {
    const Urls = config.API_BASE_URLS + "users/me";

    const response = await axios.get(Urls, {
      headers: { Authorization: `Bearer ${session.user.token}` },
    });

    let user_id = response.data.user_id;
    const Url2 = config.API_BASE_URLS + `users/me/infos?user_id=${user_id}`;

    const responseInfos = await axios.get(Url2, {
      headers: { Authorization: `Bearer ${session.user.token}` },
    });

    localStorage.setItem(
      "user_names",
      JSON.stringify(
        responseInfos.data.first_name + " " + responseInfos.data.last_name
      )
    );
    dispatch(
      setCompleteinfo(
        responseInfos.data.first_name + " " + responseInfos.data.last_name
      )
    );

    dispatch(addusername(response.data.username))

    dispatch(signInOrOut(1));

    localStorage.setItem("userinfos", JSON.stringify(response.data));
    localStorage.setItem("id", response.data.user_id);
    localStorage.setItem("sgn", session.user.token);
    localStorage.setItem("org_id", response.data.organization_ID);
  };





  const interval = setInterval(() => {
    settime(time - 1.5);
  }, 500);


  if (time == 1) {
    entering();
    clearInterval(interval);
    router.push("/Home");
  }

  if (status === "authenticated") {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          height: "100vh",
        }}
      >

        <Head>
          <title>Loading</title>
        </Head>

        <Image src="/loadbg.gif" alt="My Image" width={50} height={50} />

        <h1
          style={{
            fontWeight: "normal",
            fontSize:17,
            marginLeft:30
          }}
        >
          Please wait for sign,  Loading...
        </h1>

      </div>
    );
  }
}

export default Success;
