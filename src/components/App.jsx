import React, { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [click, setClick] = useState(false);

  function handleChange(event) {
    setName(event.target.value);
  }

  function handleClick() {
    setClick(name);
  }
  return (
    <div className="container">
      <h1>Hello {click} </h1>
      <input
        onChange={handleChange}
        type="text"
        placeholder="What's your name?"
        value={name}
      />
      <button onClick={handleClick}>Submit</button>
    </div>
  );
}

export default App;
