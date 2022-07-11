import BaseLayout from "../../components/Layouts/BaseLayout/BaseLayout";

import styles from "./styles.module.css";

export default function about() {
  return (
    <>
      <BaseLayout index={20}>
        <p className={`${styles["text-intro"]} ${styles["row-start-3"]}`}>
          Contact.
        </p>
        <a
          href="https://wa.me/5491159931540"
          className={`${styles["text-intro1"]} ${styles["row-start-5"]}`}
        >
          Whatsapp
        </a>
        <a
          href="https://www.linkedin.com/in/ferpm15/"
          className={`${styles["text-intro1"]} ${styles["row-start-6"]}`}
        >
          Linkedin
        </a>
        <a
          href="mailto:ferpm.dev@gmail.com"
          className={`${styles["text-intro1"]} ${styles["row-start-7"]}`}
        >
          Email
        </a>
      </BaseLayout>
    </>
  );
}

`${styles["text-intro"]} ${styles["row-start-6"]}`;
