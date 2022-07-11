import { ActiveLink } from "./ActiveLink.jsx";

import styles from "./Navbar.module.css";

export const Navbar = () => {
  return (
    <div className={styles["navbar-links"]}>
      <div className={styles["navbar-links-item"]}>
        <img
          src="./file.png"
          alt=""
          className={styles["navbar-links-item-img"]}
        />
        <ActiveLink href="/" text="home" />
      </div>
      <div className={styles["navbar-links-item"]}>
        <img
          src="./file.png"
          alt=""
          className={styles["navbar-links-item-img"]}
        />
        <ActiveLink href="/skills" text="skills" />
      </div>
      <div className={styles["navbar-links-item"]}>
        <img
          src="./file.png"
          alt=""
          className={styles["navbar-links-item-img"]}
        />
        <ActiveLink href="/myWorks" text="my works" />
      </div>
      <div className={styles["navbar-links-item"]}>
        <img
          src="./file.png"
          alt=""
          className={styles["navbar-links-item-img"]}
        />
        <ActiveLink href="/contact" text="contact" />
      </div>
    </div>
  );
};
