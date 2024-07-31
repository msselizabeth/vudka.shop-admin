
import AdminInfo from "./AdminInfo";
import Logo from "./Logo";
import MainNav from "./MainNav";
import styles from "./SideBar.module.css";


const SideBar = () => {


  return (
    <div className={styles.sideBarContainer}>
      <div className={styles.logoNavContainer}>
      <Logo/>
      <MainNav/>
      </div>
      <AdminInfo/>
    </div>
  );
};

export default SideBar;
