import Button from "./Button";
import styles from "./App.module.css";
import { useEffect, useState } from "react";

function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => setValue((prev) => prev + 1);
  const onChange = (event) => setKeyword(event.target.value);

  useEffect(() => {
    return () => console.log("api bye");
  }, []);

  useEffect(() => console.log("SEARCH FOR", keyword), [keyword]);

  const [rv, setRv] = useState(false);
  const onRv = () => setRv((p) => !p);
  return (
    <div>
      {rv ? <Button text="hello" /> : null}
      <input
        value={keyword}
        onChange={onChange}
        type="text"
        placeholder="Search here..."
      />
      <h1>{counter}</h1>
      <button onClick={onRv}>click me</button>
    </div>
  );
}

export default App;
