import styles from "./skills/styles.module.css";
import BaseLayout from "./../components/Layouts/BaseLayout/BaseLayout";

export default function Home() {
  return (
    <>
      <BaseLayout index={30}>
        <p className={`${styles["text-intro"]} ${styles["row-start-5"]}`}>
          Hello. <br /> I'm Fernando Pioli Martínez
        </p>
        <br />
        <p className={`${styles["text-intro"]} ${styles["row-start-7"]}`}>
          I make web and mobile development. My past as a graphic designer makes
          me very attentive to the requirements of the design area. I see design
          and programming as valuable tools that associated, help to change the
          world.
        </p>
      </BaseLayout>
    </>
  );
}
