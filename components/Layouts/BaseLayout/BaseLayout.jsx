import Head from "next/head";
import styles from "./styles.module.css";
import { Navbar } from "../../UI/Navbar/index";

export default function MainLayout({ children, index }) {
  let newArray = [];
  const nums = () => {
    for (let i = 0; i < index; i++) {
      newArray.push(i);
    }
    return newArray;
  };

  nums();

  return (
    <div className={styles.container}>
      <Head>
        <title>ferPM.dev</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles["parent"]}>
        <div className={styles["grid1"]}>
          {/*///////////////// ASIDE ////////////////////*/}
          <div className={styles["grid-left"]}>
            <Navbar />
          </div>
          <div className={styles["grid-midle"]}>
            {newArray &&
              newArray.map((index) => (
                <div className={styles["flexh5"]}>
                  <h5>{newArray[index]}</h5>
                </div>
              ))}
          </div>

          {/*//////////////////// MAIN ///////////////////////*/}
          <div className={styles["grid-rigth"]}>{children}</div>
        </div>
        {/*///////////////// BACKGROUND ////////////////////*/}
        <div className={styles["pinceladas"]}></div>
      </div>
    </div>
  );
}
