import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./Navbar.module.css";

export const ActiveLink = ({ href, text }) => {
  const { asPath } = useRouter();

  return (
    <Link href={href}>
      <a
        className={
          asPath === href
            ? styles["navbar-links-active"]
            : styles["navbar-links-a"]
        }
      >
        {text}
      </a>
    </Link>
  );
};
