const SubCategory = ({ name, id, handleChange }) => {
  return (
    <div className="content__input">
      <input type="checkbox" id={id} value={id} onChange={handleChange} />
      <label htmlFor={id}>{name}</label>
    </div>
  );
};

export default SubCategory;
