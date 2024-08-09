"use client"
import Link from "next/link";
import styles from "./GearNav.module.css";
import { usePathname } from "next/navigation";

const GearNav = () => {
    const pathname = usePathname();
  return (
    <div className={styles.prodNavContainer}>
      <h3>Підкатегорії товарів:</h3>
          <ul className={styles.prodNavList}>
      <li>
        <Link
          href="/products/gear/rods"
          className={`${styles.prodNavLink} ${
            pathname.includes("rods") ? styles.active : ""
          }`}
        >
          Вудилища
        </Link>
              </li>
              <li>
        <Link
          href="/products/gear/reels"
          className={`${styles.prodNavLink} ${
            pathname.includes("reels") ? styles.active : ""
          }`}
        >
          Котушки
        </Link>
              </li>
              <li>
        <Link
          href="/products/gear/lines"
          className={`${styles.prodNavLink} ${
            pathname.includes("lines") ? styles.active : ""
          }`}
        >
          Жилки та шнури
        </Link>
      </li>
     
    </ul>
    </div>
  );
};

export default GearNav;
