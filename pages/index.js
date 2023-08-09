import styles from "../styles/homepage/App.module.css";
import Image from "next/image";

export default function Home() {
  return (
    <main className={styles.mainhome}>
      <div className={styles.displayer}>
        <div className={styles.full}>
          <div className={styles.inmain}>
            <div className={styles.up}>
              <h1>Every family has a story.</h1>
              <h3>
                They turned challenges into triumphs and hardships into
                opportunities—discover your ancestors’ incredible journeys.
              </h3>
              <button className="bg-green-600 hover:bg-green-800 text-white font-normal py-1.5 px-6 rounded-full transition-all mr-5 mt-5 flex justify-center items-center">
                Get Started
              </button>
            </div>
            <div className={styles.down}>
              <div className={styles.sect}>
                <div className={styles.bool}></div>
                <h2>
                  Find family photos, maybe even your grandmother as a little
                  girl
                </h2>
              </div>

              <div className={styles.sect}>
                <div className={styles.bool}></div>
                <h2>Discover the town where your great-grandfather grew up</h2>
              </div>

              <div className={styles.sect}>
                <div className={styles.bool}></div>
                <h2>See the signature on your {"grandfather's"} draft card</h2>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.labeldown}>
        <h3>
          Get insights from your DNA, whether {"it's"} your ethnicity or
          personal traits. | LEARN MORE
        </h3>
      </div>

      <div className={styles.geneology}>
        <div className={styles.left}>
          <h1>Iyali® helps you understand your genealogy.</h1>
          <p>
            A family tree takes you back generations—the Africa’s largest
            collection of online family history records makes it possible.
          </p>
          <button className="bg-green-600 hover:bg-green-800 text-white font-normal py-1.5 px-6 rounded-full transition-all mt-10 flex justify-center items-center">Learn More</button>
        </div>

        <div className={styles.right}>
        </div>

      </div>



    </main>
  );
}
