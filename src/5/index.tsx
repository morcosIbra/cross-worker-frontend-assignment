import { FunctionComponent, useState } from "react";

// Components
import Input from "./components/Input";
import List from "./components/List";
import { items } from "./initialStore";

const Task4: FunctionComponent = () => {
  const [searchValue, setSearchValue] = useState("");
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
