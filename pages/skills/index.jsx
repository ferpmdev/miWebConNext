import BaseLayout from "../../components/Layouts/BaseLayout/BaseLayout.jsx";

import styles from "./styles.module.css";

export default function about() {
  return (
    <>
      <BaseLayout index={22}>
        <p className={`${styles["text-intro"]} ${styles["row-start-5"]}`}>
          My tools.
        </p>
        <br />
        <p className={`${styles["text-skills"]} ${styles["row-start-6"]}`}>
          {/* <p className={styles["skillsP1"]}> */}
          Html, CSS, Javascript, Dart, React, React-native, Redux, Node,
          Flutter, Block, Git, Agile methodology, Scrum, Lean Startup, Sass,
          Tailwind, MySQL
        </p>
        <section className={styles["skill-img"]}>
          <img src="./skills.png" alt="" />
        </section>
      </BaseLayout>
    </>
  );
}
