import React, { memo, useState } from "react";
import { TextField, Button } from "@mui/material";

import { Wrapper } from "./styled";

const LogIn = memo((): JSX.Element => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <Wrapper>
      <h2>Log in</h2>
      <TextField
        id="outlined-basic"
        variant="outlined"
        onChange={(e) => {
          setEmail(e.target.value);
        }}
        value={email}
        placeholder="Email"
      />
      <TextField
        onChange={(e) => {
          setPassword(e.target.value);
        }}
        value={password}
        placeholder="Password"
      />
      <Button variant="outlined">Log in</Button>
    </Wrapper>
  );
});

export { LogIn };
