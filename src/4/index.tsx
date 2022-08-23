// Style
import { FormEventHandler, FunctionComponent, useState } from "react";
import "./index.scss";

const Task5: FunctionComponent = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    // If you want to do something with form submit
    e.preventDefault();
    alert(`Email: ${email} \nPassword: ${password}`);
  };

  return (
    <div id="task-5">
      <form className="login-form" onSubmit={onSubmit}>
        <label>Email</label>
        <input
          name="email"
          className="input"
          onChange={(event) => setEmail(event.currentTarget.value)}
          value={email}
        />
        <label>Password</label>
        <input
          name="password"
          className="input"
          onChange={(event) => setPassword(event.currentTarget.value)}
          value={password}
        />
        <button className="button-5">Login</button>
      </form>
    </div>
  );
};

export default Task5;
