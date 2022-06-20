import Link from "next/link";
import styles from "./Navbar.module.css";

export const Navbar = () => {
  return (
    <div className={styles["navbar-links"]}>
      <Link href="/">home</Link>
      <Link href="/contact">contact</Link>
      <Link href="/about">about</Link>
    </div>
  );
};
