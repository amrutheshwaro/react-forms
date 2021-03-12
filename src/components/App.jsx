import React, { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [heading, setHeading] = useState("");

  const handleChange = function (event) {
    setName(event.target.value);
  };

  const handleClick = function (event) {
    setHeading(name);
    event.preventDefault();
  };

  return (
    <div className="container">
      <h1>Hello {heading}</h1>
      <form onSubmit={handleClick}>
        <input
          onChange={handleChange}
          type="text"
          placeholder="What's your name?"
          value={name}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
