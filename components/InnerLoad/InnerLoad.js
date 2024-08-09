

import { MoonLoader } from "react-spinners";
import styles from "./InnerLoad.module.css"

const InnerLoad = ({ size, color, text }) => {
  return (
      <div className={styles.loadCont}>
      <MoonLoader size={size} color={color} loading={true}/>
          <p>{text}</p>
     
    </div>
  );
};

export default InnerLoad;
