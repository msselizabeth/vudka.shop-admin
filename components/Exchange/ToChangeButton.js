
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const ToChangeButton = ({onClick}) => {
  return (
    <button onClick={onClick}>
      <FontAwesomeIcon icon={faPenToSquare} />
    </button>
  );
};

export default ToChangeButton;
