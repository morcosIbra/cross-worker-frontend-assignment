import { FunctionComponent, useState } from "react";

// Components
import Input from "./components/Input";
import List from "./components/List";

const Task4: FunctionComponent = () => {
  const [searchValue, setSearchValue] = useState("");
  const items = ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5"];
  const filteredItems = items.filter((item) => item.includes(searchValue));

  return (
    <div>
      <Input searchValue={searchValue} onChangeSearch={setSearchValue} />
      <br />
      <List items={filteredItems} />
    </div>
  );
};

export default Task4;
