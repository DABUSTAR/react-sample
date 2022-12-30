import ListItem from "./list-item";

function List(props) {
  return (
    <div className="list">
      <ul>
        {props.data.map(function (dataItem) {
          return <ListItem item={dataItem} />;
        })}
      </ul>
    </div>
  );
}

export default List;
