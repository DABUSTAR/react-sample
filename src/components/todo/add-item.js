function AddItem(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const value = event.target[0].value;
    props.addItem(value);
  };

  return (
    <div className="add-item">
      <form onSubmit={handleSubmit}>
        <input type="text" name="item" />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default AddItem;
