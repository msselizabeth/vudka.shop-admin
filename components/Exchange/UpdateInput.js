

const UpdateInput = ({value, onChange, disabled, saveRate, setEditTarget}) => {
  return (
    <div>
      <input
        type="number"
        value={value}
        onChange={onChange}
        disabled={disabled}
      />
      <button onClick={saveRate}>Сохранить</button>
      <button onClick={() => setEditTarget(null)}>Отмена</button>
    </div>
  );
};

export default UpdateInput;
