import React, { useState } from "react";

const SSRApp = ({ data }) => {
  const [result, setResult] = useState(data);
  if (!result) {
    setResult('Howdy ho neigbor');
  }
  return (
    <div>
      <p>Hello from SSRApp</p>
      <p>{result}</p>
    </div>
  );
};

export default SSRApp;
