import Image from "next/image";
import styles from "./Logo.module.css";

const Logo = () => {
  return (
    <div className={styles.logoContainer}>
      <Image
        src="/vudka-logo.svg"
        alt="vudka.shop"
        width={100}
        height={100}
        className={styles.imageLogo}
      />
      <p className={styles.logoText}>Вудка.шоп</p>
    </div>
  );
};

export default Logo;