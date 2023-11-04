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
          <button style={{
            width:200
          }} className="bg-green-600 hover:bg-green-800 text-white font-normal py-1.5 px-6 rounded-full transition-all mt-10 flex justify-center items-center">
            Learn More
          </button>
        </div>

        <div className={styles.right}>
          <img src="./sample.jpg" alt="" />
        </div>
      </div>


      <div style={{
        borderTop:"1px solid green"
      }} className={styles.geneology}>
        <div className={styles.left}>
          <h1 style={{
            width:300
          }}>Connect with family to discover more.</h1>
          <p>
          Our newest tools* make it easier than ever to collaborate
          with family and friends to find a fuller, richer story.
          </p>
          <button style={{
            width:200
          }} className="bg-green-600 hover:bg-green-800 text-white font-normal py-1.5 px-6 rounded-full transition-all mt-10 flex justify-center items-center">
            See for yourself
          </button>
          <p style={{
            width:300,
            marginTop:10
          }}>
          *Some users will not be able to access these features until Aug 2023.

          </p>
        </div>

        <div style={{
          backgroundColor:"transparent",
        }} className={styles.right}>
          <img src="https://cmsasset.ancestrycdn.com/content/experience-fragments/acom/en-us/onsite/bau/acom_lohp/body---jan-2023/body---may-2023/_jcr_content/root/responsivegrid/container_1742638282/teaser_350900979_cop.coreimg.png/1684446935772/us-1284831-pbc-q2-integ-sec.png" alt="" />
        </div>
      </div>


      <div className={styles.footer}>
        <h1>Footer</h1>
      </div>
    </main>
  );
}
