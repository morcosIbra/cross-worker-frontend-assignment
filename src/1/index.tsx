import { FunctionComponent, useState } from "react";

const Task1: FunctionComponent = () => {
  const [items] = useState([
    "Item 1",
    "Item 2",
    "Item 3",
    "Item 4",
    "Item 5",
  ]);

  return (
    <div>
      <ul>
        {items.map((item) => {
          return <li> {item} </li>;
        })}
      </ul>
    </div>
  );
};

export default Task1;
