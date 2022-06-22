import { ActiveLink } from "./ActiveLink.jsx";
import styles from "./Navbar.module.css";

export const Navbar = () => {
  return (
    <div className={styles["navbar-links"]}>
      <ActiveLink href="/" text="home" />
      <ActiveLink href="/skills" text="skills" />
      <ActiveLink href="/myWorks" text="my works" />
      <ActiveLink href="/contact" text="contact" />
    </div>
  );
};
