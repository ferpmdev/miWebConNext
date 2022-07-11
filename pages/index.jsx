import styles from "../styles/Home.module.css";
import BaseLayout from "./../components/Layouts/BaseLayout/BaseLayout";

export default function Home() {
  return (
    <>
      <BaseLayout index={16}>
        <p className={`${styles["text-intro"]} ${styles["row-start-3"]}`}>
          Hello. <br /> I'm Fernando Pioli Martínez
        </p>
        <br />
        <p className={`${styles["text-intro-b"]} ${styles["row-start-6"]}`}>
          I make web and mobile development. My past as a graphic designer makes
          me very attentive to the requirements of the design area. I see design
          and programming as valuable tools that associated, help to change the
          world.
        </p>
      </BaseLayout>
    </>
  );
}
