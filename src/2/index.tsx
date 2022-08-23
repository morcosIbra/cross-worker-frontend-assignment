import { FunctionComponent, useState } from "react";

const Task2: FunctionComponent = () => {
  const [value, setValue] = useState("");

  const inputChange = (e: any) => setValue(e.target.value);

  return (
    <div>
      <label>Controlled Input: </label>
      <input value={value} onChange={inputChange} />
      <br />
      <br />
      <p>#Show Input value here# {value}</p>
    </div>
  );
};

export default Task2;
