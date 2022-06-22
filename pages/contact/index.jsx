import BaseLayout from "../../components/Layouts/BaseLayout/BaseLayout";

import styles from "./styles.module.css";

export default function about() {
  return (
    <>
      <BaseLayout index={20}>
        <p className={styles["text-intro"]}>Contact.</p>
      </BaseLayout>
    </>
  );
}
