"use client"
import Link from "next/link";
import styles from "./ProductsNav.module.css";
import { usePathname } from "next/navigation";

const ProductsNav = () => {
    const pathname = usePathname();
  return (
    <div className={styles.prodNavContainer}>
      <h3>Категорії товарів:</h3>
          <ul className={styles.prodNavList}>
      <li>
        <Link
          href="/products/gear"
          className={`${styles.prodNavLink} ${
            pathname.includes("gear") ? styles.active : ""
          }`}
        >
          Снасті
        </Link>
      </li>
      <li>
        <Link href="/products/equipment" className={`${styles.prodNavLink} ${
            pathname.includes("equipment") ? styles.active : ""
          }`}>
          Оснащення
        </Link>
      </li>
      <li>
        <Link href="/products/lures-and-baits" className={`${styles.prodNavLink} ${
            pathname.includes("lures-and-baits") ? styles.active : ""
          }`}>
          Приманки та прикормки
        </Link>
      </li>
      <li>
        <Link href="/products/clothes" className={`${styles.prodNavLink} ${
            pathname.includes("clothes") ? styles.active : ""
          }`}>
          Одяг
        </Link>
      </li>
      <li>
        <Link href="/products/camping" className={`${styles.prodNavLink} ${
            pathname.includes("camping") ? styles.active : ""
          }`}>
          Кемпінг
        </Link>
      </li>
    </ul>
    </div>
  );
};

export default ProductsNav;
