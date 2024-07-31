"use client";
import Link from "next/link";
import styles from "./MainNav.module.css";
import { usePathname } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faBox, faChartLine, faDollarSign } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { Main } from "next/document";

const MainNav = () => {

    const pathname = usePathname();
    const [isMobile, setIsMobile] = useState(false);
  
    const updateView = () => {
      setIsMobile(window.innerWidth < 768); // 768px is a common breakpoint for mobile devices
    };
  
    useEffect(() => {
      updateView();
      window.addEventListener("resize", updateView);
      return () => window.removeEventListener("resize", updateView);
    }, []);

    return( <ul className={styles.mainNavList}>
        <li className={styles.mainNavItem}>
          <Link
            href="/"
            className={`${styles.mainNavLink} ${
              pathname === "/" ? styles.active : ""
            }`}
          >
            {isMobile ? (
              <FontAwesomeIcon icon={faHouse} />
            ) : (
              <>
                <FontAwesomeIcon icon={faHouse} /> Головна
              </>
            )}
          </Link>
        </li>
        <li>
          <Link
            href="/products"
            className={`${styles.mainNavLink} ${
              pathname === "/products" ? styles.active : ""
            }`}
          >
            {isMobile ? (
              <FontAwesomeIcon icon={faBox} />
            ) : (
              <>
                <FontAwesomeIcon icon={faBox} /> Товари
              </>
            )}
          </Link>
        </li>
        <li>
          <Link
            href="/sales"
            className={`${styles.mainNavLink} ${
              pathname === "/sales" ? styles.active : ""
            }`}
          >
           {isMobile ? <FontAwesomeIcon icon={faChartLine} /> : <> <FontAwesomeIcon icon={faChartLine} /> Продажі </>}
          </Link>
        </li>
        <li>
          <Link
            href="/prices"
            className={`${styles.mainNavLink} ${
              pathname === "/prices" ? styles.active : ""
            }`}
          >
             {isMobile ? <FontAwesomeIcon icon={faDollarSign} /> : <> <FontAwesomeIcon icon={faDollarSign} /> Ціни </>}
          </Link>
        </li>
      </ul>)
}

export default MainNav;