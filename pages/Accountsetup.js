import React, { useState } from "react";
import { Inter } from "next/font/google";
import style from "@/styles/accountset/App.module.css";

export default function Accountsetup() {
  const [name, setName] = useState(localStorage.getItem("current_name"));

  return (
    <main className={style.logincontainer}>
      <div className={style.up}>
        <h1>Dear {name}</h1>
        <p>
          {
            "Congratulations! We're thrilled to welcome you to the Iyali® family. Your account setup is now complete, and you're all set to embark on a journey of enhanced productivity and efficiency."
          }
        </p>
      </div>

      <div className={style.down}>
        <div className={style.downup}>
          <div className={style.left}>
            <img
              src="./sample.jpg"
              alt=""
              style={{
                width: 331,
                height: 331,
                objectFit: "cover",
                borderRadius: 500,
              }}
            />
          </div>

          <div className={style.right}>
            <h1>
              The Africa’s largest online collection of family history records.
            </h1>

            <h2
              style={{
                fontSize: "13pt",
                marginTop: 20,
                marginBottom: 15,
              }}
            >
              {
                "Thank you for choosing Iyali® for your needs. We're here to make your experience exceptional"
              }
            </h2>

            <p>
              {
                "If you have any questions or run into any issues, feel free to reply to this email or contact our support team at info@iyali.com. We're always here to assist you."
              }
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
