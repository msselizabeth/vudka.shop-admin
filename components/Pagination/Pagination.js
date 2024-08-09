import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./Pagination.module.css";
import { faCircleLeft, faCircleRight } from "@fortawesome/free-regular-svg-icons";

const Pagination = ({ onClick, page, totalPages }) => {
  return (
    <div className={styles.paginationContainer}>
      <button onClick={() => onClick(page - 1)} disabled={page === 1} className={styles.btn} >
      <FontAwesomeIcon icon={faCircleLeft} />
      </button>
      <span>
        Сторінка {page} із {totalPages}
      </span>
      <button onClick={() => onClick(page + 1)} disabled={page === totalPages} className={styles.btn} >
      <FontAwesomeIcon icon={faCircleRight} />
      </button>
    </div>
  );
};

export default Pagination;