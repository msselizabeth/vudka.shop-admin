
import  styles from "./InputSearch.module.css"

const InputSearch = ({ value, onChange }) => {
  return (
    <input
      className="search"
      type="text"
      value={value}
      onChange={onChange}
      placeholder="Пошук за іменем, або брендом, або моделью, або артикулом"
    />
  );
};

export default InputSearch;
