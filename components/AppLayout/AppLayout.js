import SideBar from "../SideBar/SideBar";
import styles from "./AppLayout.module.css";

const AppLayout = ({ children }) => {
  return (
    <main>
      <div className={styles.appContainer}>
        <SideBar/>
        <div className={styles.pagesContainer}>
          <div className={styles.contentContainer}>{children}</div>
        </div>
      </div>
    </main>
  );
};

export default AppLayout;
