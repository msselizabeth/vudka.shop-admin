const { faClose } = require("@fortawesome/free-solid-svg-icons")
const { FontAwesomeIcon } = require("@fortawesome/react-fontawesome")
import styles from "./Buttons.module.css";

const CloseButton = ({onClick}) => {

    return (
        <button onClick={onClick} className={styles.closeButton}>
            <FontAwesomeIcon icon={faClose} className={styles.closeButtonIcon} />
        </button>
    )
}

export default CloseButton;