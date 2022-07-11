import BaseLayout from "../../components/Layouts/BaseLayout/BaseLayout";

import styles from "./styles.module.css";

export default function about() {
  return (
    <>
      <BaseLayout index={30}>
        <p className={styles["text-intro"]}>Employment history.</p>
        <br />
        <span
          className={`${styles["text-intro-span"]} ${styles["row-start-5"]}`}
        >
          04/2021/ACTUAL | Frontend React Developer
        </span>
        <p className={`${styles["text-myWorks"]} ${styles["row-start-6"]}`}>
          Working as a Frontend Developer at Clarín newspaper, developing web
          apps with high impact and strategic value for the company.
        </p>
        <span
          className={`${styles["text-intro-span"]} ${styles["row-start-12"]}`}
        >
          06/2019 / 03/2021 | Sr Graphic Designer
        </span>
        <p className={`${styles["text-myWorks"]} ${styles["row-start-13"]}`}>
          Integrating the Clarín Newspaper Design team. Making editorial design
          for the printed edition. It was an experience that greatly enriched me
          professionally, due to the daily dynamics and the bond with a great
          team of journalists..
        </p>
        <span
          className={`${styles["text-intro-span"]} ${styles["row-start-22"]}`}
        >
          1996 / 2018 | Sr Graphic Designer
        </span>
        <p className={`${styles["text-myWorks"]} ${styles["row-start-23"]}`}>
          I also worked integrating the editorial teams in different magazines,
          among which ELLE, Cosmopólitan, ParaTi, Noticias stand out.
        </p>
        {/* <section className={styles["myWorks-img"]}>
          <img src="./myWorks.png" alt="" />
        </section> */}
      </BaseLayout>
    </>
  );
}
