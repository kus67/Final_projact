import React, { useState } from "react";
import Button from "@mui/material/Button";

function MUI() {
  const [inputValue, setinputValue] = useState("");
  return (
    <div>
      <input
        className=" border"
        placeholder="input your comen"
        onChange={(e) => setinputValue(e.target.value)}
      />
      <Button variant="text">Text</Button>
      <Button variant="contained" color="info" disabled={!inputValue}>
        Contained
      </Button>
      <Button variant="outlined">Outlined</Button>
    </div>
  );
}

export default MUI;
