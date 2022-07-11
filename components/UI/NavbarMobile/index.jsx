import { ActiveLink } from "./ActiveLink.jsx";
import {
  useUIContext,
  useUFContext,
} from "../../../context/ui/UIContextProvider";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

import styles from "./NavbarMobile.module.css";

export const NavbarMobile = () => {
  const estado = useUIContext();
  const accion = useUFContext();

  return (
    <div className={styles["navbar-mobile"]}>
      {!estado ? (
        <div className={styles["z-index-10"]}>
          <MenuIcon onClick={accion} />
        </div>
      ) : (
        <div className={styles["z-index-10"]}>
          <CloseIcon onClick={accion} />
        </div>
      )}
      {estado && (
        <div className={styles["navbar-links"]}>
          <div className={styles["navbar-links-item"]}>
            <ActiveLink href="/" text="home" />
          </div>
          <div className={styles["navbar-links-item"]}>
            <ActiveLink href="/skills" text="skills" />
          </div>
          <div className={styles["navbar-links-item"]}>
            <ActiveLink href="/myWorks" text="my works" />
          </div>
          <div className={styles["navbar-links-item"]}>
            <ActiveLink href="/contact" text="contact" />
          </div>
        </div>
      )}
    </div>
  );
};
