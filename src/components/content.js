import { useState } from "react";
import AddItem from "./todo/add-item";
import List from "./todo/list";

function Content() {
  const [data, setData] = useState([
    "biking",
    "grocery",
    "family dinner",
    "email client",
  ]);
  const addItem = (item) => {
    setData((data) => [...data, item]);
  };
  return (
    <div className="main-content">
      <main>
        <h1>My list</h1>
        <List data={data} />
        <AddItem addItem={addItem} />
      </main>
    </div>
  );
}

export default Content;
