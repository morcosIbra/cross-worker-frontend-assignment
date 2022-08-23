import { FunctionComponent, useState } from "react";

const Task3: FunctionComponent = () => {
  const [inputValue, setInputValue] = useState("");
  const [items, setItems] = useState(["Item 1", "Item 2", "Item 3", "Item 4", "Item 5"]);
  
  const inputChange = (e: any) => setInputValue(e.target.value);
  const filteredItems = items.filter((item) => item.includes(inputValue));
  
  return (
    <div>
      <label>Search Input: </label>
      <input value={inputValue} onChange={inputChange} />
      <br />
      <br />
      #List goes here#
      <ul>
        {filteredItems.map((item) => {
          return <li> {item} </li>;
        })}
      </ul>
    </div>
  );
};

export default Task3;
