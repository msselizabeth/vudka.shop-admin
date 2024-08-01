import { MoonLoader } from "react-spinners";

import styles from "./Loading.module.css";

const Loading = ({ size, color }) => {
  return (
    <div className={styles.loadContainer}>
      <p className={styles.loadText}>Зачекайте поки контент прогрузиться...</p>
      <MoonLoader size={size} color={color} loading={true} />
    </div>
  );
};

export default Loading;
