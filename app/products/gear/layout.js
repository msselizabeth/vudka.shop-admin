import GearNav from "@/components/Products/Gear/GearNav";
import styles from "./gearPage.module.css";

export default function GearLayout({ children }) {
  
    return (
        <div className={styles.gearContainer}>
            <GearNav />
            <div className={styles.gearChildrenContainer}> { children } </div>
    </div>
    );
  }