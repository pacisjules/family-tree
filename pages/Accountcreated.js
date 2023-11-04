import { Inter } from "next/font/google";
import style from "@/styles/accountcreated/App.module.css";

export default function Accountcreated() {
  return (
    <main className={style.logincontainer}>
      <div className={style.up}>
        <h1>Welcome to Iyali® Your user Account Setup is Complete!</h1>
        <p>
          Congratulations!
          {"You've "}successfully completed the account setup process for Iyali.
          {"We're"} thrilled to have you on board and {"can't"} wait to help you
          make the most out of our platform. In this guide,
          {"we'll"} walk you through the essential steps to get started and
          ensure you have a seamless experience.
        </p>
      </div>

      <div className={style.middle}>
        <div className={style.button}>
          <p>Start free trial</p>
        </div>
      </div>

      <div className={style.down}>
        <div className={style.downup}>
          <div className={style.left}>
            <img src="./sample.jpg" alt="" style={{
              width:350,
              height:250,
              objectFit:"cover",
              borderRadius:10
            }}/>
          </div>

          <div className={style.right}>
            <h1>
            The Africa’s largest online collection of family history records.
            </h1>

            <p>An Iyali membership gives you access to an unparalleled collection of billions of records. You’ll have amazing resources at your fingertips including census records, wills, {"ships'"} logs, and more.</p>
          </div>
        </div>

        <div className={style.downhasi}>
        <div className={style.left}>
          <h1>Your family tree will grow and grow.</h1>
          <p>Iyali makes charting your family history easier and faster than you ever imagined. With an intuitive interface and intelligent Iyali Hints®, you’ll have guidance every step of the way.</p>
        </div>

<div className={style.right}>
<img src="https://www.ancestrycdn.com/mars/landing/deny/2016/freetrial-deny-familytree.png" alt="" style={{
              width:380,
              height:250,
              objectFit:"contain"
            }}/>
</div>
        </div>
      </div>
    </main>
  );
}
